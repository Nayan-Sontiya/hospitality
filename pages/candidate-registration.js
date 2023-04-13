import React from "react";
import Header from "../components/common-components/Header";
import Footer from "../components/common-components/Footer";
import CandidateRegistrationForm from "../components/home-components/CandidateRegistrationForm";
function CandidateRegistration() {
  return (
    <>
      {process.browser ? (
        <>
          <Header />
          <CandidateRegistrationForm />
          <Footer />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default CandidateRegistration;
