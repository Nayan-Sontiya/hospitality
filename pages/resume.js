import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import { useEffect, useState } from "react";
import { GetRequest } from "../components/helpers/ApiHelper";
import Head from "next/head";
import NewResume from "../components/resume-components/newresume";
import { useRouter } from "next/router";
function resume() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const {userId} = router.query || {};
  useEffect(() => {
    GetPlan();
  }, [userId]);
  const GetPlan = async () => {
    let response = await GetRequest(
      "getCandidateInfo/" + userId
    );

    if (response.status === 200) {
      setData(response.data);
    }
  };
  return (
    <div>
      <Head>
        <title>
          Hospitality Finder | We provide restaurant staffing solutions
        </title>
        <meta
          name="description"
          content="Welcome to Hospitality Finder, a comprehensive online search service for businesses seeking hospitality professional or staff."
        />
        <meta
          name="google-site-verification"
          content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM"
        />
        <meta
          name="Keywords"
          content="best hospitality management staff,
          top accountants list,
          top business development managers list,
          top hotel security staff list,
          talented managers list,
          top utility staff list,
          top hostess list,
          top event management staff list,
          experienced waiters list,
          experienced stewards list,
          top bartenders list,
          experienced captains list,
          experienced housekeepers list,
          experienced receptionists list,
          top lobby managers list,
          experienced doormans list,
          experienced room attendant list,
          experienced security staff list,
          experienced restaurant managers list,
          experienced residential managers list,
          top mixologists list,
          top jugglers list,
          experienced bartending helpers list,
          experienced front office executives list,
          experienced back office executives list,
          experienced front desk agents list,
          experienced sales managers list,
          top reservation executives list,
          top electricians list,
          experienced F&#38;B managers list"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div>
        <Header PageName="resume" />
        <NewResume data={data} />
      </div>
      <Footer />
    </div>
  );
}
export default resume;
