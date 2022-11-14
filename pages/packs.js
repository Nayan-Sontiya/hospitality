import React, { useEffect, useState } from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import shortid from "shortid";
import {
  GetRequest,
  accessTokenProvider,
  userDataProvider,
} from "../components/helpers/ApiHelper";
import Style from "../styles/Home.module.css";
import Loader from "../components/common-components/Loader";
import swal from "sweetalert";
import { useRouter } from "next/router";
import Head from "next/head";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
function Packs() {
  let [data, setData] = useState([]);
  let accessToken = accessTokenProvider();
  let router = useRouter();
  let userData = userDataProvider();
  useEffect(() => {
    GetPlan();
  }, []);
  const GetPlan = async () => {
    let response = await GetRequest("getPackages");
    if (response.status === 200) {
      setData(response.data);
    }
  };
  const loggedInCheck = async (id) => {
    if (
      accessToken !== "" &&
      accessToken !== null &&
      accessToken !== undefined
    ) {
      // displayRazorpay();
      const res = await GetRequest("checkPurchaseLimit/" + userData._id);
      if (res.status === 200) {
        router.push({
          pathname: "/plan-subscription",
          query: { packageId: id },
        });
      } else {
        swal("Info", res.message, "warning");
      }
    } else {
      swal("Info", "Please Log In your Account", "warning");
    }
  };
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const rndInt = randomIntFromInterval(100, 200);
  return (
    <div>
      <Head>
        <title>
          Hospitality Finder | Experienced hospitality staff for hire
        </title>
        <meta
          name="description"
          content="Finding great staff for your hospitality business should be simple, whether you need experienced hospitality staff for hire, experienced manager for hire, experienced utility staff for hire, experienced hostess for hire, experienced hotel security staff for hire, experienced waiter for hire, or experienced accountant for hire."
        />
        <meta
          name="Keywords"
          content="experienced hospitality staff for hire,
          experienced accountant for hire,
          experienced business development manager for hire,
          experienced hotel security staff for hire,
          experienced manager for hire,
          experienced utility staff for hire,
          experienced hostess for hire,
          experienced event management staff for hire,
          experienced waiter for hire,
          experienced steward for hire,
          experienced bartender for hire,
          experienced captain for hire,
          experienced housekeeper for hire,
          experienced receptionist for hire,
          experienced lobby manager for hire,
          experienced doorman for hire,
          experienced room attendant for hire,
          experienced security staff for hire,
          experienced restaurant manager for hire,
          experienced residential manager for hire,
          experienced mixologist for hire,
          experienced juggler for hire,
          experienced bartending helper for hire,
          experienced front office executive for hire,
          experienced back office executive for hire,
          experienced front desk agent for hire,
          experienced sales manager for hire,
          experienced reservation executive for hire,
          experienced electrician for hire,
          experienced F	&#38; B manager for hire"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (
        <>
          <Header PageName="packs" />
          {data.length > 0 ? (
            <div>
              {accessToken !== "" &&
              accessToken !== null &&
              accessToken !== undefined ? (
                <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] 3xl:text-[40px] px-5 sm:px-10 lg:px-20 3xl:px-28 text-center py-10 leading-7 sm:leading-7 md:leading-10	">
                  We have found {rndInt} verified profiles suitable to your
                  requirements. Please select the desired plan and proceed.
                </p>
              ) : (
                <div className="pt-16"></div>
              )}

              <div className="grid grid-cols-12 px-5 sm:px-10 md:px-10 lg:px-20 3xl:px-60">
                <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-5 py-14">
                  <div
                    className={
                      Style.pkgCard +
                      " transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    }
                  >
                    <div
                      className="bg-[#F8B705] h-48 rounded-t-[35px] "
                      style={{
                        background:
                          "linear-gradient(to right, rgb(52 53 53), rgb(112 111 111), rgb(57 55 55 / 36%))",
                      }}
                    >
                      <p className="uppercase text-white text-center pt-20 text-5xl 3xl:text-6xl font-bold">
                        silver
                      </p>
                    </div>
                    <div className="-mt-8 bg-[#ffffff] rounded mx-10 h-16 shadow-xl text-center text-xl 3xl:text-3xl font-semibold">
                      <span className="text-xs">GST Included</span>
                      <br />
                      <p className=""> &#8377; {data[0].price}</p>
                    </div>
                    <div className="grid justify-items-center">
                      <p className="rounded text-center mt-8 text-xl 3xl:text-2xl">
                        Total Resume - {data[0].no_of_resumes}
                        <br />
                        <span className="text-xs">
                          Get {data[0].no_of_resumes} resumes of top hospitality
                          professionals
                        </span>
                      </p>
                      <p className="rounded text-center mt-5 text-xl 3xl:text-2xl">
                        Validity in days - {data[0].validity} days
                      </p>
                      <p className="rounded text-center mt-5 text-xl 3xl:text-2xl">
                        Good for 1 hiring
                      </p>
                      <button
                        className="bg-[#000000] text-[#ffffff] mt-8 px-5 py-2 rounded 3xl:text-2xl"
                        onClick={() => loggedInCheck(data[0]._id)}
                      >
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-5 py-3">
                  <div
                    className={
                      Style.pkgCardP +
                      " transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    }
                  >
                    <div
                      className="bg-[#1b1465] h-60 rounded-t-[35px] "
                      style={{
                        background:
                          "linear-gradient(to right, rgb(238 116 100), rgb(235 140 128), rgba(238, 37, 37, 0.36))",
                      }}
                    >
                      <div className="pt-10">
                        <p className="bg-[#ffffff] rounded-lg py-1 px-3 mx-24">
                          Recommended
                        </p>
                      </div>
                      <p className="uppercase text-white text-center pt-10 text-5xl 3xl:text-6xl font-bold">
                        Platinum
                      </p>
                    </div>
                    <div className="-mt-8 bg-[#ffffff] rounded mx-10 h-16 shadow-xl text-center text-xl 3xl:text-3xl font-semibold">
                      <span className="text-xs">GST Included</span>
                      <br />
                      <p className=""> &#8377; {data[2].price}</p>
                    </div>
                    <div className="grid justify-items-center">
                      <p className=" text-center mt-14 text-xl 3xl:text-2xl">
                        Total Resume - {data[2].no_of_resumes}
                        <br />
                        <span className="text-xs">
                          Get {data[2].no_of_resumes} resumes of top hospitality
                          professionals
                        </span>
                      </p>
                      <p className="rounded text-center mt-8 text-xl 3xl:text-2xl">
                        Validity in days - {data[2].validity} days
                      </p>
                      <p className="rounded text-center mt-5 text-xl 3xl:text-2xl">
                        Good for multiple hiring
                      </p>
                      <button
                        className="bg-[#000000] text-[#ffffff] mt-10 px-5 py-2 rounded 3xl:text-2xl"
                        onClick={() => loggedInCheck(data[2]._id)}
                      >
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-5 py-14">
                  <div
                    className={
                      Style.pkgCard +
                      " transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    }
                  >
                    <div
                      className="bg-[#E5B80B] h-48 rounded-t-[35px] "
                      style={{
                        background:
                          "linear-gradient(to right, rgb(202 153 0), rgb(240 195 51 / 83%), rgb(237 207 114 / 62%))",
                      }}
                    >
                      <p className="uppercase text-white text-center pt-20 text-5xl 3xl:text-6xl font-bold">
                        Gold
                      </p>
                    </div>
                    <div className="-mt-8 bg-[#ffffff] rounded mx-10 h-16 shadow-xl text-center text-xl 3xl:text-3xl font-semibold">
                      <span className="text-xs">GST Included</span>
                      <br />
                      <p className=""> &#8377; {data[1].price}</p>
                    </div>
                    <div className="grid justify-items-center">
                      <p className="rounded text-center mt-8 text-xl 3xl:text-2xl">
                        Total Resume - {data[1].no_of_resumes}
                        <br />
                        <span className="text-xs">
                          Get {data[1].no_of_resumes} resumes of top hospitality
                          professionals
                        </span>
                      </p>
                      <p className="rounded text-center mt-5 text-xl 3xl:text-2xl">
                        Validity in days - {data[1].validity} days
                      </p>
                      <p className="rounded text-center mt-5 text-xl 3xl:text-2xl">
                        Good for 2 hiring
                      </p>
                      <button
                        className="bg-[#000000] text-[#ffffff] mt-8 px-5 py-2 rounded 3xl:text-2xl"
                        onClick={() => loggedInCheck(data[1]._id)}
                      >
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          ) : (
            <Loader />
          )}
          <Footer />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Packs;
