import React, { useState, useEffect } from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import Style from "../styles/Home.module.css";
import { PostRequest, GetRequest } from "../components/helpers/ApiHelper";
import swal from "sweetalert";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/router";
import Head from 'next/head'
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppLogo from "../components/common-components/WhatsApp";
function ContactUs() {
  let [data, setData] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [outletName, setOutletName] = useState("");
  let [message, setMessage] = useState("");
  let [characterCheck, setCharacterCheck] = useState("na");
  let [validEmail, setValidEmail] = useState("na");
  let [loading, setLoading] = useState(false);
  let router = useRouter();
  useEffect(() => {
    {
      if (name !== "")
        if (!/^[a-zA-Z\s]*$/g.test(name)) {
          setCharacterCheck(false);
        } else {
          setCharacterCheck(true);
        }
    }
  }, [name]);

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

  const GetInTouch = async () => {
    if (name === "") {
      swal("Info", "Please enter your name", "info");
    } else if (characterCheck === false) {
      swal("Info", "Name should contains alphabets only", "info");
    } else if (mobile === "") {
      swal("Info", "Please enter your contact number", "info");
    } else if (validEmail === false) {
      swal("Info", "Please enter valid email", "info");
    } else {
      setLoading(true);
      let items = {
        name: name,
        contactNo: mobile,
        email: email,
        outlet: outletName,
        message: message,
      };
      let resp = await PostRequest("getInTouch", items);
      if (resp.status === 200) {
        swal("Success", "Your message sent successfully and our Support team will contact you as soon as possible", "success");
        router.reload();
      } else {
        swal("Error", resp.message, "error");
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    GetContactDetails();
  }, []);
  const GetContactDetails = async () => {
    let resp = await GetRequest("getHospitalityContact");
    if (resp.status === 200) {
      setData(resp.data);
    } else {
      setData("");
    }
  };
  return (
    <div>
      <Head>
        <title>
          Hospitality Finder | Best website for hospitality management.
        </title>

        <meta
          name="description"
          content="Hospitality Finder is the best website for hospitality management. We provides best hospitality jobs online in the hospitality industry. Search hospitality jobs and contact employers directly."
        />
        <meta name="google-site-verification" content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM" />

        <meta
          name="Keywords"
          content="Best website for hospitality staff,
          best website to find hospitality staff,
          best website to hire hospitality staff,
          best website for hospitality near me,
          best website for hospitality staff selection,
          best website to select hospitality staff,
          best website for hospitality management,
          best website for hospitality management in India,
          best website for hospitality management in Delhi,
          best website for hospitality management in Mumbai,
          best website for hospitality management in Kolkata,
          best website for hospitality management in Pune,
          best website for hospitality management in Hydrabad,
          best website for hospitality management in Jaipur,
          best website for hospitality management in Udaipur,
          hospitality staff near me,
          hospitality staff near indore,
          hospitality staff near bhopal,
          Search hospitality jobs,
          hotel staffing solutions,
          hospitality staffing solutions agency near me,
          best website for hospitality solutions near me,
          best company to find hospitality staff,
          hospitality staffing solutions jobs,
          hss staffing near me,
          hospitality staff for hire,
          best website for hospitality jobs,
          best website for hiring restaurant staff,
          hospitality jobs online,
          hospitality jobs near me"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (<>
        <Header PageName="contactUs" />
        <div className=" grid grid-cols-7">
          <div className="col-span-1 py-12 sm:py-20 md:py-36 bg-[#DFF6FF] h-36 sm:h-48 md:h-80 text-center ">
            <p className="animate-bounce text-3xl 3xl:text-5xl text-black">C</p>
          </div>
          <div className="col-span-1 py-12 sm:py-20 md:py-36 bg-[#CAF0F8] h-36 sm:h-48 md:h-80 text-center ">
            <p className="animate-bounce text-3xl 3xl:text-5xl text-black">O</p>
          </div>
          <div className="col-span-1 py-12 sm:py-20 md:py-36 bg-[#90E0EF] h-36 sm:h-48 md:h-80 text-center ">
            <p className="animate-bounce text-3xl 3xl:text-5xl text-white">N</p>
          </div>
          <div className="col-span-1 py-12 sm:py-20 md:py-36 bg-[#00B4D8] h-36 sm:h-48 md:h-80 text-center ">
            <p className="animate-bounce text-3xl 3xl:text-5xl text-white">T</p>
          </div>
          <div className="col-span-1 py-12 sm:py-20 md:py-36 bg-[#90E0EF] h-36 sm:h-48 md:h-80 text-center ">
            <p className="animate-bounce text-3xl 3xl:text-5xl text-white">A</p>
          </div>
          <div className="col-span-1 py-12 sm:py-20 md:py-36 bg-[#CAF0F8] h-36 sm:h-48 md:h-80 text-center ">
            <p className="animate-bounce text-3xl 3xl:text-5xl text-black">C</p>
          </div>
          <div className="col-span-1 py-12 sm:py-20 md:py-36 bg-[#DFF6FF] h-36 sm:h-48 md:h-80 text-center ">
            <p className="animate-bounce text-3xl 3xl:text-5xl text-black">T</p>
          </div>
        </div>
        <div className="grid grid-cols-12 px-3 lg:px-20 3xl:px-36">
          <div className="col-span-12 md:col-span-6">
            <p className="text-2xl text-center py-5 fontsemiBold 3xl:text-4xl">Get In Touch</p>
            <div className="grid grid-cols-12 pt-5">
              <div className="col-span-12 md:col-span-6 md:ml-4 md:mr-2">
                <input
                  type="text"
                  className="w-full h-10 3xl:h-16 3xl:text-2xl border rounded p-3"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
                <span
                  className={
                    characterCheck === false ? "text-red-400 text-xs" : " hidden"
                  }
                >
                  Name should contains alphabets only
                </span>
              </div>
              <div className="col-span-12 md:col-span-6 md:ml-2 md:mr-4 pt-5 md:pt-0">
                <PhoneInput country={"in"} onChange={(e) => setMobile(e)} />
              </div>
            </div>
            <div className="grid grid-cols-12 pt-5 3xl:pt-8">
              <div className="col-span-12 md:col-span-6 md:ml-4 md:mr-2">
                <input
                  type="text"
                  className="w-full h-10 3xl:h-16 3xl:text-2xl border rounded p-3"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={EmailCheck}
                />
                <span
                  className={
                    validEmail === false ? " text-red-400 text-xs" : "hidden"
                  }
                >
                  Please enter valid Email.
                </span>
              </div>
              <div className="col-span-12 md:col-span-6 md:ml-2 md:mr-4 pt-5 md:pt-0">
                <input
                  type="text"
                  className="w-full h-10 3xl:h-16 3xl:text-2xl border rounded p-3"
                  placeholder="Outlet"
                  onChange={(e) => setOutletName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 pt-5 3xl:pt-8">
              <div className="col-span-12 md:mr-4 md:ml-4">
                <input
                  type="textArea"
                  className="w-full h-24 3xl:h-36 3xl:text-2xl border rounded pl-3"
                  placeholder="Type Your message here"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center mb-3 pt-5 3xl:pt-10">
              {loading === true ? (
                <button
                  className="bg-[#F8B705] cursor-progress py-2 px-10 rounded text-[#1b1465] 3xl:text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#F8B705] duration-300 "
                  type="button"
                >
                  Submit
                </button>
              ) : (
                <button
                  className="bg-[#F8B705] py-2 px-10 rounded text-[#1b1465] 3xl:text-3xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#F8B705] duration-300 "
                  type="button"
                  onClick={() => GetInTouch()}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-2xl text-center py-5 fontsemiBold 3xl:text-4xl">Directions</p>
            <div className="m-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3770.8857216484716!2d72.90405481428658!3d19.068761457156654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5%20%2C%20B%20WING%20SAMRAT%20BHAVAN%20CHHEDA%20NAGAR%20CHEMBUR%20WEST%20MUMBAI!5e0!3m2!1sen!2sin!4v1651147132614!5m2!1sen!2sin"
                className="h-[300px] 3xl:h-[500px]"
                style={{ border: "0", width: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-5 border-b border-[#B7B0FF] pb-20 3xl:px-28">
          {/* <div className="col-span-12 sm:col-span-6 md:col-span-4 pt-5">
            <div className="grid justify-items-center">
              <div className="h-24 w-24 rounded-full bg-[#F8B705] grid justify-items-center">
                <img
                  src="/images/contact-phone.png"
                  alt="How to find good Chef near me"
                  className="h-8 w-8 my-8 animate-bounce"
                />
              </div>
              <p className="text-md text-[#1b1465] pt-3 px-5 text-center 3xl:text-2xl">
                {data !== "" ? data.contact : ""}
              </p>
            </div>
          </div> */}
          <div className="col-span-12 sm:col-span-6 pt-5">
            <div className="grid justify-items-center">
              <div className="h-24 w-24 rounded-full bg-[#F8B705] grid justify-items-center">
                <img
                  src="/images/contact-email.png"
                  alt="Best Chef for my restaurant"
                  className="h-8 w-8 my-8 animate-bounce"
                />
              </div>
              <p className="text-md text-[#1b1465] pt-3 px-5 text-center 3xl:text-2xl">
                {data !== "" ? data.email : ""}
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 pt-5">
            <div className="grid justify-items-center">
              <div className="h-24 w-24 rounded-full bg-[#F8B705] grid justify-items-center">
                <img
                  src="/images/contact-location.png"
                  alt="Looking Chef for my restaurant"
                  className="h-8 w-8 my-8 animate-bounce"
                />
              </div>
              <p className="text-md text-[#1b1465] pt-3 px-5 text-center 3xl:text-2xl ">
                {data !== "" ? data.address : ""}
              </p>
            </div>
          </div>
        </div>

        <Footer /> </>) : ""}
        <WhatsAppLogo />
    </div>
  );
}

export default ContactUs;
