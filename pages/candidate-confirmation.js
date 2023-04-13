import React from "react";
import Header from "../components/common-components/Header";
import Footer from "../components/common-components/Footer";
import Style from "../styles/Home.module.css";
import { useRouter } from "next/router";
// import CandidateRegistrationForm from "../components/home-components/CandidateRegistrationForm";
function CandidateConfirmation() {
  let history = useRouter();
  return (
    <>
      {process.browser ? (
        <>
          <Header />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "48px",
            }}
          >
            <p className="text-center text-2xl 3xl:text-xl font-bold py-5 md:py-10">
              Your profile has not yet been approved, Please wait or contact us
            </p>
            <button
              className={`${Style.expDetailsBtn} m-2`}
              type="button"
              onClick={() => history.push("/")}
            >
              Home
            </button>
          </div>
          <Footer />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default CandidateConfirmation;
