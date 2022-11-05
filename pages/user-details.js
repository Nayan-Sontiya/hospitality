import React, { useState, useEffect } from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import Lottie from "react-lottie";
import imageDAta from "../public/images/lottiesFile/image-placeholder.json";
import { useRouter } from "next/router";
import {
  GetRequest,
  awsUrl,
  userDataProvider,
} from "../components/helpers/ApiHelper";
import { multipleMediaIdentifier } from "../components/helpers/HelperFunctions";
import Loader from "../components/common-components/Loader";
import Resume from "./../components/resume-components/resume";
import NewResume from "../components/resume-components/newresume";
const ImageLottie = {
  loop: true,
  autoplay: true,
  animationData: imageDAta,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function UserDetails() {
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState("");
  const router = useRouter();

  let candidateId = router.query.id;
  useEffect(() => {
    if (candidateId !== undefined) {
      fetchCandidateDetails();
    }
  }, [candidateId]);
  const fetchCandidateDetails = async () => {
    const userData = userDataProvider();
    setLoading(true);
    if (userData !== "" && userData !== undefined && userData !== null) {
      let res = await GetRequest(
        "getCandidateResume/" + userData._id + "/" + candidateId
      );
      if (res.status === 200) {
        setData(res.data);
        setLoading(false);
      } else {
        router.push("/packs");
      }
    } else {
      router.push("/");
    }
  };

  function getYearOfExperience(monthCount) {
    function getPlural(number, word) {
      return (number === 1 && word.one) || word.other;
    }
    var months = { one: "month", other: "months" },
      years = { one: "year", other: "years" },
      m = monthCount % 12,
      y = Math.floor(monthCount / 12),
      result = [];
    y && result.push(y + " " + getPlural(y, years));
    m && result.push(m + " " + getPlural(m, months));
    return result.join(" , ");
  }

  return (
    <div>
      {process.browser ? (
        <>
          <Header PageName="menu" />
          {loading === true ? (
            <Loader />
          ) : (
            <div>
              {data !== "" && data !== undefined && data !== null ? (
                <NewResume data={data} />
              ) : (
                ""
              )}
            </div>
          )}
          <Footer />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserDetails;
