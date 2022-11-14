
import React from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import Head from "next/head"
import NotFound from "../components/common-components/NotFound";
const  PageNotFound=()=> {
 
  return (
    <>
      <div>
      <Head>
        <title>
        Hospitality Finder | Best website for hospitality staffing solutions
        </title>
        <meta
          name="description"
          content="We solve the toughest problems facing the hospitality industry. Hospitality Finder is the best website for hospitality staffing solutions. Easily search through hundreds of hospitality job offers to kick-start your hospitality career."
        />
        <meta
          name="Keywords"
          content="Best website for hospitality job seekers,
          hospitality job recruiter,
          jobs in hospitality,
          hospitality staffing agencies near me,
          hospitality staffing solutions,
          job seekers for hospitality,
          hospitality staff job seeker,
          best hospitality staff near me,
          find best hospitality management website,
          find best hospitality staff near me,
          best website for hospitality jobs,
          housekeepers for hire near me,
          utility staff for hire near me,
          receptionists for hire near me,
          lobby managers for hire near me,
          doorman for hire near me,
          room attendant for hire near me,
          security staff for hire near me,
          waiters for hire near me,
          stewards for hire near me,
          managers for hire near me,
          restaurant managers for hire near me,
          residential managers for hire near me,
          bartenders for hire near me,
          juggler for hire near me,
          bartending helper for hire near me,
          front office executive for hire near me,
          back office executive for hire near me,
          hostess for hire near me,
          experienced chefs for hire near me,
          sales manager for hire near me,
          event management staff for hire near me,
          electrician for hire near me,
          F	&#38; B manager for hire near me,
          legal manager for hire near me,
          account manager for hire near me,
          accountant for hire near me"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {process.browser ? (<>
          <Header PageName="faq" />

          <section className="text-gray-700">
            <div className="container px-5 py-14 mx-auto">
            <NotFound titleAlign="center" />
            </div>
          </section>
   
        <Footer />     </>) : ""}
      </div>
    </>
  );
}

export default PageNotFound;
