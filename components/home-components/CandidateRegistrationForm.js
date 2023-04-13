import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Style from "../../styles/Home.module.css";
import { GetRequest, PostRequestFormControl } from "../helpers/ApiHelper";
import { Country, State, City } from "country-state-city";
// import "bootstrap/dist/css/bootstrap.min.css";

const CandidateRegistrationForm = () => {
  let currentDate = new Date().toISOString().split("T")[0];
  let history = useRouter();
  const [search, setSearch] = useState("");
  const [searchTkn, setSearchTkn] = useState(false);
  let [categoryData, setCategoryData] = useState([]);
  let [subcategoryData, setSubcategoryData] = useState([]);
  let [categoryId, setCategoryId] = useState("");
  let [occupationId, setOccupationId] = useState("");
  let [category, setCategory] = useState("");
  let [occupationData, setOccupationData] = useState([]);
  let [stateCode, setStateCode] = useState("");
  let [countryCode, setCountryCode] = useState("IN");
  let [dob, setDob] = useState("");
  let [age, setAge] = useState("");
  let [type_of_employement, setType_of_employement] = useState("");
  let [sub_category, setSub_category] = useState("");
  let [name_of_candidate, setName_of_candidate] = useState("");
  let [permanent_address, setPermanent_address] = useState("");
  let [contactno1, setContactno1] = useState("");
  let [contactno2, setContactno2] = useState("");
  let [suggestionData, setSuggestionData] = useState([]);
  let [aadhar_card_no, setAadhar_card_no] = useState("");
  let [pan_card_no, setPan_card_no] = useState("");
  let [identification, setIdentification] = useState("");
  let [passportNo, setPassportNo] = useState("");
  let [date_of_expiry, setDate_of_expiry] = useState("");
  let [email_address, setEmail_address] = useState("");
  let [relative_contact_no, setRelative_contact_no] = useState("");
  let [father_name, setFather_name] = useState("");
  let [education, setEducation] = useState("");
  let [hobbies_and_interest, setHobbies_and_interest] = useState("");
  let [religion, setReligion] = useState("");
  let [marital_status, setMarital_status] = useState("");
  let [location_of_work, setLocation_of_work] = useState("");
  let [certificateImage, setCertificateImage] = useState("");
  let [photograph, setPhotograph] = useState("");
  let [video, setVideo] = useState("");
  let [experienceIndian, setExperienceIndian] = useState("no");
  let [experienceAbroad, setExperienceAbroad] = useState("no");
  let [salaryExpectation, setSalaryExpectation] = useState("");
  let [showCountryStateCityContainer, setShowCountryStateCityContainer] =
    useState(false);
  let [chefType, setChefType] = useState("");
  let [experience, setExperience] = useState(0);
  let [candidate_rating, setCandidate_rating] = useState("4.2");
  let [expOutletName, setExpOutletName] = useState("");
  let [expDesignation, setExpDesignation] = useState("");
  let [expPlace, setExpPlace] = useState("INDIA");
  let [expCity, setExpCity] = useState("");
  let [expStartDate, setExpStartDate] = useState("");
  let [expStartMonth, setExpStartMonth] = useState("");
  let [expStartYear, setExpStartYear] = useState("");
  let [expEndMonth, setExpEndMonth] = useState("");
  let [expEndYear, setExpEndYear] = useState("");
  let [expEndDate, setExpEndDate] = useState("");
  let [experiences, setExperiences] = useState([]);
  const [mediaForPreviewApp, setMediaForPreviewApp] = useState([]);
  const [profilePreview, setProfilePreview] = useState([]);
  const [videoProfile, setVideoPreview] = useState([]);
  const [certificatePreview, setCertificatePreview] = useState([]);
  const [selectImage, setSelectImage] = useState([]);
  let [gender, setGender] = useState("");
  let [languages, setLanguages] = useState("");
  let [objective, setObjective] = useState("");
  // let [expInMonth, setExpInMonth] = useState();
  let [expDetailsData, setExpDetailsData] = useState([]);
  let [expParticularId, setExpParticularId] = useState("");
  // let [singleMonth, setSingleMonth] = useState(0);
  let [additionalEducation, setAdditionalEducation] = useState("");
  // let [totalMonthsAdd, setTotalMonthsAdd] = useState(0);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    var currentYear = new Date().getFullYear();
    var ddYears = document.getElementById("ddYears");
    for (var i = 1950; i <= currentYear; i++) {
      var option = document.createElement("OPTION");
      option.innerHTML = i;
      option.value = i;
      ddYears.appendChild(option);
    }
  }, []);

  useEffect(() => {
    getCandidateByKeyWord(name_of_candidate);
  }, [name_of_candidate]);

  useEffect(() => {
    var currentYear = new Date().getFullYear();
    var ddlYears = document.getElementById("ddlYears");
    for (var i = 1950; i <= currentYear; i++) {
      var option = document.createElement("OPTION");
      option.innerHTML = i;
      option.value = i;
      ddlYears.appendChild(option);
    }
  }, []);

  useEffect(() => {
    setExpParticularId(expDetailsData.id);
    setExpOutletName(expDetailsData.expOutletName);
    setExpDesignation(expDetailsData.expDesignation);
    setExpPlace(expDetailsData.expPlace);
    setExpCity(expDetailsData.expCity);
    setExpStartDate(expDetailsData.expStartDate);
    setExpEndDate(expDetailsData.expEndDate);
    setExpStartMonth(expDetailsData.expStartMonth);
    setExpStartYear(expDetailsData.expStartYear);
    setExpEndMonth(expDetailsData.expEndMonth);
    setExpEndYear(expDetailsData.expEndYear);
  }, [expDetailsData]);
  useEffect(() => {
    if (expPlace === "INDIA") {
      setExperienceIndian("yes");
    } else if (expPlace === "ABROAD") {
      setExperienceAbroad("yes");
    }
  }, [expPlace]);

  const submitExp = (e) => {
    e.preventDefault();
    console.log("expDesignation => ", expDesignation);
    console.log("expCity => ", expCity);
    console.log("expPlace => ", expPlace);

    if (!expDesignation || !expCity || !expPlace) {
      swal({
        title: "Error",
        text: "Please fill experience details",
        icon: "error",
        buttons: "Ok",
      });
      return false;
    }

    var experiencesDetails = {};
    experiencesDetails.expOutletName = expOutletName;
    experiencesDetails.expDesignation = expDesignation;
    experiencesDetails.expPlace = expPlace;
    experiencesDetails.expCity = expCity;
    experiencesDetails.expStartDate =
      expStartMonth !== undefined ? expStartMonth + "-" + expStartYear : "";
    experiencesDetails.expEndDate =
      expEndMonth !== undefined
        ? expEndMonth === "00"
          ? new Date().getMonth() + "-" + new Date().getFullYear()
          : expEndMonth + "-" + expEndYear
        : "";
    console.log("121 ", new Date("01-" + experiencesDetails.expStartDate));
    console.log("122 ", new Date("01-" + experiencesDetails.expEndDate));
    if (new Date("01-" + experiencesDetails.expStartDate) > new Date()) {
      swal({
        title: "Error",
        text: "Start date can not be more than current date",
        icon: "error",
        buttons: "Ok",
      });
      return false;
    }
    if (new Date("01-" + experiencesDetails.expEndDate) > new Date()) {
      swal({
        title: "Error",
        text: "Start date can not be less than current date ",
        icon: "error",
        buttons: "Ok",
      });
      return false;
    }
    if (
      !expStartMonth ||
      !expStartYear ||
      !expEndMonth ||
      (!expEndYear && expEndMonth !== "00")
    ) {
      swal({
        title: "Error",
        text: "Please select date",
        icon: "error",
        buttons: "Ok",
      });
      return false;
    }
    // return;
    var validityToken = true;
    if (
      expStartMonth !== "" &&
      expStartYear !== "" &&
      expEndMonth !== "" &&
      expEndYear !== "" &&
      expStartMonth !== undefined &&
      expStartYear !== undefined &&
      expEndMonth !== undefined &&
      expEndYear !== undefined
    ) {
      validityToken = monthDiff(
        expStartYear + "-" + expStartMonth,
        expEndMonth === "00"
          ? new Date().getFullYear() + "-" + new Date().getMonth()
          : expEndYear + "-" + expEndMonth
      );
    } else {
      validityToken = monthDiff("", "");
    }
    if (validityToken === true) {
      setExperiences((prev) => [...prev, experiencesDetails]);
    }

    setExpOutletName("");
    setExpDesignation("");
    setExpPlace("");
    // setSingleMonth(0);
    setExpCity("");
    // setExpInMonth("");
    setExpStartDate("");
    setExpStartMonth("");
    setExpStartYear("");
    setExpEndMonth("");
    setExpEndYear("");
    setExpEndDate("");
  };

  function monthDiff(date1, date2) {
    if (date1 !== "" || date2 !== "") {
      const d1 = new Date(date1);
      const d2 = new Date(date2);
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      let finalMonth = months <= 0 ? 0 : months;
      if (finalMonth <= 0) {
        swal({
          title: "Error",
          text: "End Date Can Not Be Smaller Then Start Date",
          icon: "error",
          buttons: "Ok",
        });
        return false;
      } else {
        setExperience((prev) => prev + finalMonth);
        return true;
      }
    } else {
      let n = 0;
      setExperience((prev) => prev + n);
      return true;
    }
  }

  async function registration() {
    setLoading(true);
    const data = new FormData();
    data.append("type_of_employement", type_of_employement);
    [...category].forEach((categoryDetails) => {
      data.append("category", categoryDetails);
    });
    [...sub_category].forEach((subcategoryDetails) => {
      data.append("sub_category", subcategoryDetails);
    });

    data.append("name_of_candidate", name_of_candidate);
    data.append("permanent_address", permanent_address);
    data.append("contactno1", contactno1);
    data.append("contactno2", contactno2);
    data.append("chef_type", chefType);
    data.append("aadhar_card_no", aadhar_card_no);
    data.append("pan_card_no", pan_card_no);
    data.append("identification", identification);
    data.append("passportNo", passportNo);
    data.append("candidate_rating", candidate_rating);
    data.append("date_of_expiry", date_of_expiry);
    data.append("email_address", email_address);
    data.append("relative_contact_no", relative_contact_no);
    data.append("dob", dob);
    data.append("age", age);
    data.append("father_name", "Mr. " + father_name);
    data.append("education", education);
    data.append("hobbies_and_interest", hobbies_and_interest);
    data.append("religion", religion);
    data.append("marital_status", marital_status);
    data.append("experience_in_month", experience);
    data.append("indian", experienceIndian);
    data.append("additionalEducation", additionalEducation);
    data.append("gender", gender);
    data.append("languages", languages);
    data.append("objective", objective);
    data.append("abroad", experienceAbroad);
    data.append("candidate_registration_status", "pending");
    [...location_of_work].forEach((locationDetails) => {
      data.append("location_of_work", locationDetails);
    });

    [...selectImage].forEach((dishPhoto) => {
      Array.from(dishPhoto).forEach((file) => data.append("dish", file));
    });
    [...certificateImage].forEach((photo) => {
      Array.from(photo).forEach((file) => data.append("certificate", file));
    });

    [...photograph].forEach((photo) => {
      Array.from(photo).forEach((file) => data.append("picture", file));
    });
    [...video].forEach((vdo) => {
      Array.from(vdo).forEach((file) => data.append("video", file));
    });
    data.append("salary_expectation", salaryExpectation);

    [...experiences].forEach((experiencesDetails) => {
      data.append("experiences", JSON.stringify(experiencesDetails));
    });
    try {
      let returnValue = await PostRequestFormControl(
        "registerCandidates",
        data
      );

      if (returnValue._id !== undefined) {
        swal({
          title: "Success",
          text: "Candidate added successfully!",
          icon: "success",
          buttons: true,
        }).then(function (isConfirm) {
          if (isConfirm) {
            history.push("/candidate-confirmation");
          }
        });
      } else {
        swal({
          title: "Error",
          text: returnValue.message,
          icon: "error",
          buttons: "Ok",
        });
      }
    } catch (err) {
      console.log(err);
      swal({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        buttons: "Ok",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOccupation();
  }, []);
  useEffect(() => {
    getCategoryList();
    setSub_category([]);
    setCategory([]);
    if (document.getElementById("subCategory") !== null) {
      document.getElementById("subCategory").selectedIndex = 0;
      document.getElementById("category").selectedIndex = 0;
    }
  }, [occupationId]);
  useEffect(() => {
    getSubCategory();
  }, [categoryId]);

  useEffect(() => {
    if (dob !== "") {
      var birthday = +new Date(dob);
      setAge(~~((Date.now() - birthday) / 31557600000));
    }
  }, [dob]);
  useEffect(() => {
    if (document.getElementById("cityDropdown") !== null) {
      document.getElementById("cityDropdown").selectedIndex = 0;
    }
  }, [countryCode, stateCode]);
  async function getOccupation() {
    let res = await GetRequest("getOccupations/all");
    if (res.status === 200) {
      setOccupationData(res.data);
    } else {
      setOccupationData([]);
    }
  }
  async function getCategoryList() {
    let res = await GetRequest("getCategory/occupationId_" + occupationId);
    if (res.status === 200) {
      setCategoryData(res.data);
    } else {
      setCategoryData([]);
    }
  }
  async function getCandidateByKeyWord(searchKey) {
    let res = await GetRequest(
      `getCandidatesDetailsByKeyword?search=${searchKey}`
    );
    if (res.length) {
      setSuggestionData(res);
    } else {
      setSuggestionData([]);
    }
  }
  async function getSubCategory() {
    let res = await GetRequest("getSubCategory/catId_" + categoryId);
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
  const categoryArr = (categoryArr) => {
    if (CheckIfCategoryPresent(categoryArr) === false) {
      setCategory([...category, categoryArr]);
    } else {
      swal({
        title: "",
        text: "Category already added",
        icon: "info",
        buttons: "Ok",
      });
    }
    document.getElementById("subCategory").selectedIndex = 0;
  };
  const CheckIfSubCategoryPresent = (categoryOpt) => {
    const token = sub_category.includes(categoryOpt);
    return token;
  };
  const subCategoryArr = (subCategoryArr) => {
    if (CheckIfSubCategoryPresent(subCategoryArr) === false) {
      setSub_category([...sub_category, subCategoryArr]);
    } else {
      swal({
        title: "",
        text: "Sub Category already added",
        icon: "info",
        buttons: "Ok",
      });
    }
  };
  const CheckIfCityPresent = (categoryOpt) => {
    const token = location_of_work.includes(categoryOpt);
    return token;
  };
  const cityArr = (cityArr) => {
    if (CheckIfCityPresent(cityArr) === false) {
      setLocation_of_work([...location_of_work, cityArr]);
    } else {
      swal({
        title: "",
        text: "City already added",
        icon: "info",
        buttons: "Ok",
      });
    }
  };
  const selectWorkPlaceValue = (value) => {
    if (value === "Anywhere") {
      setShowCountryStateCityContainer(false);
    } else {
      setShowCountryStateCityContainer(true);
      setLocation_of_work([]);
    }
  };

  const removeSubCategoryArr = (subCategoryArr) => {
    let updatedSubCatArr = sub_category.filter(
      (subCat) => subCat !== subCategoryArr
    );
    setSub_category(updatedSubCatArr);
  };
  const removeCategoryArr = (categoryArr) => {
    let updatedSubCatArr = category.filter((subCat) => subCat !== categoryArr);
    setCategory(updatedSubCatArr);
  };
  const removeCityArr = (city) => {
    let updatedSubCatArr = location_of_work.filter((subCat) => subCat !== city);
    setLocation_of_work(updatedSubCatArr);
  };

  const removeExpDetails = (expData) => {
    let updatedExpArr = experiences.filter((exp) => exp !== expData);
    setExperiences(updatedExpArr);
  };
  function emailFormateValidation(email) {
    if (email !== "") {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(email) === false) {
        document.getElementById("email").style.border = "1px solid red";
        return false;
      } else {
        document.getElementById("email").style.border = "";
        return true;
      }
    } else {
      document.getElementById("email").style.border = "";
      return true;
    }
  }
  useEffect(() => {
    if (document.getElementById("age") !== null && age !== "")
      if (age < 18) {
        document.getElementById("age").style.border = "1px solid red";
        document.getElementById("ageError").style.display = "block";
      } else {
        document.getElementById("age").style.border = "";
        document.getElementById("ageError").style.display = "none";
      }
  }, [age]);
  useEffect(() => {
    emailFormateValidation(email_address);
  }, [email_address]);

  const validateIfFieldEmpty = () => {
    if (
      category === "" ||
      !category?.length ||
      type_of_employement === "" ||
      sub_category === "" ||
      name_of_candidate === "" ||
      permanent_address === "" ||
      contactno1 === "" ||
      relative_contact_no === "" ||
      dob === "" ||
      age === "" ||
      education === "" ||
      religion === "" ||
      marital_status === "" ||
      location_of_work === "" ||
      languages === ""
    ) {
      if (name_of_candidate === "") {
        document.getElementById("name").style.border = "1px solid red";
        swal({
          title: "",
          text: "Please enter your name",
          icon: "info",
          buttons: "Ok",
        });
      }
      if (dob === "") {
        document.getElementById("dob").style.border = "1px solid red";
        swal({
          title: "",
          text: "Please enter your age",
          icon: "info",
          buttons: "Ok",
        });
      }
      if (age === "") {
        document.getElementById("age").style.border = "1px solid red";
      }
      if (languages === "") {
        document.getElementById("languages").style.border = "1px solid red";
        swal({
          title: "",
          text: "Please enter Languages",
          icon: "info",
          buttons: "Ok",
        });
      }
      if (gender === "") {
        // document.getElementById("gender").style.border = "1px solid red";
        swal({
          title: "",
          text: "Please select gender",
          icon: "info",
          buttons: "Ok",
        });
      }
      if (category === "" || !category?.length) {
        document.getElementById("category").style.border = "1px solid red";
        swal({
          title: "",
          text: "Please select Category",
          icon: "info",
          buttons: "Ok",
        });
      }
      if (type_of_employement === "") {
        document.getElementById("employemntType").style.border =
          "1px solid red";
        swal({
          title: "",
          text: "Please select employement type",
          icon: "info",
          buttons: "Ok",
        });
      }
      if (sub_category === "") {
        document.getElementById("subCategory").style.border = "1px solid red";
      }

      if (permanent_address === "") {
        document.getElementById("permanentAddress").style.border =
          "1px solid red";
        swal({
          title: "",
          text: "Please enter your permanent address",
          icon: "info",
          buttons: "Ok",
        });
      }

      if (contactno1 === "") {
        document.getElementById("contact1").style.border = "1px solid red";
        swal({
          title: "",
          text: "Please enter contact number",
          icon: "info",
          buttons: "Ok",
        });
      }

      if (relative_contact_no === "") {
        document.getElementById("relativePhone").style.border = "1px solid red";
        swal({
          title: "",
          text: "Please enter relative number",
          icon: "info",
          buttons: "Ok",
        });
      }

      if (education === "") {
        document.getElementById("education").style.border = "1px solid red";
        swal({
          title: "",
          text: "Please select your education",
          icon: "info",
          buttons: "Ok",
        });
      }
      if (religion === "") {
        document.getElementById("religion").style.border = "1px solid red";
        swal({
          title: "",
          text: "Please select religion",
          icon: "info",
          buttons: "Ok",
        });
      }
      if (marital_status === "") {
        document.getElementById("maritalStatus").style.border = "1px solid red";
        swal({
          title: "",
          text: "Please select marital status",
          icon: "info",
          buttons: "Ok",
        });
      }
      if (location_of_work === "") {
        swal({
          title: "Error",
          text: "Work Location Can Not Be Empty!",
          icon: "error",
          buttons: "Ok",
        });
      }
    } else {
      if (age >= 18) {
        if (emailFormateValidation(email_address) === true) {
          // displayModal("previewRegistration");

          registration();
        } else {
          swal({
            title: "",
            text: "Email is invalid!",
            icon: "error",
            buttons: "Ok",
          });
        }
      } else {
        swal({
          title: "Error",
          text: "Candidate's age can not be less then 18 years!",
          icon: "Error",
          buttons: "Ok",
        });
      }
    }
  };

  // multiple candidate profile image

  const ProfileImageHandleChange = () => {
    document.getElementById("profilePicInput").click();
  };
  const ProfileVideoHandleChange = () => {
    document.getElementById("profileVideoInput").click();
  };
  function UploadProfilePic(file) {
    if (file) {
      setPhotograph((prev) => [...prev, file]);
      readAndPreviewProfile(file);
    }
  }
  function UploadProfileVideo(file) {
    if (file) {
      setVideo((prev) => [...prev, file]);
      readAndPreviewVideo(file);
    }
  }
  function readAndPreviewProfile(files) {
    if (files) {
      const fileArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setProfilePreview((prevImages) => prevImages.concat(fileArray));
      Array.from(files).map((file) => URL.revokeObjectURL(file));
    }
  }
  function readAndPreviewVideo(files) {
    if (files) {
      const fileArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setVideoPreview((prevVideos) => prevVideos.concat(fileArray));
      Array.from(files).map((file) => URL.revokeObjectURL(file));
    }
  }
  // multiple certificate

  const CertificateHandleChange = () => {
    document.getElementById("certificatePicInput").click();
  };

  function UploadCertificatePic(file) {
    if (file) {
      setCertificateImage((prev) => [...prev, file]);
      readAndPreviewCertificate(file);
    }
  }
  function readAndPreviewCertificate(files) {
    if (files) {
      const fileArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setCertificatePreview((prevImages) => prevImages.concat(fileArray));
      Array.from(files).map((file) => URL.revokeObjectURL(file));
    }
  }

  // multiple dish image

  const imageHandleChange = () => {
    document.getElementById("dishPicInput").click();
  };
  function UploadDishPic(file) {
    if (file) {
      setSelectImage((prev) => [...prev, file]);
      readAndPreviewDish(file);
    }
  }
  function readAndPreviewDish(files) {
    if (files) {
      const fileArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setMediaForPreviewApp((prevImages) => prevImages.concat(fileArray));
      Array.from(files).map((file) => URL.revokeObjectURL(file));
    }
  }

  const renderMedia = (source) => {
    return source.map((media, index) => {
      return (
        <img
          alt="Exclusive photo platform"
          src={media}
          key={index}
          className={Style.previewImage}
        />
      );
    });
  };
  const renderVideoMedia = (source) => {
    return source.map((media, index) => {
      return (
        <video
          alt="Exclusive photo platform"
          src={media}
          key={index}
          autoPlay={false}
          controls
          className={Style.previewImage}
        />
      );
    });
  };
  const filterData = (searchedData, search) => {
    return searchedData?.filter(
      (el) => el.name?.toLowerCase().indexOf(search?.toLowerCase()) !== -1
    );
  };

  return (
    <div>
      <div className="w-full mx-auto bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl text-[#1B1465] font-bold leading-tight tracking-tight md:text-2xl">
            Candidate Registration
          </h1>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4" action="#">
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Name"
                required=""
                onChange={(e) => setName_of_candidate(e.target.value)}
              />
            </div>
            <div>
              <label
                for="fName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Father's Name
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Enter Your Father's Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setFather_name(e.target.value)}
              />
            </div>
            <div>
              <label
                for="permanentAddress"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Permanent Address *
              </label>
              <input
                type="text"
                name="permanentAddress"
                id="permanentAddress"
                placeholder="Enter Permanent Address "
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setPermanent_address(e.target.value)}
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setEmail_address(e.target.value)}
              />
            </div>
            <div>
              <label
                for="contact1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact no 1 *
              </label>
              <input
                type="text"
                name="contact1"
                id="contact1"
                placeholder="Enter contact 1"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                maxLength="10"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*?)\..*/g, "$1"))
                }
                onChange={(e) => setContactno1(e.target.value)}
              />
            </div>
            <div>
              <label
                for="contact2"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact no 2
              </label>
              <input
                type="text"
                name="contact2"
                id="contact2"
                placeholder="Enter contact 2"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                maxLength="10"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*?)\..*/g, "$1"))
                }
                onChange={(e) => setContactno2(e.target.value)}
              />
            </div>
            <div>
              <label
                for="relativePhone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Relative Phone No *
              </label>
              <input
                type="text"
                name="relativePhone"
                id="relativePhone"
                placeholder="Sibling / Relative Phone No"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*?)\..*/g, "$1"))
                }
                onChange={(e) => setRelative_contact_no(e.target.value)}
              />
            </div>

            <div>
              <label
                for="dob"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                DOB *
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                max={currentDate}
                onChange={(e) => setDob(e.target.value)}
                placeholder="DOB"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="age"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Age
              </label>
              <input
                type="text"
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="age"
                placeholder="Age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
              <span
                style={{ display: "none" }}
                id="ageError"
                className="text-red-500 text-xs"
              >
                Age can not be less then 18 years
              </span>
            </div>
            <div>
              <label
                for="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender *
              </label>
              <div className="grid grid-cols-3">
                <div className="grid-cols-2 ">
                  <input
                    className="mr-2 mt-2 cursor-pointer"
                    type="radio"
                    name="gender"
                    value="Male"
                    id="male"
                    tabIndex="1"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="cursor-pointer" for="male">
                    Male
                  </label>
                </div>
                <div className="grid grid-cols-2">
                  <input
                    className="mr-2 mt-2 cursor-pointer"
                    type="radio"
                    name="gender"
                    value="Female"
                    id="female"
                    tabIndex="2"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="cursor-pointer" for="female">
                    Female
                  </label>
                </div>
                <div className="grid grid-cols-2">
                  <input
                    className="mr-2 mt-2 cursor-pointer"
                    type="radio"
                    name="gender"
                    value="Other"
                    id="other"
                    tabIndex="3"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="cursor-pointer" for="other">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                for="maritalStatus"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Marital Status *
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="maritalStatus"
                onChange={(e) => setMarital_status(e.target.value)}
              >
                <option selected disabled>
                  Select Marital Status
                </option>
                <option value="Married">Married</option>
                <option value="Single">Unmarried</option>
              </select>
            </div>
            <div>
              <label
                for="religion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Religion *
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="religion"
                onChange={(e) => setReligion(e.target.value)}
              >
                <option selected disabled>
                  Select Religion
                </option>
                <option value="Christianity">Christianity</option>
                <option value="Islam">Islam</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Sikhism">Sikhism</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label
                for="education"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Education *
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="education"
                onChange={(e) => setEducation(e.target.value)}
              >
                <option selected disabled>
                  Select Education
                </option>
                <option value="Matric/High School">Matric/High School</option>
                <option value="Higher Secondary/12th Standard">
                  Higher Secondary/12th Standard
                </option>
                <option value="Certificate">Certificate</option>
                <option value="Diploma">Diploma</option>
                <option value="BA">BA</option>
                <option value="B. Com.">B. Com. </option>
                <option value="BA (Hons.)">BA (Hons.)</option>
                <option value="HM Passout">HM Passout</option>
                <option value="B.Com. (Hons.)">B.Com. (Hons.)</option>
                <option value="B.sc.">B.sc.</option>
                <option value="B.Sc. (Hons.)">B.Sc. (Hons.)</option>
                <option value="B. Ed.">B. Ed.</option>
                <option value="LLB">LLB</option>
                <option value="BE">BE</option>
                <option value="B. Tech">B. Tech</option>
                <option value="AMIE (Part A & Part B)">
                  AMIE (Part A & Part B)
                </option>
                <option value="B.Sc. (Engg.)">B.Sc. (Engg.)</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="Graduation issued by Defence (Indian Army, Air Force, Navy)">
                  Graduation issued by Defence (Indian Army, Air Force, Navy)
                </option>
                <option value="B. Lib.">B. Lib.</option>
                <option value="B. Pharm.">B. Pharm.</option>
                <option value="ICWA">ICWA</option>
                <option value="CA">CA</option>
                <option value="PG Diploma">PG Diploma</option>
                <option value="MA">MA</option>
                <option value="M.Com.">M.Com.</option>
                <option value="M. Sc">M. Sc</option>
                <option value="M.Ed.">M.Ed.</option>
                <option value="LLM">LLM</option>
                <option value="ME">ME</option>
                <option value="M. Tech.">M. Tech.</option>
                <option value="M. Sc. (Engg.)">M. Sc. (Engg.)</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>

                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label
                for="education"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Additional Education
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setAdditionalEducation(e.target.value)}
              >
                <option selected disabled>
                  Select Additional Education
                </option>
                <option value="Diploma in hotel management ">
                  Diploma in hotel management
                </option>
                <option value="Degrees in hotel management">
                  Degrees in hotel management
                </option>
              </select>
            </div>
            <div>
              <label
                for="aadhar"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Aadhar Card No
              </label>
              <input
                type="text"
                maxLength="12"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="aadhar"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*?)\..*/g, "$1"))
                }
                onChange={(e) => setAadhar_card_no(e.target.value)}
                placeholder="Aadhar Card No"
              />
            </div>
            <div>
              <label
                for="pan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                PAN No
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="pan"
                maxLength="10"
                onChange={(e) => setPan_card_no(e.target.value)}
                placeholder="Enter PAN No"
              />
            </div>
            <div>
              <label
                for="identification"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Identification
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="identification"
                onChange={(e) => setIdentification(e.target.value)}
                placeholder="Aadhar Card No/Pan No/Driving Licence"
              />
            </div>
            <div>
              <label
                for="hobby"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Hobby and interest
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="hobby"
                onChange={(e) => setHobbies_and_interest(e.target.value)}
                placeholder="Hobby and interest"
              />
            </div>
            <div>
              <label
                for="languages"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Language *
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="languages"
                onChange={(e) => setLanguages(e.target.value)}
                placeholder="Enter Language"
              />
            </div>
            <div>
              <label
                for="profilePicInput"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Candidate Photograph
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                multiple
                accept="image/*"
                type="file"
                id="profilePicInput"
                onChange={(e) => {
                  UploadProfilePic(e.target.files);
                }}
              />
              <button
                className={`${Style.expDetailsBtn} m-2`}
                type="button"
                onClick={() => ProfileImageHandleChange()}
              >
                Add more
              </button>
              <div id="preview" style={{ display: "flex", flexWrap: "wrap" }}>
                {renderMedia(profilePreview)}
              </div>
            </div>
            <div>
              <label
                for="profileVideoInput"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Candidate Video
              </label>
              <input
                multiple
                accept="video/mp4,video/x-m4v,video/*"
                type="file"
                id="profileVideoInput"
                // value={selectImage.name}

                onChange={(e) => {
                  UploadProfileVideo(e.target.files);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                className={`${Style.expDetailsBtn} m-2`}
                type="button"
                onClick={() => ProfileVideoHandleChange()}
              >
                Add more
              </button>
              <div id="preview" style={{ display: "flex", flexWrap: "wrap" }}>
                {renderVideoMedia(videoProfile)}
              </div>
            </div>
            <div>
              <label
                for="objective"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Objective *
              </label>
              <textarea
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="objective"
                placeholder="Enter Objective"
                onChange={(e) => setObjective(e.target.value)}
              />
            </div>
            <div>
              <label
                for="employemntType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Employment Type *
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="employemntType"
                onChange={(e) => {
                  setType_of_employement(
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

            <div>
              <label
                for="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category *
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="category"
                onChange={(e) => {
                  setCategoryId(e.target.value);
                  categoryArr(e.target.options[e.target.selectedIndex].text);
                }}
              >
                {categoryData.length !== 0 ? (
                  <option disabled selected>
                    Select Category
                  </option>
                ) : (
                  ""
                )}

                {categoryData.length !== 0 ? (
                  categoryData.map((categoryVal, i) => {
                    return (
                      <option value={categoryVal._id}>
                        {categoryVal.category}
                      </option>
                    );
                  })
                ) : (
                  <option disabled selected>
                    No Category Added
                  </option>
                )}
              </select>
              {category.length > 0 ? (
                <div className="form-group mt-3">
                  <label className="col-sm-4 col-form-label text-dark text-md-right"></label>
                  <div className="col-sm-12 border p-4">
                    <p className="mb-4">Selected Category</p>
                    <div className={`${Style["d-flex"]} flex-wrap gap-4 mt-4`}>
                      {category.length > 0
                        ? category.map((value) => {
                            return (
                              <span className={Style["position-relative"]}>
                                <span className={Style["cityButton"]}>
                                  {value}
                                </span>
                                <span
                                  onClick={() => removeCategoryArr(value)}
                                  className={Style["crossButtonPreview"]}
                                >
                                  X
                                </span>
                              </span>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {category.length > 0 ? (
                <>
                  <div className="form-group grid-cols-2">
                    <div className="col-sm-12">
                      <a className="">You can select more category</a>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <div>
              <label
                for="subCategory"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Sub Category
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="subCategory"
                onChange={(e) => subCategoryArr(e.target.value)}
              >
                {subcategoryData.length !== 0 ? (
                  <option disabled selected>
                    Select Sub Category
                  </option>
                ) : (
                  ""
                )}

                {subcategoryData.length !== 0 ? (
                  subcategoryData.map((categoryVal, i) => {
                    return (
                      <option value={categoryVal.subcategory}>
                        {categoryVal.subcategory}
                      </option>
                    );
                  })
                ) : (
                  <option disabled selected>
                    Select Category First
                  </option>
                )}
              </select>
              {sub_category.length > 0 ? (
                <div className="form-group mt-3">
                  <div className="col-sm-12 border pb-4 pt-3">
                    <p className="font-weight-bold">Selected Sub Category</p>
                    <div className={`${Style["d-flex"]} flex-wrap gap-4 mt-4`}>
                      {sub_category.length > 0
                        ? sub_category.map((value) => {
                            return (
                              <span className={Style["position-relative"]}>
                                <span className={Style["cityButton"]}>
                                  {value}
                                </span>
                                <span
                                  onClick={() => removeSubCategoryArr(value)}
                                  className={Style["crossButtonPreview"]}
                                >
                                  X
                                </span>
                              </span>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {sub_category.length > 0 ? (
                <>
                  <div className="form-group grid-cols-2">
                    <div className="col-sm-12">
                      <a className="">You can select more sub category</a>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <div>
              <label
                for="certificatePicInput"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Experience Certificates
              </label>
              <input
                multiple
                accept="image/*"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="file"
                id="certificatePicInput"
                // value={selectImage.name}
                onChange={(e) => {
                  UploadCertificatePic(e.target.files);
                }}
              />
              <button
                className={`${Style.expDetailsBtn} m-2`}
                type="button"
                onClick={() => CertificateHandleChange()}
              >
                Add more
              </button>
              <div id="preview" style={{ display: "flex", flexWrap: "wrap" }}>
                {renderMedia(certificatePreview)}
              </div>
            </div>
            <div>
              <label
                for="salaryExpectation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Salary Expectation *
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="salaryExpectation"
                placeholder="Salary Expectation per month"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*?)\..*/g, "$1"))
                }
                onChange={(e) => setSalaryExpectation(e.target.value)}
              />
            </div>
            {type_of_employement === "COOKS / CHEFS" && (
              <div>
                <label
                  for="dishPicInput"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dish Photographs
                </label>
                <input
                  multiple
                  accept="image/*"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="dishPicInput"
                  type="file"
                  // value={selectImage.name}
                  onChange={(e) => {
                    UploadDishPic(e.target.files);
                  }}
                />
                <button
                  className={`${Style.expDetailsBtn} m-2`}
                  type="button"
                  onClick={() => imageHandleChange()}
                >
                  Add more
                </button>
                <div id="preview" style={{ display: "flex", flexWrap: "wrap" }}>
                  {renderMedia(mediaForPreviewApp)}
                </div>
              </div>
            )}
            {type_of_employement === "COOKS / CHEFS" && (
              <div>
                <label
                  for="chefType"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Chef Type
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="chefType"
                  onChange={(e) => setChefType(e.target.value)}
                >
                  <option selected disabled>
                    Select Type
                  </option>
                  <option value="Domestic">Domestic</option>
                  <option value="Restaurant">Restaurant</option>
                </select>
              </div>
            )}

            <div>
              <label
                for="ratings"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ratings
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="ratings"
                maxLength="3"
                placeholder="Enter candidates ratings"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*?)\..*/g, "$1"))
                }
                onChange={(e) => setCandidate_rating(e.target.value)}
              />
            </div>

            <div>
              <label
                for="passportNo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Passport No
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="passportNo"
                maxLength="9"
                placeholder="Passport No"
                onChange={(e) => setPassportNo(e.target.value)}
              />
            </div>

            <div>
              <label
                for="issueDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Passport expiry Date
              </label>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="issueDate"
                min={currentDate}
                placeholder="Passport No"
                onChange={(e) => setDate_of_expiry(e.target.value)}
              />
            </div>
            <div>
              <label
                for="workPlace"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Work Places *
              </label>
              <div className="grid grid-cols-3">
                <div className="grid-cols-2 ">
                  <input
                    className="mr-2 mt-2 cursor-pointer"
                    type="radio"
                    name="workPlace"
                    value="Anywhere"
                    id="Anywhere"
                    tabIndex="1"
                    onChange={(e) => {
                      selectWorkPlaceValue(e.target.value);
                      setLocation_of_work(["Anywhere"]);
                    }}
                  />
                  <label className="cursor-pointer" for="Anywhere">
                    Anywhere
                  </label>
                </div>
                <div className="grid-cols-2">
                  <input
                    className="mr-2 mt-2 cursor-pointer"
                    type="radio"
                    name="workPlace"
                    id="Select Cities"
                    tabIndex="2"
                    value="selected"
                    onChange={(e) => selectWorkPlaceValue(e.target.value)}
                  />
                  <label className="cursor-pointer" for="Select Cities">
                    Select Cities
                  </label>
                </div>
              </div>
              <div>
                {showCountryStateCityContainer === true ? (
                  <>
                    <div className="form-group row mt-4">
                      <label className="col-sm-4 col-form-label text-dark text-md-right">
                        Work Country
                      </label>
                      <div className="col-sm-7">
                        <select
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => setCountryCode(e.target.value)}
                          vlaue={countryCode}
                        >
                          <option disabled selected>
                            Select Work Country
                          </option>
                          {Country.getAllCountries().length !== 0 ? (
                            Country.getAllCountries().map((categoryVal, i) => {
                              return (
                                <option
                                  key={i}
                                  value={categoryVal.isoCode}
                                  selected={
                                    categoryVal.isoCode === "IN"
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  {categoryVal.name}
                                </option>
                              );
                            })
                          ) : (
                            <option disabled selected>
                              No Work Country Added
                            </option>
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row mt-4">
                      <label className="col-sm-4 col-form-label text-dark text-md-right">
                        Work State
                      </label>
                      <div className="col-sm-7">
                        <select
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => setStateCode(e.target.value)}
                        >
                          {State.getStatesOfCountry(countryCode).length !==
                          0 ? (
                            <option disabled selected>
                              Select States
                            </option>
                          ) : (
                            ""
                          )}

                          {State.getStatesOfCountry(countryCode).length !==
                          0 ? (
                            State.getStatesOfCountry(countryCode).map(
                              (categoryVal, i) => {
                                return (
                                  <option value={categoryVal.isoCode}>
                                    {categoryVal.name}
                                  </option>
                                );
                              }
                            )
                          ) : (
                            <option disabled selected>
                              Select Country First
                            </option>
                          )}
                        </select>
                      </div>
                    </div>
                    {location_of_work.length > 0 ? (
                      <div className="form-group row mt-4">
                        <label className="col-sm-4 col-form-label text-dark text-md-right"></label>
                        <div className="col-sm-7 border p-4">
                          <p className="font-weight-bold">Selected Cities</p>
                          <div
                            className={`${Style["d-flex"]} flex-wrap gap-4 mt-4`}
                          >
                            {location_of_work.length > 0
                              ? location_of_work.map((value) => {
                                  return (
                                    <span
                                      className={Style["position-relative"]}
                                    >
                                      <span className={Style["cityButton"]}>
                                        {value}
                                      </span>
                                      <span
                                        onClick={() => removeCityArr(value)}
                                        className={Style["crossButtonPreview"]}
                                      >
                                        X
                                      </span>
                                    </span>
                                  );
                                })
                              : ""}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="form-group row mt-4">
                      <label className="col-sm-4 col-form-label text-dark text-md-right">
                        Work City *
                      </label>
                      <div className="col-sm-7">
                        <select
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => cityArr(e.target.value)}
                          id="cityDropdown"
                        >
                          {City.getCitiesOfState(countryCode, stateCode)
                            .length !== 0 ? (
                            <option selected disabled hidden>
                              Select City
                            </option>
                          ) : (
                            ""
                          )}

                          {City.getCitiesOfState(countryCode, stateCode)
                            .length !== 0 ? (
                            City.getCitiesOfState(countryCode, stateCode).map(
                              (categoryVal, i) => {
                                return (
                                  <option value={categoryVal.name} key={i}>
                                    {categoryVal.name}
                                  </option>
                                );
                              }
                            )
                          ) : (
                            <option disabled selected>
                              Select State First
                            </option>
                          )}
                        </select>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="grid grid-rows gap-4 mt-4">
              <label
                for="workPlace"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Work Experience Details
              </label>
              <div className="grid grid-rows gap-4 mt-4">
                <div className="grid grid-cols-4 gap-4">
                  <label className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white col-span-1">
                    Place
                  </label>
                  <select
                    className="col-span-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={expPlace}
                    onChange={(e) => setExpPlace(e.target.value)}
                  >
                    <option selected disabled>
                      Select place
                    </option>
                    <option value="INDIA">INDIA</option>
                    <option value="ABROAD">ABROAD</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <label
                    for="outlet"
                    className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white col-span-1"
                  >
                    Outlet Name
                  </label>
                  <input
                    type="text"
                    className="col-span-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="outlet"
                    value={expOutletName}
                    onChange={(e) => setExpOutletName(e.target.value)}
                    placeholder="Outlet Name"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <label
                    for="designation"
                    className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white col-span-1"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    className="col-span-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="designation"
                    value={expDesignation}
                    onChange={(e) => setExpDesignation(e.target.value)}
                    placeholder="Enter your designation"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <label
                    for="city"
                    className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white col-span-1"
                  >
                    City
                  </label>
                  {expPlace === "INDIA" ? (
                    <div className="col-span-3 mt-2 position-relative">
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                          console.log("hjhjhjhjhjh");
                          setSearch(e.target.value);
                          setSearchTkn(true);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter city name"
                      />
                      {filterData(City.getCitiesOfCountry("IN"), search)
                        .length === 0 || search === "" ? (
                        ""
                      ) : searchTkn ? (
                        <ul className={`${Style["autoselect-custom"]} shadow`}>
                          {City.getCitiesOfCountry("IN") !== undefined
                            ? filterData(
                                City.getCitiesOfCountry("IN"),
                                search
                              ).map((cityVal) => {
                                return (
                                  <li
                                    onClick={() => {
                                      setExpCity(cityVal.name);
                                      setSearch(cityVal.name);
                                      setSearchTkn(false);
                                    }}
                                  >
                                    {cityVal.name}
                                  </li>
                                );
                              })
                            : ""}
                        </ul>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    <div className="col-span-3 mt-2">
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={expCity}
                        onChange={(e) => setExpCity(e.target.value)}
                        placeholder="Enter your city"
                      />
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <label
                    for="chefType"
                    className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white col-span-1"
                  >
                    Start date
                  </label>
                  <div className="col-span-3">
                    <div className="grid grid-cols-2 gap-4">
                      <select
                        className="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setExpStartMonth(e.target.value)}
                      >
                        <option disabled selected value="">
                          Select month
                        </option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <select
                        className="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="ddlYears"
                        value={expStartYear}
                        onChange={(e) => setExpStartYear(e.target.value)}
                      >
                        <option value="" disabled selected>
                          Select year
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <label
                    for="chefType"
                    className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white col-span-1"
                  >
                    End date
                  </label>
                  <div className="col-span-3">
                    <div className="grid grid-cols-2 gap-4">
                      <select
                        className="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={expEndMonth}
                        onChange={(e) => setExpEndMonth(e.target.value)}
                      >
                        <option disabled selected value="">
                          Select month
                        </option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <select
                        className="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="ddYears"
                        value={expEndYear}
                        onChange={(e) => setExpEndYear(e.target.value)}
                        disabled={expEndMonth === "00" ? true : false}
                      >
                        <option value="" disabled selected>
                          Select year
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className={`${Style.expDetailsBtn} m-2 d-flex justify-content-center mx-auto`}
                    type="button"
                    onClick={submitExp}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 text-center">
          <button
            className={`${Style.expDetailsBtn} m-2 d-flex justify-content-center`}
            onClick={validateIfFieldEmpty}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateRegistrationForm;
