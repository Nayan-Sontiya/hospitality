import React, { useState, useEffect } from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import { GetRequest } from "../components/helpers/ApiHelper";
import { useRouter } from "next/router";
import swal from "sweetalert";
import Head from "next/head";
import WhatsAppLogo from "../components/common-components/WhatsApp";

function TellUs() {
  let [occupationData, setOccupationData] = useState([]);
  let [occupationName, setOccupationName] = useState("");
  let [location, setLocation] = useState("");
  let [salary, setSalary] = useState("");
  let router = useRouter();
  useEffect(() => {
    GetOccupation();
  }, []);
  const GetOccupation = async () => {
    let response = await GetRequest("getOccupations/all");
    if (response.status === 200) {
      setOccupationData(response.data);
    } else {
      setOccupationData([]);
    }
  };
  const GetSearchData = async () => {
    if (occupationName !== "") {
      if (salary !== "") {
     
          let salaryStart = salary.split("_")[0];
          let salaryEnd = salary.split("_")[1];

          // router.push({
          //   pathname: "/all-user",
          //   query: { occupationName, location, salaryStart, salaryEnd },
          // });
        router.push("/packs")
      
      } else {
        swal("Info", "please select salary range!", "warning");
      }
    } else {
      swal("Info", "please select occupation!", "warning");
    }
  };
  useEffect(() => {
    const tempGrades = GradesWithCategory?.filter(
      (grade) => grade?.category === occupationName
    );
    if (tempGrades?.length) {
      setGrades(tempGrades[0]?.grades);
    }
  }, [occupationName]);
  return (
    <div>
      <Head>
      <meta name="google-site-verification" content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM" />
      </Head>
      {process.browser ? (<>
        <Header />
        <div>
          <p className="pt-10 text-[#1B1465] text-center text-3xl">
            Tell us your requirements
        </p>
          <div className="text-center pt-10">
            <div>
              <select
                className="focus:outline-none w-60 text-md border border-[#5f5b5b] text-[#5f5b5b] py-2 px-2 rounded-lg"
                onChange={(e) => setOccupationName(e.target.value)}
              >
                <option disabled selected>
                  Select Occupation
              </option>
                {occupationData.map((occupation, i) => {
                  return (
                    <option value={occupation.type} key={i}>
                      {occupation.type}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="pt-5">
              <select
                className="focus:outline-none w-60 text-md border border-[#5f5b5b] text-[#5f5b5b] py-2 px-2 rounded-lg"
                onChange={(e) => setSalary(e.target.value)}
              >
                <option disabled selected>
                  Select Salary Range
              </option>
                <option value="0_5000">5k</option>
                <option value="5000_10000">5k to 10k</option>
                <option value="10000_15000">10k to 15k</option>
                <option value="15000_20000">15k to 20k</option>
                <option value="20000_30000">20k to 30k</option>
                <option value="30000_40000">30k to 40k</option>
                <option value="40000_50000">40k to 50k</option>
                <option value="50000_100000">50k to 100k</option>
              </select>
            </div>
            <div className="pt-5">
            
              <input
                placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}
                className="focus:outline-none w-60 placeholder-gray-600 text-md border border-[#5f5b5b] text-[#5f5b5b] py-2 px-2 rounded-lg"
              />
            </div>
            <div className="pt-5 pb-10">
              <button
                type="button"
                onClick={GetSearchData}
                className="focus:outline-none w-60 bg-[#1B1465] text-md text-[#ffffff] py-2 px-2 rounded-lg"
              >
                Search
            </button>
            </div>
          </div>
        </div>
        <Footer />
      </>) : ""}
      <WhatsAppLogo />
    </div>
  );
}

export default TellUs;
