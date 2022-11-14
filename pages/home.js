import React, { useState, useEffect } from "react";
import Header from "../components/common-components/Header";
import Footer from "../components/common-components/Footer";
import {
  GetRequest,
  accessTokenProvider,
  PostRequest,
  userDataProvider,
} from "../components/helpers/ApiHelper";
import { useRouter } from "next/router";
import Link from "next/link";
import swal from "sweetalert";
import Lottie from "react-lottie";
import paymentFile from "../public/images/lottiesFile/make-payment.json";
import SearchFile from "../public/images/lottiesFile/check-yes-search.json";
import JobFile from "../public/images/lottiesFile/search-blue-web.json";
import HiredFile from "../public/images/lottiesFile/business-deal-success.json";
import ConnectFile from "../public/images/lottiesFile/contact-animation.json";
import TrustedLogos from "../components/home-components/TrustedLogos";
import Testimonials from "../components/home-components/Testimonials";
import ProfileOfTheWeek from "../components/home-components/ProfileOfTheWeek";
const Payment = {
  loop: true,
  autoplay: true,
  animationData: paymentFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Job = {
  loop: true,
  autoplay: true,
  animationData: JobFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Search = {
  loop: true,
  autoplay: true,
  animationData: SearchFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Connect = {
  loop: true,
  autoplay: true,
  animationData: ConnectFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Hired = {
  loop: true,
  autoplay: true,
  animationData: HiredFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const GradesWithCategory = [
  {
    category: "COOKS / CHEFS",
    grades: [
      "ALL",
      "COMMI III/ Helper",
      "COMMI II",
      "COMMI I",
      "DCDP",
      "CDP",
      "Jr. SOUS Chef",
      "Senior SOUS Chef",
      "Executive Chef",
    ],
  },
  {
    category: "WAITERS / CAPTAINS",
    grades: ["ALL", "CAPTAIN", "WAITER"],
  },
  {
    category: "MANAGERS",
    grades: [],
  },
  {
    category: "BARTENDERS",
    grades: ["ALL", "BARTENDER"],
  },
  {
    category: "RECEPTIONIST",
    grades: [],
  },
  {
    category: "HOSTESS",
    grades: [],
  },
  {
    category: "HOUSEKEEPING / UTILITY",
    grades: ["ALL", "UTILITY GUY"],
  },
  {
    category: "CASHIER",
    grades: [],
  },
  {
    category: "common",
    grades: [
      "ALL",
      "CAPTAIN",
      "BARTENDER",
      "WAITER",
      "COMMI III/ Helper",
      "COMMI II",
      "COMMI I",
      "DCDP",
      "CDP",
      "Jr. SOUS Chef",
      "Senior SOUS Chef",
      "Executive Chef",
    ],
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  row: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  initialSlide: 0,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        infinite: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        infinite: true,
      },
    },
  ],
};
function Home() {
  let [occupationData, setOccupationData] = useState([]);
  let [occupationName, setOccupationName] = useState("");
  let [salaryStart, setSalaryStart] = useState("5000");
  let [salaryEnd, setSalaryEnd] = useState("200000");
  let [categoryData, setCategoryData] = useState([]);
  let [subcategoryData, setSubcategoryData] = useState([]);
  const [grades, setGrades] = useState([]);
  let [grade, setGrade] = useState("");
  let [selectedNo, setSelectedNo] = useState(1);
  let [occupationId, setOccupationId] = useState("");
  let [sub_category, setSub_category] = useState("");
  let [category, setCategory] = useState("");
  let [requirements, setRequirements] = useState([]);
  let router = useRouter();
  let userData = userDataProvider();
  let accessToken = accessTokenProvider();
  useEffect(() => {
    GetOccupation();
  }, []);

  useEffect(() => {
    const tempGrades = GradesWithCategory?.filter(
      (grade) => grade?.category === occupationName
    );
    if (tempGrades?.length) {
      setGrades(tempGrades[0]?.grades);
    }
  }, [occupationName]);
  const GetOccupation = async () => {
    let response = await GetRequest("getOccupations/all");
    if (response.status === 200) {
      setOccupationData(response.data);
    } else {
      setOccupationData([]);
    }
  };
  useEffect(() => {
    if (occupationId !== "") {
      getCategoryList();
      setSub_category([]);
      setCategory([]);
    }
  }, [occupationId]);
  async function getCategoryList() {
    let res = await GetRequest("getCategory/occupationId_" + occupationId);
    if (res.status === 200) {
      setCategoryData(res.data);
    } else {
      setCategoryData([]);
    }
  }
  useEffect(() => {
    let categoryIds = [];
    if (categoryData && categoryData?.length) {
      categoryData?.map((data, index) => categoryIds.push(data?._id));
    }
    getSubCategory(categoryIds);
  }, [categoryData]);
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
  async function saveRequirnments() {
    let item = {
      data: requirements,
    };

    let res = await PostRequest(`userRequirements/${userData._id}`, item);
    if (res.status === 200) {
      swal("Saved", "your requirement saved successfully !", "success");
    } else {
      swal("Error", "something went wrong try again later", "error");
    }
  }
  const CheckIfCategoryPresent = (categoryOpt) => {
    const token = category.includes(categoryOpt);
    return token;
  };

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

  const addCandidate = () => {
    if (!occupationName || !category.length) {
      swal("Warning", "Ocupation and Category are required ", "warning");
    } else if (grades?.length && !grade) {
      swal("Warning", "Grade is required ", "warning");
    } else {
      setRequirements((state) => [
        ...state,
        {
          occupation: occupationName,
          category,
          grade,
          salaryStart,
          salaryEnd,
          price: `${salaryStart}-${salaryEnd}`,
          candidate: selectedNo,
        },
      ]);
      swal("Success", "Requirements added successfully", "success");
    }
  };
  const setMinSalary = (type) => {
    switch (type) {
      case "UTILITY GUY":
        setSalaryStart(8000);
        break;
      case "CAPTAIN":
        setSalaryStart(13000);
        break;
      case "COMMI III/ Helper":
        setSalaryStart(9000);
        break;
      case "WAITER":
        setSalaryStart(9000);
        break;
      case "COMMI II":
        setSalaryStart(12000);
        break;
      case "COMMI I":
        setSalaryStart(20000);
        break;
      case "BARTENDER":
        setSalaryStart(20000);
        break;
      case "DCDP":
        setSalaryStart(25000);
        break;
      case "CDP":
        setSalaryStart(30000);
        break;
      case "Jr. SOUS Chef":
        setSalaryStart(35000);
        break;
      case "Senior SOUS Chef":
        setSalaryStart(50000);
        break;
      case "Executive Chef":
        setSalaryStart(75000);
        break;
      default:
        break;
    }
  };
  const GetSearchData = async () => {
    if (occupationName !== "") {
      if (salaryStart !== "") {
        if (salaryEnd !== "") {
          if (parseInt(salaryStart) >= parseInt(salaryEnd)) {
            swal(
              "Warning",
              "Minimum salary is not greater than or equal to maximum salary ",
              "warning"
            );
          } else {
            router.push({
              pathname: "/all-user",
              query: {
                occupationName: requirements[0]?.occupation || occupationName,
                location: userData.city,
                salaryStart: requirements[0]?.salaryStart || salaryStart,
                salaryEnd: requirements[0]?.salaryEnd || salaryEnd,
                category: requirements[0]?.category || category,
                sub_category,
              },
            });
          }
        } else {
          swal("Warning", "Please select maximum salary range!", "warning");
        }
      } else {
        swal("Warning", "Please select minimum salary range!", "warning");
      }
    } else {
      swal("Warning", "Please Select Occupation", "warning");
    }
  };

  return (
    <div>
      {process.browser ? (
        <>
          <Header PageName="home" />
          {/* <div className="grid grid-cols-12"> */}
          <div className="col-span-12 sm:col-span-12 lg:col-span-6 py-5">
            {!accessToken ? (
              <>
                <h1 className="p-2 md:pl-10 pt-0 md:pt-28 text-[#1B1465] text-2xl sm:text-2xl md:text-4xl">
                  Millions of people use Hospitality Finder to turn their ideas
                  into reality.
                </h1>
                <div className="flex pl-10 pt-12 md:pt-16">
                  <Link href="/user-signup" passHref>
                    <button className="bg-[#1B1465] py-2 3xl:py-3 px-5 text-[#ffffff] text-xl 3xl:text-3xl rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#1b1465] duration-300 ">
                      Employer
                    </button>
                  </Link>
                  <button className="border border-[#1B1465] ml-6 py-2 3xl:py-3 px-5 text-[#1B1465] text-xl 3xl:text-3xl rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ffffff] duration-300 ">
                    Employee
                  </button>
                </div>
              </>
            ) : (
              <div className="3xl:h-[640px] ">
                <p className="pt-1 mb-3 text-[black] font-medium text-center text-3xl 3xl:text-4xl">
                  Tell us your requirements
                </p>
                <div class="m-1 overflow-x-auto req-box relative">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          No.
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Occupation
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Category
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Grade
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Price
                        </th>
                        <th scope="col" class="py-3 px-6">
                          No. of Candidates
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {requirements.length >= 1 &&
                        requirements.map((item, index) => (
                          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td class="py-4 px-6">{index + 1}</td>
                            <th
                              scope="row"
                              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {item?.occupation}
                            </th>
                            <td class="py-4 px-6">
                              {item?.category && item?.category?.join(",")}
                            </td>
                            <td class="py-4 px-6">{item?.grade}</td>
                            <td class="py-4 px-6">{item?.price}</td>
                            <td class="py-4 px-6">{item?.candidate}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  {requirements.length <= 0 && (
                    <div className="bg-white p-5 border-b dark:bg-gray-900 dark:border-gray-700 flex justify-center">
                      Add Requirement
                    </div>
                  )}
                </div>
                <div
                  className={`mt-2 grid ${
                    categoryData.length ? "lg:grid-cols-5" : "lg:grid-cols-4"
                  } md:grid-cols-3 grid-cols-1 grid-flow-row pt-5 `}
                >
                  <div className="w-full mb-2.5 flex lg:justify-around px-2">
                    <div className="w-full">
                      <p className="text-md 3xl:text-2xl text-center text-xl">
                        Occupation
                      </p>
                      <span className="w-full">
                        <select
                          className="focus:outline-none w-full 3xl:w-96 3xl:h-14 text-sm 3xl:text-2xl border border-[#C4C4C4] text-[#000000] py-2 px-2 rounded-lg focus:rounded-lg"
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
                      </span>
                    </div>
                  </div>
                  {categoryData.length !== 0 ? (
                    <div>
                      <p className="text-md 3xl:text-2xl text-center text-xl">
                        Category
                      </p>
                      <div className="grid lg:justify-items-center mb-2.5 req-box mx-2">
                        <div className="md:w-full bg-white w-full rounded p-1 p-2 max-h-52 overflow-x-hidden">
                          <div className="flex p-1">
                            <input
                              type="checkbox"
                              value={"All"}
                              className="3xl:h-8 3xl:w-8"
                              id={"all"}
                              onChange={(e) => {
                                categoryArray(
                                  categoryData,
                                  "all",
                                  e.target.checked
                                );
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
                                    checked={category.find(
                                      (c) => c === categoryVal.category
                                    )}
                                    className="3xl:h-8 3xl:w-8"
                                    id={categoryVal._id}
                                    onChange={(e) => {
                                      categoryArray(
                                        e.target.value,
                                        "",
                                        e.target.checked,
                                        categoryData
                                      );
                                    }}
                                  />
                                  <p className="text-[11px] 3xl:text-[18px] pl-1 3xl:pl-3 3xl:pt-1 ">
                                    {categoryVal.category}
                                  </p>
                                </div>
                                {subcategoryData?.find(
                                  (d, index) =>
                                    d?.category === categoryVal.category
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
                                          <p className="text-[11px] 3xl:text-[18px] pl-1 3xl:pl-3 3xl:pt-1 ">
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
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {grades.length !== 0 ? (
                    <div>
                      <p className="text-md 3xl:text-2xl text-center text-xl">
                        Grade
                      </p>
                      <div className="flex mb-2.5 lg:justify-around px-2">
                        <span className="w-full sm:w-full">
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
                        </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="mb-2.5 px-2">
                    <p className="text-md 3xl:text-2xl text-center text-xl">
                      Salary Range
                    </p>

                    <div className="p-1 flex justify-between">
                      <span>Min</span>
                      <span>Max</span>
                    </div>
                    <div className="p-1 flex justify-between">
                      <span>{salaryStart}</span>
                      <span>{salaryEnd}</span>
                    </div>
                    <input
                      id="default-range"
                      type="range"
                      min={salaryStart}
                      value={salaryEnd}
                      max={"200000"}
                      step={1500}
                      onChange={(e) => {
                        if (salaryStart < e.target.value)
                          setSalaryEnd(e.target.value);
                      }}
                      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                  </div>

                  {/* <p className="pt-5 text-md 3xl:text-2xl text-[#1B1465]">
                        Select Experience Range
                      </p>

                      <div className="pt-1 flex">
                        <select
                          className="focus:outline-none w-28 3xl:w-44 3xl:h-14 3xl:text-2xl mr-2 3xl:mr-4  text-sm border border-[#C4C4C4] text-[#000000] py-2 px-2 rounded-lg"
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
                          className="focus:outline-none w-28 3xl:w-44 3xl:h-14 3xl:text-2xl ml-2 3xl:ml-4 text-sm border border-[#C4C4C4] text-[#000000] py-2 px-2 rounded-lg"
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
                  {/* <div className="pt-5">
                    <input
                      placeholder="Location"
                      onChange={(e) => setLocation(e.target.value)}
                      className="focus:outline-none w-60 3xl:w-96 3xl:h-14 3xl:text-2xl text-sm border border-[#C4C4C4] text-[#000000] py-2 px-2 rounded-lg"
                    />
                  </div> */}
                  <div className="px-2">
                    <p className="text-md 3xl:text-2xl text-center text-xl">
                      No of Candidates
                    </p>
                    <div className="w-full p-1 flex lg:justify-around">
                      <select
                        value={selectedNo}
                        className="w-full focus:outline-none 3xl:w-44 3xl:h-14 3xl:text-2xl lg:mr-2 3xl:mr-4 text-sm border border-[#C4C4C4] text-[#000000] py-2 px-2 rounded-lg"
                        onChange={(e) => setSelectedNo(e.target.value)}
                      >
                        <option disabled selected>
                          Select
                        </option>
                        {[...Array(10).keys()].map((i) => (
                          <option className="text-[000000]" value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex justify-center">
                  <button
                    type="button"
                    onClick={addCandidate}
                    className="focus:outline-none w-60 3xl:w-96 3xl:h-14 3xl:text-2xl bg-[#1B1465] text-md text-[#ffffff] py-2 px-2 rounded-lg"
                  >
                    Add
                  </button>
                </div>
                <div className="p-5 flex justify-center">
                  <button
                    type="button"
                    disabled={requirements.length == 0}
                    onClick={saveRequirnments}
                    className={`focus:outline-none w-60 3xl:w-96 3xl:h-14 3xl:text-2xl bg-[#F8B705] text-md text-[#ffffff] py-2 px-2 rounded-lg`}
                  >
                    Save Your Requirements
                  </button>
                </div>
                <div className="p-5 flex justify-center lg:justify-end ">
                  <button
                    type="button"
                    disabled={requirements.length == 0}
                    onClick={GetSearchData}
                    className={`focus:outline-none w-60 3xl:w-96 3xl:h-14 3xl:text-2xl bg-[#1B1465] text-md text-[#ffffff] py-2 px-2 rounded-lg`}
                  >
                    Proceed To Search
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* <div className="col-span-12 sm:col-span-12 lg:col-span-6">
              <img
                src="/images/HomePage/home-banner.webp"
                className="w-full"
                alt="Hire Qualified 	&#38; Experienced Chefs"
                fetchPriority="high"
              />
            </div> */}
          {/* </div> */}
          <div className="px-5 sm:px-5 md:px-10 py-2 sm:py-5 md:py-5">
            <ProfileOfTheWeek settings={settings} />
          </div>
          <div className="px-5 sm:px-5 md:px-10 py-2 sm:py-5 md:py-5">
            <h2 className="text-xl pb-3 3xl:text-2xl font-semibold">
              Trusted by
            </h2>
            <TrustedLogos settings={settings} />
          </div>
          <div className="grid grid-cols-12 pt-2 sm:pt-5 md:pt-10 px-5 md:px-10">
            <div className="col-span-12 sm:col-span-12 lg:col-span-6">
              {" "}
              <img
                src="/images/HomePage/hotel-img.webp"
                className="w-full rounded-xl object-cover"
                alt="I want to hire A Chef"
                fetchPriority="high"
              />
            </div>
            <div className="col-span-12 sm:col-span-12 lg:col-span-6 pl-5">
              <p className="3xl:text-2xl">
                Hospitality industry in India is booming currently. Every month
                you hear new outlets being launched in the market. The customers
                are genuinely spoiled for choice as they have multiple options
                in one cuisine to choose from.
                <br />
                However, the competition in such a market is tough too. If you
                want people to come to your hotel, you must offer them something
                exclusive, to begin with. This difference arises through the
                service the hotel or restaurant can offer. An average brand name
                succeeds only because they provide extraordinary services.
                <br />
                This service comes through the dedicated staff that the outlet
                boasts of. A focussed and experienced team means the customers
                get top-class services at your restaurant. Again with so much
                competition obtaining the best staff is a remote possibility,
                <br />
                <br />
                This is where Hospitality finder comes to your rescue. We offer
                you a wide variety of candidates in all fields of the
                hospitality business. With our qualified leads, your hospitality
                business would be booming in no time. We provide you with
                candidates in the fields of cooking, event management,
                bartending, accounts, and legal, and you get all of them here.
              </p>
            </div>
          </div>
          <div className="px-5 md:px-10 py-5 md:py-10">
            <h2 className="text-2xl 3xl:text-5xl font-bold text-center">
              How to start
            </h2>
            <p className="text-center 3xl:text-2xl pt-5">
              It is simple to avail the services we offer:
            </p>

            <div className="grid grid-cols-12 ">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 mt-5 mx-2">
                <Lottie options={Payment} height={300} width={300} />
                <h3 className="text-center text-[#000000] text-lg 3xl:text-3xl font-bold ">
                  Step 1
                </h3>
                <h4 className="text-center 3xl:text-2xl px-5">
                  Purchase a package from here
                </h4>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 mt-5 mx-2">
                <div className="p-14">
                  <Lottie options={Job} height={180} width={180} />
                </div>
                <h3 className="text-center text-[#000000] text-lg 3xl:text-3xl font-bold pt-2">
                  Step 2
                </h3>
                <h4 className="text-center 3xl:text-2xl px-5">
                  Search for the job profiles you are looking for, e.g., Chef,
                  housekeeping staff, bartender, receptionist, etc.
                </h4>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 mt-5 mx-2">
                <div className="p-7">
                  <Lottie options={Search} height={244} width={244} />
                </div>
                <h3 className="text-center text-[#000000] text-lg 3xl:text-3xl font-bold ">
                  Step 3
                </h3>
                <h4 className="text-center 3xl:text-2xl px-5">
                  From among the candidates, pick the ones that suit your need.
                </h4>
              </div>
              <div className="col-span-12 hidden lg:block lg:col-span-2 mt-5 mx-2"></div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 mt-5 mx-2">
                <Lottie options={Connect} height={300} width={300} />
                <h3 className="text-center text-[#000000] text-lg 3xl:text-3xl font-bold ">
                  Step 4
                </h3>
                <h4 className="text-center 3xl:text-2xl px-5">
                  Contact the candidates and finalize your deal
                </h4>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 mt-5 mx-2">
                <Lottie options={Hired} height={300} width={300} />
                <h3 className="text-center text-[#000000] text-lg 3xl:text-3xl font-bold ">
                  Step 5
                </h3>
                <h4 className="text-center 3xl:text-2xl px-5">
                  Establish your business with experienced and qualified staff
                </h4>
              </div>
              <div className="col-span-12 lg:col-span-2 mt-5 mx-2"></div>
            </div>

            <p className="text-center text-xl 3xl:text-3xl font-bold py-5 md:py-10">
              Search by categories
            </p>

            <div className="grid grid-cols-12 ">
              <div className="col-span-12 sm:col-span-6 md:col-span-4 3xl:w-full mt-5 mx-2 grid justify-items-center">
                <img
                  src="/images/HomePage/chef-img.webp"
                  alt="Hire qualified Chefs"
                  fetchPriority="high"
                />
                <p className="font-semibold text-center text-lg 3xl:text-2xl pt-3">
                  Cooks/Chefs
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6 md:col-span-4 3xl:w-full mt-5 mx-2 grid justify-items-center">
                <img
                  src="/images/HomePage/waiters.webp"
                  alt="Best place to find chefs 	&#38; kitchen staff"
                  fetchPriority="high"
                />
                <p className="font-semibold text-center 3xl:text-2xl text-lg pt-3">
                  Waiters/ Captains
                </p>
              </div>{" "}
              <div className="col-span-12 sm:col-span-6 md:col-span-4 3xl:w-full mt-5 mx-2 grid justify-items-center">
                <img
                  src="/images/HomePage/manager.webp"
                  alt="Hire Cooks and Chefs"
                  className="rounded-[10px]"
                  fetchPriority="high"
                />
                <p className="font-semibold text-center text-lg 3xl:text-2xl pt-3 ">
                  Manager
                </p>
              </div>{" "}
              <div className="col-span-12 sm:col-span-6 md:col-span-4 3xl:w-full mt-5 mx-2 grid justify-items-center">
                <img
                  src="/images/HomePage/bartender.webp"
                  alt="Hire a perosnal Chef"
                  fetchPriority="high"
                />
                <p className="font-semibold text-center text-lg 3xl:text-2xl pt-3">
                  Bartender
                </p>
              </div>{" "}
              <div className="col-span-12 sm:col-span-6 md:col-span-4 3xl:w-full mt-5 mx-2 grid justify-items-center">
                <img
                  src="/images/HomePage/receptionist.webp"
                  alt="How to find cooks for my restaurant"
                  fetchPriority="high"
                />
                <p className="font-semibold text-center text-lg 3xl:text-2xl pt-3">
                  Receptionist
                </p>
              </div>{" "}
              <div className="col-span-12 sm:col-span-6 md:col-span-4 3xl:w-full mt-5 mx-2 grid justify-items-center">
                <img
                  src="/images/HomePage/housekeeping.webp"
                  alt="Chef for Hire"
                  fetchPriority="high"
                />
                <p className="font-semibold text-center text-lg 3xl:text-2xl pt-3">
                  Housekeeping
                </p>
              </div>
            </div>
          </div>
          <div className="p-0 md:p-10">
            <Testimonials />
          </div>

          <Footer />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
