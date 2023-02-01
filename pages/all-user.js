import React, { useState, useEffect } from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import Style from "../styles/Home.module.css";
import { useRouter } from "next/router";
import {
  GetRequest,
  PostRequest,
  awsUrl,
  userDataProvider,
  accessTokenProvider,
} from "../components/helpers/ApiHelper";
import "rc-slider/assets/index.css";
import swal from "sweetalert";
import Loader from "../components/common-components/Loader";
import Lottie from "react-lottie";
import animationData from "../public/images/lottiesFile/search-lottie.json";
import imageDAta from "../public/images/lottiesFile/image-placeholder.json";
import { GradesWithCategory } from "./home";
import Head from "next/head";
import WhatsAppLogo from "../components/common-components/WhatsApp";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const ImageLottie = {
  loop: true,
  autoplay: true,
  animationData: imageDAta,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

// experienceStart,
// experienceEnd,
// category,
// sub_category,
function AllUser() {
  const router = useRouter();
  const salaryStart = router.query.salaryStart;
  const occupation = router.query.occupation;
  const salaryEnd = router.query.salaryEnd;
  const Location = router.query.location;
  const Occupation = router.query.occupationName;
  const expStart = router.query.experienceStart;
  const expEnd = router.query.experienceEnd;
  const categoryList = router.query.category;
  const subCategoryList = router.query.sub_category;
  let [occupationData, setOccupationData] = useState([]);
  let [categoryData, setCategoryData] = useState([]);
  let [occupationName, setOccupationName] = useState(Occupation);
  const [grades, setGrades] = useState([]);
  let [grade, setGrade] = useState("");
  let [location, setLocation] = useState("");
  let [salStart, setSalStart] = useState(salaryStart);
  let [salEnd, setSalEnd] = useState(salaryEnd);
  let [searchData, setSearchData] = useState([]);
  let [experienceStart, setExperienceStart] = useState(expStart);
  let [experienceEnd, setExperienceEnd] = useState(expEnd);
  let [occupationId, setOccupationId] = useState("");
  let [sub_category, setSub_category] = useState(
    subCategoryList !== undefined ? subCategoryList : ""
  );
  let [category, setCategory] = useState(
    categoryList !== undefined ? categoryList : ""
  );
  let [categoryId, setCategoryId] = useState("");
  let [subcategoryData, setSubcategoryData] = useState([]);
  let [buttonLoader, setButtonLoader] = useState(false);
  let userData = userDataProvider();
  let [requirementMessage, setRequirementMessage] = useState("");
  // let accessToken = accessTokenProvider();
 
  // useEffect(() => {
  //   if (
  //     accessToken === "" ||
  //     accessToken === null ||
  //     accessToken === undefined
  //   ) {
  //     router.push("/");
  //   }
  // }, [accessToken]);

  useEffect(() => {
    if (Location !== undefined) {
      GetSearchData(Location);
    }
  }, [Location]);

  useEffect(() => {
    if (occupation) {
      GetSearchData("");
    }
  }, [occupation]);

  useEffect(() => {
    GetOccupation();
  }, []);

  useEffect(() => {
    if (occupationId !== "") {
      getCategoryList();
      setSub_category([]);
      setCategory([]);
      setCategoryId([]);
    }
    // if (document.getElementById("categoryCheckbox") !== null) {
    //   document.getElementById("categoryCheckbox").checked = false;
    // }
  }, [occupationId]);
  // useEffect(() => {
  //   if (categoryId.length > 0) {
  //     getSubCategory();
  //   }
  // }, [categoryId]);
  useEffect(() => {
    let categoryIds = [];
    if (categoryData && categoryData?.length) {
      categoryData?.map((data, index) => categoryIds.push(data?._id));
    }
    getSubCategory(categoryIds);
  }, [categoryData]);
  const GetOccupation = async () => {
    let response = await GetRequest("getOccupations/all");
    setOccupationData(response.data);
  };
  async function getCategoryList() {
    let res = await GetRequest("getCategory/occupationId_" + occupationId);
    if (res.status === 200) {
      setCategoryData(res.data);
    } else {
      setCategoryData([]);
    }
  }
  async function getSubCategory(allCategoryId) {
    let item = {
      categoryId: allCategoryId,
    };
    let res = await PostRequest("getSubcategoryForFilter", item);
    if (res.status === 200) {
      setSubcategoryData(res.data);
    } else {
      setSubcategoryData([]);
    }
  }
  const CheckIfCategoryPresent = (categoryOpt) => {
    const token = category.includes(categoryOpt);
    return token;
  };
  // const categoryArr = (categoryArr) => {
  //   if (CheckIfCategoryPresent(categoryArr) === false) {
  //     setCategory([...category, categoryArr]);
  //   } else {
  //     let updatedSubCatArr = category.filter(
  //       (subCat) => subCat !== categoryArr
  //     );
  //     setCategory(updatedSubCatArr);
  //   }
  // };

  const categoryArray = (categoryArr, type, checked, categoryData) => {
    if (type === "all") {
      let temp = [];
      if (checked) {
        categoryArr.map((categoryVal, i) => {
          temp.push(categoryVal.category);
        });
        setCategory(temp);
      } else {
        setCategory(temp);
      }
    } else {
      if (!checked) {
        document.getElementById("all").checked = false;
      }
      if (CheckIfCategoryPresent(categoryArr) === false) {
        setCategory([...category, categoryArr]);

        if ([...category, categoryArr]?.length === categoryData?.length) {
          document.getElementById("all").checked = true;
        }
      } else {
        let updatedSubCatArr = category.filter(
          (subCat) => subCat !== categoryArr
        );
        setCategory(updatedSubCatArr);
        if (updatedSubCatArr?.length - 1 === categoryData?.length) {
          document.getElementById("all").checked = true;
        }
      }
    }
  };
  const CheckIfCategoryIdPresent = (categoryOpt) => {
    const token = categoryId.includes(categoryOpt);
    return token;
  };
  const categoryIdArr = (categoryIdArr) => {
    if (CheckIfCategoryIdPresent(categoryIdArr) === false) {
      setCategoryId([...categoryId, categoryIdArr]);
    } else {
      let updatedSubCatArr = categoryId.filter(
        (subCat) => subCat !== categoryIdArr
      );
      setCategoryId(updatedSubCatArr);
    }
  };
  const CheckIfSubCategoryPresent = (categoryOpt) => {
    const token = sub_category.includes(categoryOpt);
    return token;
  };
  const subCategoryArr = (subCategoryArr) => {
    if (CheckIfSubCategoryPresent(subCategoryArr) === false) {
      setSub_category([...sub_category, subCategoryArr]);
    } else {
      let updatedSubCatArr = sub_category.filter(
        (subCat) => subCat !== subCategoryArr
      );
      setSub_category(updatedSubCatArr);
    }
  };

  const GetSearchData = async (locationFirst) => {
   if(occupation){
    setButtonLoader(true);
    let item = {
      occupation,
    }
    let response = await PostRequest("getFilteredCandidatesByOccupation", item);
      if (response.message === "Success") {
        setSearchData(response.data);
      } else {
        swal("Info", response.message, "info");
        setSearchData([]);
      }
      setButtonLoader(false);
    return
   }
   
    if (occupationName === "" || occupationName === undefined) {
      swal("Info", "Please select occupation", "info");
    } else if (salStart === "" || salStart === undefined) {
      swal("Info", "Please select minimum salary range", "info");
    } else if (salEnd === "" || salEnd === undefined) {
      swal("Info", "Please select maximum salary range", "info");
    } else if (parseInt(salStart) >= parseInt(salEnd)) {
      swal(
        "Warning",
        "Minimum salary is not greater than or equal to maximum salary",
        "warning"
      );
    } else if (parseInt(experienceStart) >= parseInt(experienceEnd)) {
      swal(
        "Warning",
        "Minimum experience is not greater than or equal to maximum experience ",
        "warning"
      );
    } else {
      setButtonLoader(true);
      let item = {
        occupation: occupationName,
        salaryStart: salStart,
        salaryEnd: salEnd,
        location:
          locationFirst !== ""
            ? locationFirst
            : location !== ""
            ? location
            : userData?.city,
        experienceFrom: experienceStart,
        experienceTo: experienceEnd,
        chef_type: "",
        category: category.length > 0 ? category : "",
        sub_category: sub_category.length > 0 ? sub_category : "",
      };
      let response = await PostRequest("getFilteredCandidates", item);
      if (response.message === "Success") {
        setSearchData(response.data);
      } else {
        swal("Info", response.message, "info");
        setSearchData([]);
      }
      setButtonLoader(false);
    }
  };
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
  const viewCandidateDetails = (candidateId) => {
    window.open(
      `${window.location.origin}/view-user?userId=${candidateId}`,
      "_targetBlank"
    );
  };

  const AddRequirement = async () => {
    if (requirementMessage !== "") {
      let item = {
        name: userData.name,
        email: userData.email,
        requirement_message: requirementMessage,
      };
      const resp = await PostRequest("addRequirements", item);
      if (resp.status === 200) {
        swal("", "Your requirement added successfully!", "success");
        setRequirementMessage("");
      } else {
        swal("Info", resp.message, "info");
        setRequirementMessage("");
      }
    } else {
      swal("Info", "Please enter your requirement", "info");
    }
  };
  useEffect(() => {
    const tempGrades = GradesWithCategory?.filter(
      (grade) => grade?.category === occupationName
    );
    if (tempGrades?.length) {
      setGrades(tempGrades[0]?.grades);
    }
  }, [occupationName]);
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const setMinSalary = (type) => {
    switch (type) {
      case "UTILITY GUY":
        setSalStart(8000);
        break;
      case "CAPTAIN":
        setSalStart(13000);
        break;
      case "COMMI III/ Helper":
        setSalStart(9000);
        break;
      case "WAITER":
        setSalStart(9000);
        break;
      case "COMMI II":
        setSalStart(12000);
        break;
      case "COMMI I":
        setSalStart(20000);
        break;
      case "BARTENDER":
        setSalStart(20000);
        break;
      case "DCDP":
        setSalStart(25000);
        break;
      case "CDP":
        setSalStart(30000);
        break;
      case "Jr. SOUS Chef":
        setSalStart(35000);
        break;
      case "Senior SOUS Chef":
        setSalStart(50000);
        break;
      case "Executive Chef":
        setSalStart(75000);
        break;
      default:
        break;
    }
  };
  // const rndInt = randomIntFromInterval(100, 200);
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM"
        />
      </Head>
      {process.browser ? (
        <>
          <Header PageName="allUser" />

          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 border-r border-[#B7B7B7] px-2 ">
              <div className="h-16 w-full  flex justify-between pt-4">
                <p className="text-[#1B1465] text-2xl 3xl:text-4xl font-semiBold pl-5">
                  Filters
                </p>
              </div>
              <div className={Style.userDetailsContainerHeight + " px-3"}>
                <div className="bg-white rounded mt-1 ">
                  <div className=" w-full flex justify-between pt-4">
                    <select
                      className="w-full focus:outline-none text-md md:text-[14px] lg:text-md 3xl:text-2xl border border-[#C4C4C4] text-[#1b1465] py-2 px-2 rounded-lg"
                      id="employemntType"
                      onChange={(e) => {
                        setOccupationName(
                          e.target.options[e.target.selectedIndex].text
                        );
                        setOccupationId(e.target.value);
                      }}
                    >
                      {occupationData.length !== 0 ? (
                        <option disabled selected>
                          Select Occupation
                        </option>
                      ) : (
                        ""
                      )}
                      {occupationData.length !== 0 ? (
                        occupationData.map((categoryVal, i) => {
                          return (
                            <option key={i} value={categoryVal._id}>
                              {categoryVal.type}
                            </option>
                          );
                        })
                      ) : (
                        <option disabled selected>
                          No Employment Type found
                        </option>
                      )}
                    </select>
                  </div>
                </div>
                {categoryData.length !== 0 ? (
                  <div className="bg-white w-full  rounded mt-3 p-1 ">
                    <p className="text-md text-[#1B1465] 3xl:text-2xl">
                      Categories
                    </p>
                    <div className="flex p-1">
                      <input
                        type="checkbox"
                        value={"All"}
                        className="3xl:h-8 3xl:w-8"
                        id={"all"}
                        onChange={(e) => {
                          categoryArray(categoryData, "all", e.target.checked);
                        }}
                      />
                      <p className="text-[11px] 3xl:text-[18px] pl-1 3xl:pl-3 3xl:pt-1 ">
                        All
                      </p>
                    </div>
                    {categoryData.map((categoryVal, i) => {
                      return (
                        <div>
                          <div className="flex p-1" key={i}>
                            <input
                              type="checkbox"
                              value={categoryVal.category}
                              // id="categoryCheckbox"
                              className="3xl:h-6 3xl:w-6"
                              id={categoryVal._id}
                              checked={category.find(
                                (c) => c === categoryVal.category
                              )}
                              onChange={(e) => {
                                categoryArray(
                                  e.target.value,
                                  "",
                                  e.target.checked,
                                  categoryData
                                );
                                categoryIdArr(e.target.id);
                              }}
                            />
                            <p className="text-[11px] 3xl:text-xl text-[#1b1465] pl-1 3xl:pl-3 ">
                              {categoryVal.category}
                            </p>
                          </div>
                          {subcategoryData?.find(
                            (d, index) => d?.category === categoryVal.category
                          ) && (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                paddingLeft: "16px",
                              }}
                            >
                              {subcategoryData?.map((d, index) => {
                                return (
                                  <div className="flex p-1" key={i}>
                                    <input
                                      type="checkbox"
                                      value={d.subcategory}
                                      className="3xl:h-8 3xl:w-8"
                                      id={categoryVal._id}
                                      onChange={(e) =>
                                        subCategoryArr(e.target.value)
                                      }
                                    />
                                    <p className="text-[11px] 3xl:text-[18px] text-[#1b1465] pl-1 3xl:pl-3 3xl:pt-1 ">
                                      {d.subcategory}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}

                {grades.length !== 0 && (
                  <div className="bg-white w-full rounded mt-3 p-1">
                    <p className="text-md text-[#1B1465] 3xl:text-2xl">Grade</p>

                    <select
                      className="w-full focus:outline-none 3xl:w-96 3xl:h-14 text-sm 3xl:text-2xl border border-[#C4C4C4] text-[#000000] py-2 px-2 rounded-lg focus:rounded-lg"
                      onChange={(e) => {
                        setGrade(e.target.value);
                        setMinSalary(e.target.value);
                      }}
                    >
                      <option disabled selected>
                        Select Grade
                      </option>
                      {grades.map((Val, i) => (
                        <option key={i} value={Val}>
                          {Val}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <p className="pt-5 text-md text-[#1B1465] 3xl:text-2xl 3xl:pl-2">
                  {" "}
                  Select Salary Range
                </p>
                <div className="pt-1 flex w-full">
                  <select
                    className="focus:outline-none w-1/2 mr-2 text-md md:text-[14px] lg:text-md 3xl:text-2xl border border-[#C4C4C4] text-[#1b1465] py-2 px-2 rounded-lg"
                    onChange={(e) => setSalStart(e.target.value)}
                  >
                    <option disabled selected>
                      Min
                    </option>
                    <option className="text-[000000]" value="5000">
                      &#8377; 5000
                    </option>
                    <option className="text-[000000]" value="10000">
                      &#8377; 10000
                    </option>
                    <option className="text-[000000]" value="15000">
                      &#8377; 15000
                    </option>
                    <option className="text-[000000]" value="20000">
                      &#8377; 20000
                    </option>
                    <option className="text-[000000]" value="30000">
                      &#8377; 30000
                    </option>
                    <option className="text-[000000]" value="40000">
                      &#8377; 40000
                    </option>
                    <option className="text-[000000]" value="50000">
                      &#8377; 50000
                    </option>
                    <option className="text-[000000]" value="60000">
                      &#8377; 60000
                    </option>
                    <option className="text-[000000]" value="70000">
                      &#8377; 70000
                    </option>
                    <option className="text-[000000]" value="80000">
                      &#8377; 80000
                    </option>
                    <option className="text-[000000]" value="90000">
                      &#8377; 90000
                    </option>
                    <option className="text-[000000]" value="100000">
                      &#8377; 100000
                    </option>
                    <option className="text-[000000]" value="110000">
                      &#8377; 110000
                    </option>
                    <option className="text-[000000]" value="120000">
                      &#8377; 120000
                    </option>
                    <option className="text-[000000]" value="130000">
                      &#8377; 130000
                    </option>
                    <option className="text-[000000]" value="140000">
                      &#8377; 140000
                    </option>
                    <option className="text-[000000]" value="150000">
                      &#8377; 150000
                    </option>
                    <option className="text-[000000]" value="160000">
                      &#8377; 160000
                    </option>
                    <option className="text-[000000]" value="170000">
                      &#8377; 170000
                    </option>
                    <option className="text-[000000]" value="180000">
                      &#8377; 180000
                    </option>
                    <option className="text-[000000]" value="190000">
                      &#8377; 190000
                    </option>
                    <option className="text-[000000]" value="2000000">
                      &#8377; 200000
                    </option>
                  </select>
                  <select
                    className="focus:outline-none w-1/2 8ml-2 text-md md:text-[14px] lg:text-md 3xl:text-2xl border border-[#C4C4C4] text-[#1b1465] py-2 px-2 rounded-lg"
                    onChange={(e) => setSalEnd(e.target.value)}
                  >
                    <option disabled selected>
                      Max
                    </option>

                    <option className="text-[000000]" value="10000">
                      &#8377; 10000
                    </option>
                    <option className="text-[000000]" value="15000">
                      &#8377; 15000
                    </option>
                    <option className="text-[000000]" value="20000">
                      &#8377; 20000
                    </option>
                    <option className="text-[000000]" value="30000">
                      &#8377; 30000
                    </option>
                    <option className="text-[000000]" value="40000">
                      &#8377; 40000
                    </option>
                    <option className="text-[000000]" value="50000">
                      &#8377; 50000
                    </option>
                    <option className="text-[000000]" value="60000">
                      &#8377; 60000
                    </option>
                    <option className="text-[000000]" value="70000">
                      &#8377; 70000
                    </option>
                    <option className="text-[000000]" value="80000">
                      &#8377; 80000
                    </option>
                    <option className="text-[000000]" value="90000">
                      &#8377; 90000
                    </option>
                    <option className="text-[000000]" value="100000">
                      &#8377; 100000
                    </option>
                    <option className="text-[000000]" value="110000">
                      &#8377; 110000
                    </option>
                    <option className="text-[000000]" value="120000">
                      &#8377; 120000
                    </option>
                    <option className="text-[000000]" value="130000">
                      &#8377; 130000
                    </option>
                    <option className="text-[000000]" value="140000">
                      &#8377; 140000
                    </option>
                    <option className="text-[000000]" value="150000">
                      &#8377; 150000
                    </option>
                    <option className="text-[000000]" value="160000">
                      &#8377; 160000
                    </option>
                    <option className="text-[000000]" value="170000">
                      &#8377; 170000
                    </option>
                    <option className="text-[000000]" value="180000">
                      &#8377; 180000
                    </option>
                    <option className="text-[000000]" value="190000">
                      &#8377; 190000
                    </option>
                    <option className="text-[000000]" value="2000000">
                      &#8377; 200000
                    </option>
                  </select>
                </div>

                {/* 
              <p className="pt-5 text-md text-[#1B1465] 3xl:text-2xl 3xl:pl-2">
                Select Experience Range
              </p>

              <div className="pt-1 flex w-full">
                <select
                  className="focus:outline-none w-1/2 mr-2 text-md md:text-[14px] lg:text-md 3xl:text-2xl border border-[#C4C4C4] text-[#1b1465] py-2 px-2 rounded-lg"
                  onChange={(e) => setExperienceStart(e.target.value)}
                >
                  <option disabled selected>
                    Min
                </option>
                  <option value="0">0 month</option>
                  <option value="6">6 months</option>
                  <option value="12">1 year</option>
                  <option value="18">1.5 years </option>
                  <option value="24">2 years</option>
                  <option value="36">3 years</option>
                  <option value="48">4 years</option>
                  <option value="60">5 years</option>
                  <option value="72">6 years</option>
                  <option value="84">7 years</option>
                  <option value="96">8 years</option>
                  <option value="108">9 years</option>
                  <option value="120">10 years</option>
                  <option value="132">11 years</option>
                  <option value="144">12 years</option>
                  <option value="156">13 years</option>
                  <option value="168">14 years</option>
                  <option value="180">15 years</option>
                  <option value="192">16 years</option>
                  <option value="204">17 years</option>
                  <option value="216">18 years</option>
                  <option value="228">19 years</option>
                  <option value="240">20 years</option>
                  <option value="300">25 years</option>
                  <option value="360">30 years</option>
                  <option value="420">35 years</option>
                  <option value="480">40 years</option>
                  <option value="540">45 years</option>
                  <option value="600">50 years</option>
                </select>
                <select
                  className="focus:outline-none w-1/2 8ml-2 text-md md:text-[14px] lg:text-md 3xl:text-2xl border border-[#C4C4C4] text-[#1b1465] py-2 px-2 rounded-lg"
                  onChange={(e) => setExperienceEnd(e.target.value)}
                >
                  <option disabled selected>
                    Max
                </option>
                  <option value="6">6 months</option>
                  <option value="12">1 year</option>
                  <option value="18">1.5 years </option>
                  <option value="24">2 years</option>
                  <option value="36">3 years</option>
                  <option value="48">4 years</option>
                  <option value="60">5 years</option>
                  <option value="72">6 years</option>
                  <option value="84">7 years</option>
                  <option value="96">8 years</option>
                  <option value="108">9 years</option>
                  <option value="120">10 years</option>
                  <option value="132">11 years</option>
                  <option value="144">12 years</option>
                  <option value="156">13 years</option>
                  <option value="168">14 years</option>
                  <option value="180">15 years</option>
                  <option value="192">16 years</option>
                  <option value="204">17 years</option>
                  <option value="216">18 years</option>
                  <option value="228">19 years</option>
                  <option value="240">20 years</option>
                  <option value="300">25 years</option>
                  <option value="360">30 years</option>
                  <option value="420">35 years</option>
                  <option value="480">40 years</option>
                  <option value="540">45 years</option>
                  <option value="600">50 years</option>
                </select>
              </div> */}

                <div className="bg-white rounded mt-3">
                  <div className=" w-full flex justify-between pt-4">
                    <input
                      placeholder="Enter location..."
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full focus:outline-none text-[#000000] border-b-[1px] border-[#1b1465] text-md md:text-[14px] lg:text-md 3xl:text-2xl pl-2 pb-2 placeholder-[#000000]"
                    />
                  </div>
                </div>
                <div className="text-center pt-10">
                  <button
                    className="w-28 h-8 rounded text-white 3xl:text-2xl 3xl:h-12 3xl:w-40 bg-[#1b1465] mb-5"
                    type="button"
                    onClick={() => GetSearchData("")}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 pl-4 pr-4 ">
              <div className={Style.userDetailsContainerHright}>
                {buttonLoader === true ? (
                  <Loader />
                ) : (
                  <div className="pb-5 ">
                    {searchData.map((data, i) => {
                      return (
                        <div
                          className=" p-3 border border-[#7f7f7f] rounded-xl mt-2"
                          key={i}
                        >
                          <div className="grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-12 pt-1 md:col-span-3 mx-auto my-3">
                              {data.photo_of_candidate !== "" ? (
                                <img
                                  src={
                                    awsUrl +
                                    data.photo_of_candidate.split(
                                      /\s*(,)\s*/
                                    )[0]
                                  }
                                  className="rounded h-60 md:w-44 object-contain"
                                  alt="Find chefs for my restaurant"
                                />
                              ) : (
                                <div className="h-60 md:w-44 text-center py-28">
                                  Photo Not Available
                                </div>
                              )}
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-5 mb-3">
                              <p className="text-xl 3xl:text-3xl pl-5 text-[#000000] uppercase">
                                {data.name_of_candidate
                                  ? data.name_of_candidate?.split(" ")[0]
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
                                  &#8377; {data.salary_expectation}/month
                                </p>
                              </div>
                              <div className="pt-2">
                                <label className={Style.userLabelStyle}>
                                  Gender
                                </label>
                                <p className="text-sm text-[#000000] pt-1 pl-5 break-all">
                                  {data.gender}
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
                                    {data.location_of_work.toString()}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 pt-0 md:pt-8">
                              <label className={Style.userLabelStyle}>
                                JOB SECTION
                              </label>
                              <div className="flex p-0 m-0 pl-5 ">
                                <span
                                  style={{ fontSize: "12px", marginTop: "5px" }}
                                >
                                  &#9679;
                                </span>
                                <p className="text-sm text-[#000000] pt-1 pl-1 break-all">
                                  {data.category[0] !== ""
                                    ? data.category.toString()
                                    : ""}
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
                                    {getWords(data.experience_in_month)}
                                  </p>
                                </div>
                              </div>
                              <div className="pt-2">
                                <label className={Style.userLabelStyle}>
                                  Marital Status
                                </label>
                                <p className="text-sm text-[#000000] pt-1 pl-5 break-all">
                                  {data.marital_status}
                                </p>
                              </div>
                              <div className="pt-2">
                                <label className={Style.userLabelStyle}>
                                  Languages Known
                                </label>

                                <p className="text-sm text-[#000000] pt-1 pl-5">
                                  {data.languages}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="grid justify-items-center">
                            <button
                              className="bg-[#F8B705] text-white px-5 py-1 mb-2 mt-8 rounded"
                              onClick={() => viewCandidateDetails(data._id)}
                            >
                              View more
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    {searchData.length > 0 ? (
                      <div className="text-center col-span-12 pt-5 3xl:pt-10">
                        <p className="text-3xl 3xl:text-5xl text-[#777777]">{`That's all folks!`}</p>
                      </div>
                    ) : (
                      <div className="text-center col-span-12 pt-5 3xl:pt-10">
                        {/* <Lottie options={defaultOptions} height={350} width={350} />

                          <p className="text-3xl text-[#777777]">
                            Please use filter for best results!
                          </p> */}

                        <input
                          placeholder="Tell us your requirement.."
                          className="h-12 3xl:h-20 border sm:w-80 3xl:w-[500px] 3xl:text-[28px] p-5 md:mt-20"
                          onChange={(e) =>
                            setRequirementMessage(e.target.value)
                          }
                          value={requirementMessage}
                        />
                        <button
                          className="px-5 py-2 bg-[#1b1465] 3xl:text-[28px] -mt-1 text-white h-12 3xl:h-20"
                          onClick={AddRequirement}
                        >
                          Submit
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        ""
      )}
      <WhatsAppLogo />
    </div>
  );
}

export default AllUser;
