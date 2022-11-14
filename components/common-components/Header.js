import React, { useState, useEffect } from "react";
import Style from "../../styles/common.module.css";
import { closeModalProfile, modalOpenShow } from "../helpers/HelperFunctions";
import Link from "next/link";
import {
  loginPostRequest,
  accessTokenProvider,
  userDataProvider,
  PostRequest,
  awsUrl,
  userStatusProvider,
} from "../helpers/ApiHelper";
import ForgotModal from "./Modal";
import { useRouter } from "next/router";
import swal from "sweetalert";
import Loader from "./Loader";

function Header({ PageName }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validEmail, setValidEmail] = useState("na");
  let [forgotEmail, setForgotEmail] = useState("");
  let userData = userDataProvider();

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  let router = useRouter();
  let userStatus = userStatusProvider();
  const UserSignup = async () => {
    if (email === "" && password === "") {
      swal("Info", "Please fill out this field", "warning");
    } else if (email === "") {
      swal("Info", "Please enter your email", "warning");
    } else if (validEmail === false) {
      swal("Info", "Please enter valid email", "warning");
    } else if (password === "") {
      swal("Info", "Please enter your password", "warning");
    } else {
      setLoading(true);
      let item = {
        email: email,
        password: password,
      };
      const returnValue = await loginPostRequest("userLogin", item);
      if (returnValue.status === 200) {
        localStorage.setItem(
          "hospitalityFinderAccessToken",
          JSON.stringify(returnValue.accessToken)
        );
        localStorage.setItem(
          "hospitalityFinderUserData",
          JSON.stringify(returnValue.data)
        );
        localStorage.setItem("hospitalityFinderStatus", true);
        swal("Success", returnValue.message, "success");
        closeModalProfile("loginModal");
        setLoading(false);
        router.push("/");
      } else {
        setLoading(false);
        swal("Error", returnValue.message, "error");
      }
    }
  };
  function logout() {
    swal({
      title: "",
      text: "Are you sure you want to log out?",
      icon: "warning",
      buttons: { isConfirm: "Yes", cancel: "No" },
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        localStorage.removeItem("hospitalityFinderAccessToken");
        localStorage.removeItem("hospitalityFinderUserData");
        localStorage.setItem("hospitalityFinderStatus", false);
        router.push("/");
        router.reload();
      }
    });
  }
  useEffect(() => {
    if (userData === undefined || userData === "" || userData === null) {
      localStorage.setItem("hospitalityFinderStatus", false);
    }
  }, [userData]);

  let accessToken = accessTokenProvider();
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
  const ForgotPassword = async () => {
    if (forgotEmail !== "") {
      let item = {
        email: forgotEmail,
      };
      let resp = await PostRequest("sendForgotPasswordLink", item);
      if (resp.status === 200) {
        swal("Success", resp.message, "success");
        // closeModalProfile("forgotPasswordModal")
        modalOpenShow("forgotPasswordModal");
      } else {
        swal("Error", resp.message, "error");
      }
    } else {
      swal("Info", "Please enter email", "info");
    }
  };
  // const DropdownClose =()=>{
  //   const close = document.getElementById('dropdownButton_header').style.display = "none";
  // }
  return (
    <div className="h-24 3xl:h-36 bg-[#ffffff]">
      <div className="grid grid-cols-12 content-center">
        <div className="col-span-6 sm:col-span-2 md:col-span-2 pt-5">
          <Link href="/" passHref>
            <img
              src="/images/logo.png"
              alt="Best Chef to make Thai dishes"
              className=" h-12 3xl:h-20 ml-5 cursor-pointer"
            />
          </Link>
        </div>
        <div className="col-span-2 sm:col-span-7 md:col-span-7 self-center flex justify-center pt-4 ">
          <div className={Style.headerResponsive}>
            <div className="flex">
              <Link href="/" passHref>
                <p
                  className={
                    PageName === "home"
                      ? "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#1B1465] cursor-pointer uppercase"
                      : "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#707070] cursor-pointer uppercase"
                  }
                >
                  Home
                </p>
              </Link>
              <Link href="/about" passHref>
                <p
                  className={
                    PageName === "about"
                      ? "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#1B1465] cursor-pointer uppercase"
                      : "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#707070] cursor-pointer uppercase "
                  }
                >
                  About Us
                </p>
              </Link>
              <Link href="/how-it-works" passHref>
                <p
                  className={
                    PageName === "howItWorks"
                      ? "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#1B1465] cursor-pointer uppercase"
                      : "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#707070] cursor-pointer uppercase "
                  }
                >
                  How It Works
                </p>
              </Link>
              <Link href="/why-choose-us" passHref>
                <p
                  className={
                    PageName === "whyChooseUs"
                      ? "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#1B1465] cursor-pointer uppercase"
                      : "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#707070] cursor-pointer uppercase "
                  }
                >
                  Why Choose Us
                </p>
              </Link>
              <Link href="/packs" passHref>
                <p
                  className={
                    PageName === "packs"
                      ? "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#1B1465] cursor-pointer uppercase"
                      : "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#707070] cursor-pointer uppercase "
                  }
                >
                  Packs
                </p>
              </Link>
              <Link href="/blogs" passHref>
                <p
                  className={
                    PageName === "blog"
                      ? "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#1B1465] cursor-pointer uppercase"
                      : "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#707070] cursor-pointer uppercase "
                  }
                >
                  Blogs
                </p>
              </Link>
              <Link href="/contact-us" passHref>
                <p
                  className={
                    PageName === "contactUs"
                      ? "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#1B1465] cursor-pointer uppercase"
                      : "pl-5 text-[14px] lg:text-[16px] 3xl:text-[22px] text-[#707070] cursor-pointer uppercase "
                  }
                >
                  Contact Us
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-3 md:col-span-3 self-center pt-4">
          <div className={Style.headerResponsive}>
            <div className=" text-center">
              {accessToken === undefined ||
              accessToken === null ||
              accessToken === "" ? (
                <>
                  <button
                    className="w-1/4 h-8 3xl:h-12 3xl:text-xl border border-[#1B1465] text-[#1B1465] uppercase rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ffffff] duration-300 "
                    onClick={() => modalOpenShow("loginModal")}
                  >
                    Login
                  </button>
                  <Link href="/user-signup" passHref>
                    <button className="w-1/4 h-8 3xl:h-12 3xl:text-xl bg-[#F8B705] text-[#1b1465] uppercase rounded-md ml-6 shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#F8B705] duration-300 ">
                      SignUp
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <div className="dropdown relative ">
                    <button
                      className="relative dropdown:block"
                      role="navigation"
                      aria-haspopup="true"
                      aria-label="Dropdown open"
                      id={"dropdownMenu_profile"}
                    >
                      <div className="flex pt-2">
                        {userData.profile_pic !== "" &&
                        userData.profile_pic !== null &&
                        userData.profile_pic !== undefined ? (
                          <img
                            src={awsUrl + userData.profile_pic}
                            className="w-8 h-8 3xl:w-12 3xl:h-12 rounded-full"
                            alt="Best chef to make japenese food"
                          />
                        ) : (
                          <img
                            src="/images/avtar.png"
                            className="w-8 h-8 3xl:w-12 3xl:h-12"
                            alt="Best chef to make japenese food"
                          />
                        )}
                        <p
                          className={
                            "pl-1 pt-1 text-[16px] 3xl:text-[22px] fontsemiBold text-[#707070]"
                          }
                        >
                          {userData.name.split(" ")[0]}
                        </p>
                        <img
                          src="/images/dpdown.png"
                          alt="Best  Italian Chefs"
                          className="w-6 h-6 3xl:w-10 3xl:h-10 mt-1 ml-1"
                        />
                      </div>
                      <ul
                        className={
                          Style.profileDropdown +
                          " absolute right-0 hidden w-40 z-50 border border-[#DBDDE0] bg-[#f4f2ff]  rounded  "
                        }
                        aria-label="submenu"
                        id={"dropdownMenu_profile"}
                      >
                        <Link href="/my-profile" passHref>
                          <li
                            className={
                              Style.headerText +
                              "  text-left hover:bg-[#1b1465] 3xl:text-2xl hover:text-[#ffffff] pl-4 pt-2 pb-1 "
                            }
                          >
                            My Profile
                          </li>
                        </Link>
                        <Link href="/my-plan" passHref>
                          <li
                            className={
                              Style.headerText +
                              "  text-left hover:bg-[#1b1465] 3xl:text-2xl hover:text-[#ffffff] pl-4 pt-2 pb-1 "
                            }
                          >
                            My Plan
                          </li>
                        </Link>
                        <li
                          className={
                            Style.headerText +
                            "  text-left hover:bg-[#1b1465] 3xl:text-2xl hover:text-[#ffffff] pl-4 pt-2 pb-1 "
                          }
                          onClick={() => logout()}
                        >
                          Log out
                        </li>
                      </ul>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={Style.headerMobileResponsive}>
            <div className="float-right flex">
              {accessToken === undefined ||
              accessToken === null ||
              accessToken === "" ? (
                ""
              ) : (
                <div className="dropdown relative ">
                  <button
                    className="relative dropdown:block"
                    role="navigation"
                    aria-haspopup="true"
                    aria-label="Dropdown open"
                    id={"dropdownMenu_profile"}
                  >
                    <div className="flex pt-1 pr-2">
                      {userData.profile_pic !== "" &&
                      userData.profile_pic !== null &&
                      userData.profile_pic !== undefined ? (
                        <img
                          src={awsUrl + userData.profile_pic}
                          className="w-8 h-8 rounded-full"
                          alt="Best chef to make japenese food"
                        />
                      ) : (
                        <img
                          src="/images/avtar.png"
                          className="w-8 h-8"
                          alt="Best chef to make japenese food"
                        />
                      )}
                    </div>
                    <ul
                      className={
                        Style.profileDropdown +
                        " absolute right-0 hidden w-40 z-50 border border-[#DBDDE0] bg-[#f4f2ff]  rounded  "
                      }
                      aria-label="submenu"
                      id={"dropdownMenu_profile"}
                    >
                      <Link href="/my-profile" passHref>
                        <li
                          className={
                            Style.headerText +
                            "  text-left hover:bg-[#1b1465]  hover:text-[#ffffff] pl-4 pt-2 pb-1"
                          }
                        >
                          My Profile
                        </li>
                      </Link>
                      <Link href="/my-plan" passHref>
                        <li
                          className={
                            Style.headerText +
                            "  text-left hover:bg-[#1b1465] hover:text-[#ffffff] pl-4 pt-2 pb-1 "
                          }
                        >
                          My Plan
                        </li>
                      </Link>
                      <li
                        className={
                          Style.headerText +
                          "  text-left hover:bg-[#1b1465] hover:text-[#ffffff] pl-4 pt-2 pb-1 "
                        }
                        onClick={() => logout()}
                      >
                        Log out
                      </li>
                    </ul>
                  </button>
                </div>
              )}
              <div className="dropdown relative ">
                <button
                  className="relative dropdown:block"
                  role="navigation"
                  aria-label="Dropdown open"
                  aria-haspopup="true"
                  id={"dropdownButton_header"}
                >
                  <div>
                    <img
                      src="/images/menu.png"
                      className=" h-10 mr-5"
                      alt="Best Marwaadi chef"
                    />
                  </div>
                  <ul
                    className={
                      Style.headerDropdown +
                      " absolute right-0 hidden w-40 z-50 border border-[#DBDDE0]   bg-[#ffffff]  rounded  "
                    }
                    aria-label="submenu"
                    id={"dropdownMenu_header"}
                  >
                    <Link href="/" passHref>
                      <li
                        className={
                          Style.headerText +
                          "  text-center  hover:bg-[#1b1465] hover:text-[#ffffff] uppercase pl-4 pt-2 pb-1 "
                        }
                      >
                        Home
                      </li>
                    </Link>
                    <Link href="/about" passHref>
                      <li
                        className={
                          Style.headerText +
                          "  text-center  hover:bg-[#1b1465] hover:text-[#ffffff] uppercase pl-4 pt-2 pb-1 "
                        }
                      >
                        About US
                      </li>
                    </Link>
                    <Link href="/how-it-works" passHref>
                      <li
                        className={
                          Style.headerText +
                          "  text-center  hover:bg-[#1b1465] hover:text-[#ffffff] uppercase pl-4 pt-2 pb-1 "
                        }
                      >
                        How It Works
                      </li>
                    </Link>
                    <Link href="/why-choose-us" passHref>
                      <li
                        className={
                          Style.headerText +
                          "  text-center  hover:bg-[#1b1465] hover:text-[#ffffff] uppercase pl-4 pt-2 pb-1 "
                        }
                      >
                        Why Choose Us
                      </li>
                    </Link>
                    <Link href="/packs" passHref>
                      <li
                        className={
                          Style.headerText +
                          "  text-center  hover:bg-[#1b1465] hover:text-[#ffffff] uppercase pl-4 pt-2 pb-1 "
                        }
                      >
                        Packs
                      </li>
                    </Link>
                    <Link href="/blogs" passHref>
                      <li
                        className={
                          Style.headerText +
                          "  text-center  hover:bg-[#1b1465] hover:text-[#ffffff] uppercase pl-4 pt-2 pb-1 "
                        }
                      >
                        Blogs
                      </li>
                    </Link>
                    <Link href="/contact-us" passHref>
                      <li
                        className={
                          Style.headerText +
                          "  text-center  hover:bg-[#1b1465] hover:text-[#ffffff] uppercase pl-4 pt-2 pb-1 "
                        }
                      >
                        Contact Us
                      </li>
                    </Link>
                    {accessToken === undefined ||
                    accessToken === null ||
                    accessToken === "" ? (
                      <li
                        className={
                          Style.headerText + "  text-center pl-4 pt-2 pb-3 "
                        }
                      >
                        <button
                          className="w-1/3 h-8 border border-[#1B1465] text-[#1B1465] uppercase rounded-md shadow-md"
                          onClick={() => {
                            modalOpenShow("loginModal");

                            // ||

                            // DropdownClose()
                          }}
                        >
                          Login
                        </button>
                        <Link href="/user-signup" passHref>
                          <button className="w-1/3 h-8 bg-[#F8B705] text-white uppercase rounded-md ml-6 shadow-md">
                            SignUp
                          </button>
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ForgotModal
        modalId="forgotPasswordModal"
        modalTitle="Forgot Password"
        modalBody={
          <>
            <div className="w-full mt-3">
              <label className={Style.labelStyle}>
                Email <span className="text-[#bd0909]">*</span>
              </label>
              {/* <span
                className={
                  validEmail === false ? " text-red-500 pl-5" : "hidden"
                }
              >
                Please enter valid Email.
              </span> */}
              <input
                type="text"
                placeholder="Enter your email"
                className={
                  Style.InputStyle + " placeholder:normal-case lowercase"
                }
                onBlur={EmailCheck}
                onChange={(e) => setForgotEmail(e.target.value.toLowerCase())}
              />
            </div>
            <div className="text-center pt-10 pb-5">
              <button
                className="px-5 h-10 bg-[#FBBC04] text-white rounded ml-6 shadow-md"
                type="button"
                onClick={ForgotPassword}
              >
                Send
              </button>
            </div>
          </>
        }
        modalFooter=""
      />
      <div
        className="modal fade fixed top-0 left-0 w-full z-30 h-full hidden outline-none overflow-x-hidden overflow-y-auto"
        id="loginModal"
      >
        <div
          className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          onClick={() => modalOpenShow("loginModal")}
        ></div>
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content m-auto border-none shadow-lg w-full sm:w-1/2 lg:w-1/3 float-right relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current h-screen">
            <div className="modal-body relative p-4 h-max overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between">
                  <div>
                    <div className="block sm:hidden md:hidden">
                      <img
                        src="/images/logo.png"
                        alt="Best Chef to make North indian dishes"
                        className=" h-12 ml-5 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="">
                    <button
                      className={Style.loginCloseBtn}
                      onClick={() => modalOpenShow("loginModal")}
                    >
                      <img
                        src="/images/cross.png"
                        className="w-5"
                        alt="Best Chef to make Spanish dishes"
                      />
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="w-36 text-center">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p className="text-3xl text-[#1b1465] BOLD pb-5 pt-3 sm:pt-0 md:pt-0">
                        LOGIN
                      </p>
                    </div>

                    {/* <p className="text-lg text-[#8E8BAF]">or</p>
                    <Link href="/user-signup" passHref>
                      <p className="text-xl text-[#1b1465] cursor-pointer">
                        Register for free
                      </p>
                    </Link> */}
                  </div>
                  <div className="w-full mt-3">
                    <label className={Style.labelStyle}>
                      Email <span className="text-[#bd0909]">*</span>
                    </label>
                    <br />
                    <span
                      className={
                        validEmail === false ? "text-red-500 pl-5" : "hidden"
                      }
                    >
                      Please enter valid Email.
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className={
                        Style.InputStyle + " placeholder:normal-case	lowercase"
                      }
                      onBlur={EmailCheck}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full mt-3 pb-4">
                    <label className={Style.labelStyle}>
                      Password <span className="text-[#bd0909]">*</span>
                    </label>
                    <div className={Style.InputStyle + " flex"}>
                      <input
                        type={passwordShown ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full focus:outline-none bg-[#fafafe] dark:bg-[#1C253F]"
                        value={password}
                        maxLength="20"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="right-0  bg-[#fafafe] dark:bg-[#1C253F] W-12 pt-3 pr-3 rounded-r-lg">
                        {passwordShown ? (
                          <img
                            src="/images/eye-icon.png"
                            alt="Best japanese chef"
                            className={Style.eyeIconStyle}
                            onClick={togglePasswordVisiblity}
                          />
                        ) : (
                          <img
                            src="/images/eye-close-icon.png"
                            alt="Best Chef to make Italian dishes"
                            className={Style.eyecloseIconStyle}
                            onClick={togglePasswordVisiblity}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex pt-1">
                      <input type="checkbox" className=" h-5 w-5" />
                      <p className=" pl-3 text-sm text-[#1B1465]">
                        Remember me
                      </p>
                    </div>
                    <button
                      className="text-right pt-1 pr-4 cursor-pointer text-[#1B1465] text-sm"
                      onClick={() => {
                        modalOpenShow("forgotPasswordModal");
                        modalOpenShow("loginModal");
                      }}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="mt-6 text-center">
                    <button
                      className={Style.signupBtn}
                      disabled={loading}
                      onClick={UserSignup}
                    >
                      LOG IN {loading && <Loader size="h-8 w-8 ml-5" />}
                    </button>
                  </div>
                  <p className="text-md text-[#1b1465]   ">
                    {" Don't have an account?"}&nbsp;
                    <Link
                      href="/user-signup"
                      passHref
                      className="cursor-pointer"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
