import React from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import Lottie from "react-lottie";
import animationData from "../public/images/lottiesFile/search-lottie.json";
import paymentFile from "../public/images/lottiesFile/buy-package.json";
import joiningFile from "../public/images/lottiesFile/joining.json";
import connectFile from "../public/images/lottiesFile/connect.json";
import workingFile from "../public/images/lottiesFile/working.json";
import questionFile from "../public/images/lottiesFile/question.json";
import Head from "next/head";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppLogo from "../components/common-components/WhatsApp";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Payment = {
  loop: true,
  autoplay: true,
  animationData: paymentFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Joining = {
  loop: true,
  autoplay: true,
  animationData: joiningFile,
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
const Working = {
  loop: true,
  autoplay: true,
  animationData: workingFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Question = {
  loop: true,
  autoplay: true,
  animationData: questionFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function HowItWorks() {
  return (
    <div>
      <Head>
        <title>
          Hospitality Finder | Easiest way to find the best housekeeping staff
        </title>
        <meta
          name="description"
          content="Hospitality Finder | The fastest, easiest way to find the best housekeeping staff, most talented chefs, cooks and kitchen staff 	&#38; makes the hiring process easy and delivers you the right staff, right away!"
        />
        <meta name="google-site-verification" content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM" />
        <meta
          name="Keywords"
          content="find the best housekeeping staff,
          most talented chefs,
          cooks and kitchen Staff,
          Best Chef to make french dishes,
          Best Chef to make Thai dishes,
          Best chef to make japenese food,
          Best  Italian Chefs,
          Best Marwaadi chef,
          Best chef to make fast food,
          Best Chef to make North indian dishes,
          Best Chef to make Spanish dishes,
          Best japenese chef,
          Best Chef to make Italian dishes,
          Best chef to make Continental Food,
          Best Rajasthani chef,
          Best gujarati chef,
          Best Chef to make south indian dishes,
          Best chef to make chinese food,
          Best chef to make oriental food,
          Famous Italian Chefs,
          Famous Spanish Chefs,
          Famous french Chefs,
          Experienced south indian chef,
          Famous south indian chef,
          Famous maharashtrian chefs,
          Famous Thai Chefs,
          Chef for continental food,
          Continental/Fast Food Chefs,
          Chef for chinese fast food,
          The Chefs' Warehouse"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (<>
        <Header PageName="howItWorks" />
        <div className="worksBgImage">
          <p className="text-center pt-20 sm:pt-28  md:pt-48 text-[#ffffff] font-bold text-3xl sm:text-4xl md:text-4xl lg:text-[50px] 3xl:text-5xl">
            HOW IT WORKS?
          </p>
        </div>
        <div className="px-1 md:px-16 3xl:px-24 py-2 md:py-10 ">
          <div className="bg-[#ffffff] pb-10 rounded ">
            <p className="p-2 md:p-5 text-xl md:text-center 3xl:text-2xl">
              The entire process of getting your ideal team is relatively easy
              with Hospitality finder. It is a two-step process for both employers
              and employees. Have a look, and we are there to address any queries
              you might have to <b>find the best housekeeping staff</b>.
            </p>
            <div className="grid grid-cols-12 ">
              <div className="col-span-12 sm:col-span-6  lg:col-span-4 mt-5 mx-2 bg-[#ffffff] rounded-3xl shadow-2xl">
                <Lottie options={Payment} height={300} width={300} />

                <p className="text-center text-[#000000] text-2xl pt-5 3xl:text-3xl">
                  1. Buy the package
                </p>
                <p className="p-5 text-[#666666] text-center 3xl:text-2xl">
                  {" "}
                  Choose the package you find suitable for your needs. Each of the
                  package offers a different number of resumes. Pick one that
                  matches the budget and the number of employees required.
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6  lg:col-span-4 mx-2 mt-5 bg-[#ffffff] rounded-3xl shadow-2xl">
                <Lottie options={defaultOptions} height={300} width={300} />
                <p className="text-center text-[#000000] text-2xl 3xl:text-3xl pt-5">
                  2. Search
                </p>
                <p className="p-5 text-[#666666] text-center 3xl:text-2xl">
                  You are now free to search from among the vast collection of
                  resumes available. If you have already decided on the posts you
                  wish to fill; then this process becomes extra simple. Note down
                  the profiles that you think match your need.
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6  lg:col-span-4 mt-5 mx-2 bg-[#ffffff] rounded-3xl shadow-2xl">
                <Lottie options={Connect} height={300} width={300} />
                <p className="text-center text-[#000000] text-2xl pt-5 3xl:text-3xl">
                  3. Connect
                </p>
                <p className="p-5 text-[#666666] text-center 3xl:text-2xl">
                  {" "}
                  Now is the time to connect with your ideal candidate. You can
                  discuss your job expectations and discuss other details as well.
                  Negotiate with the salary, and you have the best people ready to
                  join your team. We can be among the{" "}
                  <b>Best Places to Find bartenders</b>. This is as simple as
                  that.
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6  lg:col-span-4 mt-5 mx-2 bg-[#ffffff] rounded-3xl shadow-2xl">
                <Lottie options={Joining} height={300} width={300} />
                <p className="text-center text-[#000000] text-2xl pt-5 3xl:text-3xl">
                  4. Joining
                </p>
                <p className="p-5 text-[#666666] text-center 3xl:text-2xl">
                  Get the team to join as per your convenience. All the employees
                  we have listed are qualified and experienced in the field. As an
                  employer, you would not have to spend your time in acquainting
                  them with the work involved.
                </p>
              </div>{" "}
              <div className="col-span-12 sm:col-span-6  lg:col-span-4 mt-5 mx-2 bg-[#ffffff] rounded-3xl shadow-2xl">
                <Lottie options={Working} height={300} width={300} />
                <p className="text-center text-[#000000] text-2xl pt-5 3xl:text-3xl">
                  5. Start Working
                </p>
                <p className="p-5 text-[#666666] text-center 3xl:text-2xl">
                  {" "}
                  Now you have a whole team that is trained to handle all kinds of
                  tasks. We have helped you finish the most demanding aspect of
                  setting up your own hospitality business. The{" "}
                  <b>Professional manager</b> we provide are verified, so rest
                  assured that you will get the best quality work out of them.
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6  lg:col-span-4 mt-5 mx-2 bg-[#ffffff] rounded-3xl shadow-2xl">
                <Lottie options={Question} height={300} width={300} />
                <p className="text-center text-[#000000] text-2xl pt-5 3xl:text-3xl">
                  6. So what are you waiting for?
                </p>
                <p className="p-5 text-[#666666] text-center 3xl:text-2xl">
                  {" "}
                  You can Hire Qualified 	&#38; Experienced Chefs from us. Let us get
                  started with this work. Pick up your package and start your
                  search immediately. We are pretty sure we will be able to handle
                  you with the best talent available in the industry at the
                  moment. If you need any other help, we are there to take care of
                  that as well.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />   </>) : ""}
        <WhatsAppLogo />
    </div>
  );
}

export default HowItWorks;

