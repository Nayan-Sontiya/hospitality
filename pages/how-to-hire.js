import React from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import paymentFile from "../public/images/lottiesFile/buy-package.json";
import animationData from "../public/images/lottiesFile/search-lottie.json";
import connectFile from "../public/images/lottiesFile/connect.json";
import Lottie from "react-lottie";
import Head from "next/head";
const Payment = {
  loop: true,
  autoplay: true,
  animationData: paymentFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Connect = {
  loop: true,
  autoplay: true,
  animationData: connectFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function HowToHire() {
  return (
    <div>
      <Head>
        <title>
          How To Hire | Best website to meet hospitality employers and employees
        </title>
        <meta
          name="description"
          content="Looking for hospitality employers and employees to fill job vacancies? Hospitality Finder is the Best website to meet hospitality employers and employees."
        />
        <meta
          name="google-site-verification"
          content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM"
        />
        <meta
          name="Keywords"
          content="Best website to meet hospitality employers and employees,
          hospitality staff job seekers,
          best website to search for hospitality staff,
          hire online professional chefs for hospitality,
          The best hospitality recruitment website,
          find a new hospitality job,
          hire housekeepers for hospitality,
          hire receptionists for hospitality,
          hire lobby managers for hospitality,
          hire waiter for hospitality,
          hire room attendant for hospitality,
          hire security staff for hospitality,
          hire cooks for hospitality,
          hire bartender for hospitality,
          hire managers for hospitality,
          hire restaurant managers for hospitality,
          hire residential managers for hospitality,
          hire mixologist for hospitality,
          hire juggler for hospitality,
          hire bartending helper for hospitality,
          hire front office executive for hospitality,
          hire back office executive for hospitality,
          hire hostess for hospitality,
          hire front desk agent for hospitality,
          hire sales manager for hospitality,
          hire reservation executive for hospitality,
          hire hotel security staff for hospitality,
          hire event management staff for hospitality,
          hire legal manager for hospitality,
          hire account manager for hospitality,
          hire accountant for hospitality"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (
        <>
          <Header PageName="howItWorks" />
          <div className="hireBgImage">
            <p className="text-center pt-20 sm:pt-28  md:pt-48 text-[#ffffff] text-xl sm:text-2xl md:text-4xl lg:text-[50px] 3xl:text-5xl font-bold">
              HOW TO HIRE?
            </p>
          </div>
          <div className="px-5 md:px-10 py-5 md:py-10">
            <p className="text-center text-lg 3xl:text-2xl 3xl:px-16">
              The biggest advantage of our website is that the hiring process is
              straightforward. All you have to do is to follow the steps
              mentioned below if you want to find the
              <b> best manager for my restaurant</b>.
            </p>

            <div className="grid grid-cols-12  3xl:px-20">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 mt-5 mx-2 3xl:mx-5 bg-[#ffffff] rounded-3xl shadow-2xl">
                <Lottie options={Payment} height={300} width={300} />
                <p className="text-center text-[#000000] text-2xl 3xl:text-4xl pt-5 ">
                  1. Purchase the plan
                </p>
                <p className="p-5 text-[#666666] text-center md:text-left 3xl:text-2xl">
                  Decide what kind of candidates you want and what count. Now
                  choose your preferred plan from among the ones available. We
                  have plans at various purchase points. Pick up the one that
                  matches your budget and find the{" "}
                  <b>most talented bartenders</b> .{" "}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 mt-5 mx-2 3xl:mx-5 bg-[#ffffff] rounded-3xl shadow-2xl">
                <Lottie options={defaultOptions} height={300} width={300} />
                <p className="text-center text-[#000000] text-2xl pt-5 3xl:text-4xl">
                  2. Search the candidate
                </p>
                <p className="p-5 text-[#666666] text-center md:text-left 3xl:text-2xl">
                  We have a wide variety of resumes for your perusal. After
                  purchasing the plan, you can browse the resumes. Pick up the
                  candidates that will match the salary and location
                  requirements you have. After you have found your desired
                  candidates, you could contact them.
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 mt-5 mx-2 3xl:mx-5 bg-[#ffffff] rounded-3xl shadow-2xl">
                <Lottie options={Connect} height={300} width={300} />
                <p className="text-center text-[#000000] text-2xl pt-5 3xl:text-4xl">
                  3. Contact the candidate
                </p>
                <p className="p-5 text-[#666666] text-center md:text-left 3xl:text-2xl">
                  Now contact the ideal candidate and finalize the placement.
                  Discuss the job profile and responsibilities in advance. Most
                  of the candidates are verified. We have done the background
                  checks, and you can trust them with the work. You are done
                  with the recruitment. Since most of the candidates are
                  experienced, you will not have to work hard on training them.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1b1465] p-5 md:p-10 3xl:p-24">
            <p className=" text-[#ffffff] text-lg text-center 3xl:text-2xl ">
              As is evident, hiring staff from us is very quick and easy. We
              promise you that you will be satisfied with the candidates we
              offer. For more information, you can always contact us at or read
              the FAQs here.
              <br />
              <br />
              Whether you want to start a full-fledged hotel or a niche
              restaurant, we are the <b>best agency for event staff</b>. Get
              started today, and within no time, you will have the perfect team
              for the project. Success for your new venture would then follow
              soon.
            </p>
          </div>
          <Footer />{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default HowToHire;
