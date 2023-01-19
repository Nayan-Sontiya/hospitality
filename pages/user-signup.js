import React, { useState, useEffect } from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import {
  loginPostRequestWithFormControl,
  GetRequest,
  accessTokenProvider,
} from "../components/helpers/ApiHelper";
import { useGoogleLogin } from "@react-oauth/google";
import Style from "../styles/Home.module.css";
import swal from "sweetalert";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { modalOpenShow } from "../components/helpers/HelperFunctions";
import { useRouter } from "next/router";
import Head from "next/head";
import Loader from "../components/common-components/Loader";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppIcon from '../public/images/wapp.png'
import { gapi } from "gapi-script";

function SignupPage() {
  const clientId =
    "410257383474-ffjmg61h1hu1bk8bmtubj0uanvrd4c17.apps.googleusercontent.com";
  const [name, setName] = useState("");
  const [contact1, setContact1] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [question, setQuestion] = useState("");
  // let [stateCode, setStateCode] = useState("");
  // let [countryCode, setCountryCode] = useState("IN");
  // const [country, setCountry] = useState("India");
  // const [state, setState] = useState("");
  // const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [outletName, setOutletName] = useState("");
  const [outletAddress, setOutletAddress] = useState("");
  const [characterCheck, setCharacterCheck] = useState("na");
  let [checkBox, setCheckBox] = useState(false);
  const [validEmail, setValidEmail] = useState("na");
  const [passwordShown, setPasswordShown] = useState(false);
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [searchType, setSearchType] = useState("");
  const [menu, setMenu] = useState("");
  const [fssaiNumber, setFssaiNumber] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  let router = useRouter();
  let accessToken = accessTokenProvider();
  useEffect(() => {}, [zipCode]);
  useEffect(() => {
    if (accessToken !== null && accessToken !== "") {
      router.push("/");
    }
  }, [accessToken]);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  useEffect(() => {
    AllCountries();
  }, []);

  const responseGoogle = (response) => {
    console.log("response => ", response);
  };

  const responseGoogle1 = (response) => {
    console.log("response1 => ", response);
  };

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
    }
  };

  const handleCity = async (e) => {
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

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });


  useEffect(() => {
    if (question === "New Outlet") {
      setOutletName("NA");
      setOutletAddress("NA");
    } else {
      setOutletName("");
      setOutletAddress("");
    }
  }, [question]);
  useEffect(() => {
    if (searchType === "Domestic") {
      setOutletName("NA");
      setOutletAddress("NA");
      setQuestion("New Outlet");
    } else {
      setOutletName("");
      setOutletAddress("");
    }
  }, [searchType]);
  useEffect(() => {
    {
      if (name !== "")
        if (!/^[a-zA-Z\s]*$/g.test(name)) {
          setCharacterCheck(false);
        } else {
          setCharacterCheck(true);
        }
    }
  }, [name]);
  const UserSignup = async () => {
    if (searchType === "") {
      swal("Info", "Please select Restaurant or Domestic", "warning");
    } else if (name === "") {
      swal("Info", "Please enter your name", "warning");
    } else if (characterCheck === false) {
      swal("Info", "Please enter valid name", "warning");
    } else if (email === "") {
      swal("Info", "Please enter your email", "warning");
    } else if (validEmail === false) {
      swal("Info", "Please enter valid email", "warning");
    } else if (password === "") {
      swal("Info", "Please enter password", "warning");
    } else if (contact1 === "") {
      swal("Info", "Please enter your mobile number", "warning");
    } else if (selectedCountry === "") {
      swal("Info", "Please select country", "warning");
    } else if (selectedState === "") {
      swal("Info", "Please select state", "warning");
    } else if (city === "") {
      swal("Info", "Please select city", "warning");
    } else if (zipCode === "") {
      swal("Info", "Please enter zipcode", "warning");
    } else if (outletName === "") {
      swal("Info", "Please enter your outlet name", "warning");
    } else if (checkBox === false) {
      swal("Info", "Please select terms and condition", "warning");
    } else {
      setLoading(true);
      var data = new FormData();
      data.append("name", name);
      data.append("contactno1", contact1);
      data.append("email", email);
      data.append("password", password);
      data.append("question", question);
      data.append("country", selectedCountry);
      data.append("state", selectedState);
      data.append("city", selectedCity);
      data.append("zipcode", zipCode);
      data.append("outlet_name", outletName);
      data.append("search_type", searchType);
      data.append("fssai_number", fssaiNumber);
      data.append("gst_number", gstNumber);
      [...menu].forEach((image) => {
        data.append("menu[]", image);
      });

      const returnValue = await loginPostRequestWithFormControl(
        "userSignup",
        data
      );

      if (returnValue.status === 200) {
        localStorage.setItem(
          "hospitalityFinderAccessToken",
          JSON.stringify(returnValue.accessToken)
        );
        localStorage.setItem(
          "hospitalityFinderUserData",
          JSON.stringify(returnValue.data)
        );
        setLoading(false);
        router.push("/thanks-page");
      } else {
        setLoading(false);
        swal("Info", returnValue.message, "error");
      }
    }
  };
  useEffect(() => {
    const {
      query: { callback },
    } = router;
    if (callback) {
      modalOpenShow("loginModal");
    }
  }, [router.query]);
  function EmailCheck() {
    if (email != "") {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(email) === false) {
        setValidEmail(false);
      } else {
        setValidEmail(true);
      }
    } else {
      setValidEmail(true);
    }
  }

  return (
    <div>
      <Head>
        <title>
          Hospitality Finder | Leading website for hospitality employers
        </title>
        <meta
          name="description"
          content="Hospitality Finder is a Leading website for hospitality employers and hospitality job seekers. Find Hospitality staff to fulfil your hospitality job requirements easily."
        />
        <meta
          name="google-site-verification"
          content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM"
        />
        <meta
          name="Keywords"
          content="Leading website for hospitality employers,
          Best website to fulfil hospitality staff requirements,
          hospitality job requirements,
          best website for hospitality employees,
          best website for hospitality employers,
          waiter hire for hotel,
          stewards hire for hotel,
          bartenders hire for hotel,
          online professional chefs hire for hotel,
          F	&#38; B manager hire for hotel,
          housekeepers hire for hotel,
          utility staff hire for hotel,
          receptionist hire for hotel,
          lobby managers hire for hotel,
          business development manager hire for hotel,
          reservation executive hire for hotel,
          security staff hire for hotel,
          account manager hire for hotel,
          accountant hire for hotel,
          managers hire for hotel,
          restaurant managers hire for hotel,
          residential managers hire for hotel,
          hotel security staff hire for hotel,
          event staff hire for hotel,
          bartending helper hire for hotel,
          best site to hire hotel staff,
          best website to select hospitality staff,
          hostess hire for hotel,
          front desk agent hire for hotel,
          sales manager hire for hotel"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleOAuthProvider>
      {process.browser ? (
        <>
          <Header />

          <div className={Style.signupContainer}>
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-6">
                <img
                  src="/images/signup-banner.png"
                  className="w-full"
                  alt="I want to hire A Chef "
                />
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-6">
                <p className="text-3xl pl-10">Create Account</p>
                <div className="px-5 sm:px-10 md:px-10">
                  <div className="w-full mt-3">
                    <div className="pl-5 flex">
                      <div className="flex ">
                        <input
                          type="radio"
                          name="searchType"
                          value="Domestic"
                          className={Style.radioBtn + " mt-5"}
                          onChange={(e) => setSearchType(e.target.value)}
                        />
                        <label className={Style.labelStyleRadio}>
                          Domestic
                        </label>
                      </div>
                      <div className="flex  pl-6">
                        <input
                          type="radio"
                          name="searchType"
                          value="Restaurant"
                          className={Style.radioBtn + " mt-5"}
                          onChange={(e) => setSearchType(e.target.value)}
                        />
                        <label className={Style.labelStyleRadio}>
                          Restaurant
                        </label>
                      </div>
                      <div className="flex  pl-6">
                        <input
                          type="radio"
                          name="searchType"
                          value="Both"
                          className={Style.radioBtn + " mt-5"}
                          onChange={(e) => setSearchType(e.target.value)}
                        />
                        <label className={Style.labelStyleRadio}>Both</label>
                      </div>
                    </div>
                  </div>
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
                    <span
                      className={
                        validEmail === false ? " text-red-500 pl-5" : "hidden"
                      }
                    >
                      Please enter valid Email.
                    </span>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className={Style.InputStyle}
                      value={email}
                      onBlur={EmailCheck}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full mt-3 ">
                    <div className={Style.InputStyle + " flex"}>
                      <input
                        type={passwordShown ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full focus:outline-none bg-[#fafafe] dark:bg-[#1C253F]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="right-0  bg-[#fafafe] dark:bg-[#1C253F] W-12 pt-3 pr-3 rounded-r-lg">
                        {passwordShown ? (
                          <img
                            src="/images/eye-icon.png"
                            alt="Chefs near me"
                            className={Style.eyeIconStyle}
                            onClick={togglePasswordVisiblity}
                          />
                        ) : (
                          <img
                            src="/images/eye-close-icon.png"
                            alt="What to look for when hiring a chef"
                            className={Style.eyecloseIconStyle}
                            onClick={togglePasswordVisiblity}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3">
                    <PhoneInput
                      country={"in"}
                      value={contact1}
                      onChange={(e) => setContact1(e)}
                      placeholder="Enter Contact Number"
                    />
                  </div>

                  <div className="">
                    <div className="w-full mt-3">
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
                    <div className="w-full mt-3">
                      <select
                        className={Style.InputStyle}
                        onChange={(e) => {
                          handleState(e);
                        }}
                      >
                        <option disabled selected>
                          Select Country
                        </option>
                        {country?.map((item, index) => (
                          <option value={item.value} key={index}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="">
                    <div className="w-full mt-3">
                      <select
                        className={Style.InputStyle}
                        onChange={(e) => {
                          handleCity(e);
                        }}
                      >
                        <option>Select State</option>
                        {state?.map((item, index) => (
                          <option value={item.value} key={index}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full mt-3">
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
                  </div>
                  {searchType === "Restaurant" || searchType === "Both" ? (
                    <>
                      <div className="w-full mt-3">
                        <label className="pl-2">Add Your menu</label>
                        <input
                          type="file"
                          multiple="multiple"
                          className={Style.InputStyle + " pt-1"}
                          // accept="image/*"
                          onChange={(e) => setMenu(e.target.files)}
                        />
                        <span className="text-blue-500 text-xs">
                          You Can Add Multiple menus
                        </span>
                      </div>
                      <div className="w-full mt-3">
                        <input
                          type="text"
                          placeholder="Enter your FSSAI number"
                          className={Style.InputStyle}
                          onChange={(e) => setFssaiNumber(e.target.value)}
                        />
                      </div>
                      <div className="w-full mt-3">
                        <input
                          type="text"
                          placeholder="Enter your GST number"
                          className={Style.InputStyle}
                          onChange={(e) => setGstNumber(e.target.value)}
                        />
                      </div>

                      <div className="w-full mt-3">
                        <label className={Style.labelStyle}>
                          Are you recruiting for or / an
                        </label>
                        <select
                          className={Style.InputStyle}
                          onChange={(e) => setQuestion(e.target.value)}
                        >
                          <option value="">Please Select</option>
                          <option value="New Outlet">New Outlet</option>
                          <option value="Estabilished Organization">
                            Estabilished Organization{" "}
                          </option>
                        </select>
                      </div>
                      {question === "Estabilished Organization" ? (
                        <>
                          <div className="w-full mt-3">
                            <input
                              type="text"
                              placeholder="Outlet Name"
                              value={outletName}
                              className={Style.InputStyle}
                              onChange={(e) => setOutletName(e.target.value)}
                            />
                          </div>
                          <div className="w-full mt-3">
                            <input
                              type="text"
                              placeholder="Outlet Address"
                              value={outletAddress}
                              className={Style.InputStyle}
                              onChange={(e) => setOutletAddress(e.target.value)}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                  <div className="w-full flex mt-5 pl-5">
                    <input
                      type="checkbox"
                      value={checkBox}
                      className=" h-5 w-5  3xl:h-8 3xl:w-8"
                      onChange={(e) => setCheckBox(e.target.checked)}
                    />
                    <label className=" pl-3 text-sm 3xl:text-xl">
                      I agree to Terms &#38; Conditions and Privacy Policy
                    </label>
                  </div>
                  <div className="w-full mt-10  text-center">
                    <button
                      className={Style.signupBtn}
                      onClick={UserSignup}
                      type="button"
                      disabled={loading}
                    >
                      SIGN UP {loading && <Loader size="h-8 w-8 ml-5" />}
                    </button>
                  </div>
                  <div className="mb-10">
                    <label className=" pl-3 3xl:text-xl ">
                      Already have an account? &nbsp;
                      <button
                        className="text-[#1B1465] text-md 3xl:text-2xl"
                        onClick={() => modalOpenShow("loginModal")}
                      >
                        Login
                      </button>
                    </label>
                    <button onClick={() => login()}>
                      Sign in with Google 🚀{" "}
                    </button>
                    ;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        ""
      )}
      </GoogleOAuthProvider>
      <WhatsAppLogo />
    </div>
  );
}

export default SignupPage;
