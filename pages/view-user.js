import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Style from "../styles/Home.module.css";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import {
  accessTokenProvider,
  awsUrl,
  GetRequest,
  userDataProvider,
} from "../components/helpers/ApiHelper";
import { multipleMediaIdentifier } from "../components/helpers/HelperFunctions";
import Loader from "../components/common-components/Loader";

const ViewUser = () => {
  let [searchData, setSearchData] = useState([]);
  let [buttonLoader, setButtonLoader] = useState(false);
  let [hasCandidateData, setHasCandidateData] = useState(false);
  let userData = userDataProvider();
  let router = useRouter();
  function getWords(monthCount) {
    if (monthCount === 0) {
      return "Fresher";
    }
    function getPlural(number, word) {
      return (number === 1 && word.one) || word.other;
    }
    var months = { one: "month", other: "months" },
      years = { one: "year", other: "years" },
      m = monthCount % 12,
      y = Math.floor(monthCount / 12),
      result = [];
    y && result.push(y + " " + getPlural(y, years));
    m && result.push(m + " " + getPlural(m, months));
    return result.join(" , ");
  }
  const { userId } = router.query;

  const {
    photo_of_candidate,
    name_of_candidate,
    salary_expectation,
    gender,
    location_of_work,
    category,
    experience_in_month,
    marital_status,
    languages,
    experiences,
    religion,
    objective,
    dob,
    dish,
  } = searchData || {};
  let accessToken = accessTokenProvider();

  // useEffect(() => {
  //   if (
  //     accessToken === "" ||
  //     accessToken === null ||
  //     accessToken === undefined
  //   ) {
  //     router.push("/");
  //   }
  // }, [accessToken]);
  const getCandidateResume = async (candidateId) => {
    let resp = await GetRequest(
      "getCandidateResume/" + userData._id + "/" + candidateId
    );
    if (resp.status === 200) {
      window.open(
        `${window.location.origin}/user-details/?id=${candidateId}`,
        "_targetBlank"
      );
    } else {
      swal({
        title: "Info",
        text: resp.message,
        icon: "warning",
      }).then(function (isConfirm) {
        if (isConfirm) {
          router.push("/packs");
        }
      });
    }
  };
  const getUser = async () => {
    if (userId) {
      setButtonLoader(true);
      let response = await GetRequest("getCandidateInfoWithoutAuth/" + userId);
      if (response.status === 200) {
        setSearchData(response.data);
        setButtonLoader(false);
      } else {
        swal("Info", response.message, "info");
        if (response.message === "Unauthorized access!") {
          router.push("/");
        }
        setSearchData({});
        setButtonLoader(false);
      }
    }
  };
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  useEffect(() => {
    getUser();
  }, [userId]);
  const redirect = () => {
    if (accessToken) {
      getCandidateResume(userId);
    }
    router.push(`/user-signup/?callback=/user-details/?id=${userId}`);
  };
  useEffect(() => {
    setHasCandidateData(searchData && !!Object.values(searchData)?.length);
  }, [searchData]);
  return (
    <div>
      <Head>
        <title>View User | We provide restaurant staffing solutions</title>
        <meta
          name="description"
          content="Welcome to Hospitality Finder, a comprehensive online search service for businesses seeking hospitality professional or staff."
        />
        <meta
          name="google-site-verification"
          content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header PageName="home" />
        <div className="col-span-12 md:col-span-12">
          {buttonLoader === true ? (
            <Loader />
          ) : (
            <div className="pb-5 m-5">
              {hasCandidateData && (
                <div className=" p-3 border border-[#7f7f7f] rounded-xl mt-2">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-12 pt-1 md:col-span-3 m-auto">
                      {photo_of_candidate !== "" ? (
                        <img
                          src={
                            awsUrl + photo_of_candidate.split(/\s*(,)\s*/)[0]
                          }
                          className="rounded h-60 md:w-44 object-contain"
                          alt="Find chefs for my restaurant"
                        />
                      ) : (
                        <img
                          src={
                            "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                          }
                        />
                      )}
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-5">
                      <p className="text-xl 3xl:text-3xl pl-5 text-[#000000] uppercase">
                        {name_of_candidate
                          ? name_of_candidate?.split(" ")[0]
                          : "-"}
                      </p>

                      <span className="pl-5 text-[18px] text-[#fbbc07] 3xl:text-3xl flex">
                        &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
                        <p className="text-black pl-3">{`(${randomIntFromInterval(
                          100,
                          200
                        )})`}</p>
                      </span>
                      <div className="">
                        <label className={Style.userLabelStyle}>
                          EXPECTED SALARY
                        </label>
                        <p className="text-sm text-[#000000] pt-1 pl-5 break-all">
                          &#8377; {salary_expectation}/month
                          <br />
                          (negotiable)
                        </p>
                      </div>
                      <div className="pt-2">
                        <label className={Style.userLabelStyle}>Gender</label>
                        <p className="text-sm text-[#000000] pt-1 pl-5 break-all">
                          {gender}
                        </p>
                      </div>
                      <div className="pt-2">
                        <label className={Style.userLabelStyle}>
                          PREFERRED LOCATION
                        </label>
                        <div className="flex p-0 m-0 pl-5 ">
                          {/* <span style={{ fontSize: "12px", marginTop: "5px" }}>
                            &#9679;
                          </span> */}
                          <img
                            src="/images/userIcon/location.png"
                            alt="finding a personal chef"
                            className="h-6 w-6"
                          />
                          <p className="text-sm text-[#000000] pt-1 pl-1 break-all">
                            {location_of_work.toString()}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <label className={Style.userLabelStyle}>RELIGION</label>
                        <div className="flex p-0 m-0 pl-5 ">{religion}</div>
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 pt-0 md:pt-8">
                      <label className={Style.userLabelStyle}>
                        JOB SECTION
                      </label>
                      <div className="flex p-0 m-0 pl-5 ">
                        <span style={{ fontSize: "12px", marginTop: "5px" }}>
                          &#9679;
                        </span>
                        <p className="text-sm text-[#000000] pt-1 pl-1 break-all">
                          {category[0] !== "" ? category.toString() : ""}
                        </p>
                      </div>
                      <div className="pt-2">
                        <label className={Style.userLabelStyle}>
                          Total Experience
                        </label>
                        <div className="flex p-0 m-0 pl-5 ">
                          <span
                            style={{
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            &#9679;
                          </span>
                          <p className="text-sm text-[#000000] pt-1 pl-1 break-all">
                            {getWords(experience_in_month)}
                          </p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <label className={Style.userLabelStyle}>
                          Marital Status
                        </label>
                        <p className="text-sm text-[#000000] pt-1 pl-5 break-all">
                          {marital_status}
                        </p>
                      </div>
                      <div className="pt-2">
                        <label className={Style.userLabelStyle}>
                          Languages Known
                        </label>
                        <p className="text-sm text-[#000000] pt-1 pl-5">
                          {languages}
                        </p>
                      </div>
                      <div className="pt-2">
                        <label className={Style.userLabelStyle}>
                          Date OF Birth
                        </label>
                        <p className="text-sm text-[#000000] pt-1 pl-5">
                          {dob}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-12 pt-1 md:col-span-3"></div>
                    <div className="col-span-12 sm:col-span-12 md:col-span-9 pt-0 md:pt-0">
                      <div className="pt-2">
                        <label className={Style.userLabelStyle}>
                          WORK EXPERIENCE
                        </label>
                        <div
                          className="flex p-0 m-0 pl-5 "
                          style={{ flexDirection: "column" }}
                        >
                          {experiences.map((exp, i) => {
                            return (
                              <li className="list-disc" key={i}>
                                Worked in {exp.expOutletName},{exp.expCity} as a{" "}
                                {exp.expDesignation} from {exp.expStartDate} to{" "}
                                {exp.expEndDate}.
                              </li>
                            );
                          })}
                        </div>
                      </div>
                      <div className="pt-2">
                        <label className={Style.userLabelStyle}>
                          OBJECTIVE
                        </label>
                        <div className="flex p-0 m-0 pl-5 ">
                          {objective !== "" ? objective : "NA"}
                        </div>
                      </div>
                      <div className="pt-2">
                        <label className={Style.userLabelStyle}>
                          Dish Images
                        </label>
                        <div className="flex p-0 m-0 pl-5 ">
                          {dish !== "" ? (
                            <div className="mt-2 grid grid-cols-6 lg:col-span-6 sm:col-span-6 md:py-8">
                              {dish
                                ? multipleMediaIdentifier(dish).map(
                                    (val, i) => {
                                      return (
                                        <div
                                          className="col-span-2 md:col-span-1 px-2"
                                          key={i}
                                        >
                                          <img
                                            src={awsUrl + val.media}
                                            className="md: h-35 sm:h-45 md:w-full object-cover rounded"
                                          />
                                        </div>
                                      );
                                    }
                                  )
                                : ""}
                            </div>
                          ) : (
                            "NA"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid justify-items-center">
                    <button
                      className="bg-[#F8B705] text-white px-5 py-1 mb-2 mt-8 rounded"
                      onClick={redirect}
                    >
                      Connect
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ViewUser;
