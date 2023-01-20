import React, { useState, useEffect } from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import Style from "../styles/Home.module.css";
import ReactWhatsapp from 'react-whatsapp';

import {
  GetRequest,
  PutRequest,
  userDataProvider,
  PutRequestFormControl,
  awsUrl,
  userStatusProvider,
} from "../components/helpers/ApiHelper";
import Modal from "../components/common-components/Modal";
import {
  closeModalProfile,
  modalOpenShow,
} from "../components/helpers/HelperFunctions";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import swal from "sweetalert";
import { useRouter } from "next/router";
import Head from "next/head";
import WhatsAppLogo from "../components/common-components/WhatsApp";
function MyProfile() {
  let userData = userDataProvider();
  let userStatus = userStatusProvider();
  let router = useRouter();
  const [name, setName] = useState(userData !== undefined ? userData.name : "");
  const [contact1, setContact1] = useState(
    userData !== undefined ? userData.contactno1 : ""
  );
  const [contact2, setContact2] = useState(
    userData !== undefined ? userData.contactno2 : ""
  );
  const [zipCode, setZipCode] = useState(
    userData !== undefined ? userData.zipcode : ""
  );
  const [characterCheck, setCharacterCheck] = useState("na");
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedCountryId, setSelectedCountryId] = useState();
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [profilePic, setProfilePic] = useState([]);

  const redirect = () => {
    router.push("/");
  };
  useEffect(() => {
    if (userData !== undefined && userData !== "" && userData !== null) {
      setSelectedCountry(userData.country);
      setSelectedState(userData.state);
      setSelectedCity(userData.city);
    }
  }, []);
  useEffect(() => {
    AllCountries();
  }, []);

  const AllCountries = async () => {
    let returnValue = await GetRequest("getcountry/all");
    if (returnValue) {
      var newArray = [];
      var countryArray = returnValue.map((item) =>
        newArray.push({ name: item.name, value: item.isoCode })
      );
      setCountry(newArray);
    }
  };
  useEffect(() => {
    if (userData !== undefined && userData !== "" && userData !== null) {
      setSelectedCountryId(userData?.country);
      handleStateHandler(userData.country);
      handleCityProvider(userData.country, userData.state);
    }
  }, []);
  const handleStateHandler = async (value) => {
    let returnValue = await GetRequest("getstates/countryid_" + value);
    if (returnValue.length !== undefined && returnValue.length > 0) {
      var newArray = [];
      var stateArray = returnValue.map((item) =>
        newArray.push({ name: item.name, value: item.isoCode })
      );
      setState(newArray);
    }
  };
  const handleCityProvider = async (countryId, stateId) => {
    let returnValue = await GetRequest(
      "getcities/contstid_" + countryId + "_stateid_" + stateId
    );
    if (returnValue.length !== undefined && returnValue.length > 0) {
      var newArray = [];
      var cityArray = returnValue.map((item) =>
        newArray.push({ name: item.name, value: item.isoCode })
      );
      setCity(newArray);
    }
  };
  const handleState = async (e) => {
    var value = e.target.value;
    setSelectedCountryId(value);
    setSelectedCountry(value);
    let returnValue = await GetRequest("getstates/countryid_" + value);
    if (returnValue.length !== undefined && returnValue.length > 0) {
      var newArray = [];
      var stateArray = returnValue.map((item) =>
        newArray.push({ name: item.name, value: item.isoCode })
      );
      setState(newArray);
      setCity([]);
    }
  };
  const handleCity = async (e, selectedCountryId) => {
    var value = e.target.value;
    setSelectedState(value);
    let returnValue = await GetRequest(
      "getcities/contstid_" + selectedCountryId + "_stateid_" + value
    );
    if (returnValue.length !== undefined && returnValue.length > 0) {
      var newArray = [];
      var cityArray = returnValue.map((item) =>
        newArray.push({ name: item.name, value: item.isoCode })
      );

      setCity(newArray);
    }
  };
  const UserProfileUpdate = async () => {
    let item = {
      name: name,
      countryCode: userData.countryCode,
      contactno1: contact1,
      contactno2: contact2,
      city: selectedCity,
      country: selectedCountry,
      state: selectedState,
      zipcode: zipCode,
    };
    const response = await PutRequest(
      "updateUserDetails/" + userData._id,
      item
    );
    if (response.message === "Profile successfully updated") {
      localStorage.setItem(
        "hospitalityFinderUserData",
        JSON.stringify(response.data)
      );
      swal("", "Your Profile has been Successfully Updated", "success");
      closeModalProfile("updateUserProfile");
      router.reload();
    } else {
      swal("", response.message, "info");
    }
  };
  function UploadProfile() {
    document.getElementById("profilePic").click();
  }
  useEffect(() => {
    if (profilePic.length > 0) {
      UploadProfilePic();
    }
  }, [profilePic]);

  const UploadProfilePic = async () => {
    var data = new FormData();
    [...profilePic].forEach((image) => {
      data.append("profile_pic", image);
    });
    let response = await PutRequestFormControl(
      "uploadUserPic/" + userData._id,
      data
    );
    if (response.status === 200) {
      localStorage.setItem(
        "hospitalityFinderUserData",
        JSON.stringify(response.data)
      );
      swal("Profile pic updated successfully !", "", "success");

      router.reload();
    } else {
      swal("Error", response.message, "error");
    }
  };

  return (
    <div>
      <Head>
        <title>
          Hospitality Finder | Find the best hospitality management staff
        </title>
        <meta
          name="description"
          content="Welcome to Hospitality Finder, a comprehensive online search service for businesses seeking hospitality professional or staff."
        />
        <meta name="google-site-verification" content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM" />
        <meta
          name="Keywords"
          content="best hospitality management staff,
          top accountants list,
          top business development managers list,
          top hotel security staff list,
          talented managers list,
          top utility staff list,
          top hostess list,
          top event management staff list,
          experienced waiters list,
          experienced stewards list,
          top bartenders list,
          experienced captains list,
          experienced housekeepers list,
          experienced receptionists list,
          top lobby managers list,
          experienced doormans list,
          experienced room attendant list,
          experienced security staff list,
          experienced restaurant managers list,
          experienced residential managers list,
          top mixologists list,
          top jugglers list,
          experienced bartending helpers list,
          experienced front office executives list,
          experienced back office executives list,
          experienced front desk agents list,
          experienced sales managers list,
          top reservation executives list,
          top electricians list,
          experienced F&#38;B managers list"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (
        <>
          {userData !== "" && userData !== null && userData !== undefined ? (
            <>
              <Header />
              <div className="border-b border-[#B7B0FF] pb-20">
                <div className="w-full grid justify-items-end">
                  <button
                    className="px-8 mr-36 my-20 h-8 text-sm bg-[#1b1465] text-[#ffffff] rounded-xl font-light"
                    onClick={() => modalOpenShow("updateUserProfile")}
                  >
                    Edit Profile
                  </button>
                </div>
                <div className="grid justify-items-center">
                  <div className="w-11/12 sm:w-9/12 md:w-4/12">
                    <div className="grid justify-items-center">
                      {userData.profile_pic !== "" &&
                        userData.profile_pic !== null &&
                        userData.profile_pic !== undefined ? (
                        <div className="">
                          <img
                            src={userData?.externalAuth ? userData.profile_pic : awsUrl + userData.profile_pic}
                            alt="Looking Chef for my restaurant"
                            className="h-20 w-20 rounded-full object-cover"
                          />
                          <img
                            src="/images/plus-icon.png"
                            alt="Guide to Hiring a Personal Chef"
                            className="h-6 w-6 ml-14 rounded-full -translate-y-6"
                            onClick={() => UploadProfile()}
                          />
                          <input
                            type="file"
                            accept="images"
                            className="hidden"
                            id="profilePic"
                            onChange={(e) => setProfilePic(e.target.files)}
                          />
                        </div>
                      ) : (
                        <div
                          className="border rounded-full p-3"
                          onClick={() => UploadProfile()}
                        >
                          <img
                            src="/images/camera.png"
                            alt="Professional Chefs"
                            className="h-16 w-16"
                          />
                          <input
                            type="file"
                            accept="images"
                            className="hidden"
                            id="profilePic"
                            onChange={(e) => setProfilePic(e.target.files)}
                          />
                        </div>
                      )}
                    </div>
                    <p className={Style.profileFieldsStyle}>{userData.name}</p>
                    <p className={Style.profileFieldsStyle}>{userData.email}</p>
                    <p className={Style.profileFieldsStyle}>**********</p>
                    <p className={Style.profileFieldsStyle}>
                      + {userData.contactno1}
                    </p>
                    <p className={Style.profileFieldsStyle}>
                      + {userData.contactno2}
                    </p>
                    <div className="flex">
                      <p className={Style.profileFieldsStyle + " mr-2"}>
                        {
                          country?.find((c) => c.value === userData.country)
                            ?.name
                        }
                      </p>
                      <p
                        className={
                          Style.profileFieldsStyle + " ml-2 xs:ml-auto"
                        }
                      >
                        {state?.find((c) => c.value === userData.state)?.name}
                      </p>
                    </div>
                    <div className="flex">
                      <p className={Style.profileFieldsStyle + " mr-2"}>
                        {userData.city}
                      </p>
                      <p className={Style.profileFieldsStyle + " ml-2"}>
                        {userData.zipcode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Modal
                modalId="updateUserProfile"
                modalTitle="Update Profile"
                modalBody={
                  <div className="px-5 ">
                    <div className="w-full mt-3">
                      <span
                        className={
                          characterCheck === false
                            ? "text-red-500 pl-5"
                            : " hidden"
                        }
                      >
                        Please enter valid name
                      </span>
                      <input
                        type="text"
                        maxLength="30"
                        placeholder="Enter your full name"
                        className={Style.InputStyle}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="w-full mt-3">
                      <PhoneInput
                        country={"in"}
                        value={contact1}
                        onChange={(e) => setContact1(e)}
                      />
                    </div>
                    <div className="w-full mt-3">
                      <PhoneInput
                        country={"in"}
                        value={contact2}
                        onChange={(e) => setContact2(e)}
                      />
                    </div>
                    <div className="w-full mt-3 flex">
                      <div className="w-1/2 pr-2">
                        <select
                          className={Style.InputStyle}
                          onChange={(e) => {
                            handleState(e);
                          }}
                          value={selectedCountry}
                        >
                          <option>Select Country</option>
                          {country?.map((item, index) => (
                            <option value={item.value} key={index}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-1/2 pl-2">
                        <select
                          className={Style.InputStyle}
                          onChange={(e) => {
                            handleCity(e, selectedCountryId);
                          }}
                          value={selectedState}
                        >
                          <option>Select State</option>
                          {state?.map((item, index) => (
                            <option value={item.value} key={index}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="w-full mt-3 flex">
                      <div className="w-1/2 pr-2">
                        <select
                          className={Style.InputStyle}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          value={selectedCity}
                        >
                          <option>Select City</option>
                          {city?.map((item, index) => (
                            <option value={item.value} key={index}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-1/2 pl-2">
                        <input
                          type="text"
                          placeholder="Zipcode"
                          value={zipCode}
                          maxLength="10"
                          className={Style.InputStyle}
                          onInput={(e) =>
                          (e.target.value = e.target.value
                            .replace(/[^0-9]/g, "")
                            .replace(/(\..*?)\..*/g, "$1"))
                          }
                          onChange={(e) => setZipCode(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="w-full py-6 grid justify-items-center">
                      <button
                        className="bg-[#1b1465] hover:bg-[#8f85fd] py-2 text-white px-5 rounded"
                        onClick={() => UserProfileUpdate()}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                }
                modalFooter=""
              />
              <Footer />
            </>
          ) : (
            <>{redirect()}</>
          )}
        </>
      ) : (
        ""
      )}
      <WhatsAppLogo />
    </div>
  );
}

export default MyProfile;
