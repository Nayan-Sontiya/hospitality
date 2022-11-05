import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import { useEffect, useState } from "react";
import { GetRequest } from "../components/helpers/ApiHelper";
import Head from "next/head";
import NewResume from "../components/resume-components/newresume";
function resume() {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetPlan();
  }, []);
  const GetPlan = async () => {
    let response = await GetRequest(
      "getCandidateInfo/" + "624c2b7e328848fd20dc7d46"
    );
    console.log(response);
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
