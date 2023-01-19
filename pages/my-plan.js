import React, { useEffect, useState } from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import { GetRequest, userDataProvider } from "../components/helpers/ApiHelper";
import Link from "next/link";
import Loader from "../components/common-components/Loader";
import Head from 'next/head'
import { useRouter } from 'next/router'
import ReactWhatsapp from "react-whatsapp";
function MyPlan() {
  let [data, setData] = useState([]);
  let [dayLeft, setDayLeft] = useState("")
  let [loader, setLoader] = useState(false)
  let userData = userDataProvider();
  let router = useRouter();
  useEffect(() => {
    GetUserPlan();
  }, []);
  const GetUserPlan = async () => {

    setLoader(true)
    if (userData !== "" && userData !== undefined && userData !== null) {
      let resp = await GetRequest("getUserPlan/" + userData._id);
      if (resp.status === 200) {
        setData(resp.data);
        setDayLeft(resp.day_left)
      } else {
        setData([]);
      }
    } else {
      router.push("/")
    }
    setLoader(false)
  };

  return (
    <>
      <Head>
        <title>
          Hospitality Finder | Guidelines for hiring and managing hospitality staff
        </title>
        <meta
          name="description"
          content="We all know that the hospitality industry is tough. We are the Gurus and provide the support and guidelines for hiring and managing hospitality staff."
        />
        <meta name="google-site-verification" content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM" />
        <meta
          name="Keywords"
          content="guidelines for hiring and managing hospitality staff,
          female hospitality staff,
          what is hospitality staff,
          general hospitality staff,
          how to recruit hospitality staff,
          how to train hospitality staff,
          how to find hospitality staff,
          how to motivate hospitality staff,
          hiring and managing hospitality staff,
          how to manage hospitality staff,
          help for hospitality staff,
          how to retain hospitality staff,
          hospitality staff incentives ideas,
          hospitality staff induction template,
          hospitality staff interview questions and answers,
          hospitality staff industries,
          hospitality industry staff shortage,
          is it mandatory for hospitality staff to wear masks,
          catering and hospitality staff,
          hospitality staff duties,
          hospitality staff job description,
          general hospitality staff duties,
          dress code for hospitality staff,
          hospitality staff events,
          hospitality staff employee,
          hospitality staff free images,
          hospitality floor staff,
          front of house hospitality staff,
          ftr hospitality staff accountant,
          for hospitality staff"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (
        <>
          <Header />
          {loader ? <Loader />
            :
            <div className="p-2 sm:p-5 md:p-10">
              {data.length > 0 ?
                <>
                  <div className="grid justify-items-center">
                    <div className="w-80 bg-[#1b1465] p-3 rounded">
                      <p className="grid justify-items-center text-[#ffffff] text-2xl font-semibold border-b border-[#ffffff] tracking-widest">
                        My Plan
                      </p>
                      <div className="grid justify-items-center">
                        <div className="flex pt-3">
                          <label className="text-[#ffffff]">
                            Limited resumes are left :{" "}
                          </label>
                          <p className="text-[#ffffff]">
                            &nbsp; {data.length > 0 ? data[0].resume_count : 0}
                          </p>
                        </div>
                        <div className="flex pt-3">
                          <label className="text-[#ffffff]">
                            Remaining days are left :{" "}
                          </label>
                          <p className="text-[#ffffff]">
                            &nbsp; {dayLeft}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-5 md:p-10">
                    <p className="text-2xl text-[#1b1465] font-semibold border-[#1b1465] border-b-[2px] tracking-widest ">
                      Your Candidate
                    </p>
                    <div className="grid grid-cols-12 pt-10">
                      {data.length > 0
                        ? data[0].canditateResume.map((val, i) => {
                          return (
                            <div
                              key={i}
                              className="col-span-12 sm:col-span-6 md:col-span-4 p-2"
                            >
                              <div className="bg-[#f7f7f7] p-3">
                                <div className="flex pt-3">
                                  <label className="">
                                    Candidate Name : &nbsp;
                                  </label>
                                  <p className="">{val.candidateName}</p>
                                </div>
                                <div className="flex pt-3">
                                  <label className="">
                                    Employment Type : &nbsp;
                                  </label>
                                  <p className="">{val.occupation}</p>
                                </div>
                                <div className="grid justify-items-center pt-3">
                                  <Link
                                    href={{
                                      pathname: "/user-details",
                                      query: { id: val.candidateId },
                                    }}
                                  >
                                    <button className="border border-[#1b1465] px-5 py-2 text-[1b1465] rounded bg-[#ffffff]">
                                      View all details
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })
                        : ""}
                    </div>

                  </div>
                </> :
                <div className="text-center">
                  <Link href="/packs" passHref>
                    <button className="bg-[#1b1465] px-10 py-3 text-white rounded"
                    >Please Purchase Plan</button>
                  </Link>
                </div>
              }
            </div>}
          <Footer />
        </>
      ) : (
        ""
      )}
      <WhatsAppLogo />
    </>
  );
}

export default MyPlan;
