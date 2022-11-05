import React, { useState } from "react";
import Style from "../styles/Home.module.css";
import swal from "sweetalert";
import { useRouter } from "next/router";
function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  let router = useRouter();
  async function resetPassword() {
    let url = window.location.href;
    const Email = url.split("?")[1];
    if (Email !== undefined) {
      if (Email !== "" || Email !== null) {
        if (password !== "") {
          if (password === confirmPassword) {
            let item = { password, confirmPassword };

            const result = await fetch(
              "https://hospitalityfinder.in/api/resetPassword/" + Email,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                  Accept: "application/json",
                },
                body: JSON.stringify(item),
              }
            );
            const returnValue = await result.json();
            if (returnValue.status === 200) {
              swal({
                title: "Success",
                text: "Your Password has been changed successfully",
                icon: "success",
                buttons: { isConfirm: "Yes", cancel: "No" },
                dangerMode: true,
              }).then(function (isConfirm) {
                if (isConfirm) {
                  router.push("/");
                }
              })
            } else {
              swal("Info", returnValue.message, "warning");
            }
          } else {
            swal("Info", "Password Confirmation does not match ..Try again !", "warning");
          }
        } else {
          swal("Info", "Please enter password", "warning");
        }
      } else {
        //   history.push("/");
      }
    }
  }
  return (
    <div className=" w-full bg-[#1B1465] h-screen">
      {process.browser ? (
        <div className=" grid justify-items-center pt-20  px-5">
          <div className="block p-6  rounded-lg shadow-lg bg-white w-full ml-2 mr-2 sm:w-2/4 md:w-1/3">
            <div className="grid justify-items-center">
              <img
                src="/images/logo.png"
                alt="Professional chef for home"
                style={{ width: "80%" }}
                className="object-center "
              />
            </div>
            <p className="text-center text-2xl font-semiBold text-gray-400 mt-3 mb-3">
              Reset Password
          </p>

            <form>
              <div className="form-group mb-3">
                <label
                  htmlFor="exampleInputEmail2"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Password
              </label>
                <div className={Style.InputStyle + " flex"}>
                  <input
                    type={passwordShown1 ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full focus:outline-none bg-[#fafafe] dark:bg-[#1C253F]"
                    value={password}
                    maxLength="20"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="right-0  bg-[#fafafe] dark:bg-[#1C253F] W-12 pt-3 pr-3 rounded-r-lg">
                    {passwordShown1 ? (
                      <img
                        src="/images/eye-icon.png"
                        alt="Professional chefs near me"
                        className={Style.eyeIconStyle}
                        onClick={togglePasswordVisiblity1}
                      />
                    ) : (
                        <img
                          src="/images/eye-close-icon.png"
                          alt="Find &#38; Hire Chefs Near Me"
                          className={Style.eyecloseIconStyle}
                          onClick={togglePasswordVisiblity1}
                        />
                      )}
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label
                  htmlFor="exampleInputPassword2"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Confirm Password
              </label>
                <div className={Style.InputStyle + " flex"}>
                  <input
                    type={passwordShown ? "text" : "password"}
                    placeholder="Enter your confirm password"
                    className="w-full focus:outline-none bg-[#fafafe] dark:bg-[#1C253F]"
                    maxLength="20"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="right-0  bg-[#fafafe] dark:bg-[#1C253F] W-12 pt-3 pr-3 rounded-r-lg">
                    {passwordShown ? (
                      <img
                        src="/images/eye-icon.png"
                        className={Style.eyeIconStyle}
                        alt="Hire a chef near me"
                        onClick={togglePasswordVisiblity}
                      />
                    ) : (
                        <img
                          src="/images/eye-close-icon.png"
                          alt="How to Hire the Best Chefs"
                          className={Style.eyecloseIconStyle}
                          onClick={togglePasswordVisiblity}
                        />
                      )}
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  className={Style.signupBtn}
                  onClick={resetPassword}
                  type="button"
                >
                  Reset
              </button>
              </div>
            </form>
          </div>
        </div>
      ) : ""}
    </div>
  );
}

export default ResetPassword;
