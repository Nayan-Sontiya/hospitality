import React from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import Head from "next/head"
function Faq() {
  const Questions = [
    {
      id: 1,
      question:
        "Do I have to register to avail the services of Hospitality Finder?",
      answer:
        "Yes, you have to first create your account on the website. It is only after the sign-up is over that you can purchase any of the packs available.",
    },
    {
      id: 2,
      question: "What are the different packages that are available?",
      answer:
        "We have three different packages that you may choose from. Have a look at the packages here.",
    },
    
    {
      id: 3,
      question: "Are the candidate's profile verified?",
      answer:
        "Yes, we have checked the credentials of all the candidates. You will get only the best and most relevant profiles for your kind perusal.",
    },
    {
      id: 4,
      question: "Can we directly contact the candidates?",
      answer:
        "Yes, with the resumes, you will get all the details related to the candidate. Once you find his credentials worthy of signing up, you can contact him directly.",
    },
    {
      id: 5,
      question: "Is It possible to sort the resumes?",
      answer:
        "Of course, you can sort them based on location, salary expectation, and kind of service. This will make it simple for you to pick a candidate that suits your requirement.",
    },
    {
      id: 6,
      question: "What if I am unable to understand how to use the service?",
      answer:
        "If you cannot understand the pattern of using the service, you may contact us. Our customer service executive will get back to you and answer any queries you may have. ",
    },
  ];
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
            <div className={"container px-5 py-14 mx-auto"}>
              <div className="text-center mb-12">
                <h1 className="sm:text-3xl text-2xl text-red-700 font-medium text-center title-font text-gray-900 mb-4">
                  Frequently Asked Question
              </h1>
              </div>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="w-full  px-4 py-2">
                  {Questions.map((ques, i) => {
                    return (
                      <details className="mb-4" key={ques.id}>
                        <summary className="font-semibold text-[#1b1465]  bg-gray-100 rounded-md py-2 px-4">
                          {ques.question}
                        </summary>
                        <div className="px-5 md:px-8 bg-gray-300 rounded-md mt-2 py-2">
                          <span className="font-semibold text-[#1b1465]">{ques.answer}</span></div>
                      </details>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
   
        <Footer />     </>) : ""}
      </div>
    </>
  );
}

export default Faq;
