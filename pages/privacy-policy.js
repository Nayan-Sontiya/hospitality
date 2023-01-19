import React from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import Head from "next/head"
import WhatsAppLogo from "../components/common-components/WhatsApp";
function PrivacyPolicy() {
  return (
    <div>
        <Head>
        <title>
        Hospitality Finder | Best hospitality management website
        </title>
        <meta
          name="description"
          content=" Whether you’re looking for young talent to hire, or a job place to work in the hospitality industry, Hospitality Finder is the best hospitality management website."
        />
         <meta name="google-site-verification" content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM" />
        <meta
          name="Keywords"
          content="Find hospitality staff near me,
          best hospitality staff near me,
          find best hospitality management website,
          find best hospitality staff near me,
          captains for hire near me,
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
      {process.browser ? (
        <>
          <Header />

          <div className=" px-5 md:px-10">
            <p className="text-2xl lg:text-4xl text-center py-10 font-bold">
              Privacy Policy
            </p>
            <p className="">
              At Hospitality finders, your Privacy is very crucial to us. We
              follow and adhere to the following principles to maintain your
              privacy:
            </p>
            <ul className="pl-5">
              <li className="list-disc">
                We are not going to ask you to share any personal details until
                we actually need that information. For example, we will not ask
                for your Gender, Income Level, etc., as we do not need those
                details.{" "}
              </li>
              <li className="list-disc">
                We will never share personal data with anyone except in
                situations where we need to abide by the law, develop any new
                products or protect our interests.{" "}
              </li>
              <li className="list-disc">
                {" "}
                We will not store your personal data on the servers unless we
                need it for any new service that we are planning for you.{" "}
              </li>
            </ul>
            <p className="py-2">
              Following is our privacy policy in accordance with the goals:
            </p>
            <p className="text-xl py-5 font-semibold">1. Visitors</p>
            <p className="">
              Hospitality finders.in also collect information that most web
              browsers and servers collect, like the browser type, language
              preference, referring site, and date and time of visit. The
              purpose of collecting such non-personal identifying information is
              to comprehend how our visitors use the website Hospitality
              Finders.in. At no point shall we divulge this information to any
              other third party.
            </p>
            <p className="text-xl py-5 font-semibold">
              2. Gathering of Personally-Identifying Information
            </p>
            <p className="">
              At times the visitors of our website need to interact with
              Hospitality finders.in in ways that mean we have to store their
              personally-identifying information. The type and quantity of
              information we will gather will depend on how detailed that
              interaction is. Mostly Hospitality Finders.in will collect only as
              much information as is needed to achieve the goal of the person’s
              visit to the website. We will not further disclose this
              information to any other party except in the situations we mention
              below.
            </p>
            <p className="text-xl py-5 font-semibold">
              3. Protection of Certain Personally-Identifying Information
            </p>
            <p className="">
              Hospitality Finders.in will not disclose any
              personally-identifying information to anyone. Any data we share
              will only be if they are asked to respond to a court order or a
              Governmental order. We can also share the information when we feel
              that disclosing the data is required to protect the rights and
              interests of Hospitality Finders.in its customers and employees.
            </p>
            <p className="text-xl py-5 font-semibold">4. Cookies</p>
            <p className="">
              A cookie is an information string that the website stores on the
              user’s computer. Every time the visitor comes back to the website,
              the browser provides that cookie. Hospitality Finders. in also
              uses these cookies to track the visitors to their website, how
              they use Hospitality Finders.in, and how they prefer accessing the
              website.
              <br />
              If a visitor does not want cookies to be placed on the computers,
              he should set the browser such that it refuses cookies before he
              starts using Hospitality Finders.in. He should also know that some
              features of Hospitality Finders.in may not work correctly if
              cookies are not placed.
            </p>
            <p className="text-xl py-5 font-semibold">5. Business Transfers</p>
            <p className="">
              In case Hospitality Finders.in or its assets are acquired by other
              companies, or if the company goes into bankruptcy, the user
              information is also transferred to the other party. If you use our
              website or services, you accept that in case such a transfer
              happens, then the other party which acquires Hospitality Finders.
              in can use the personal data as is mentioned in the policy.
            </p>
            <p className="text-xl py-5 font-semibold">6. Advertising</p>
            <p className="">
              The Advertisements coming on the website could be provided to the
              users by the advertising partners who also set cookies. The
              cookies allow the ad server so they can recognize the computer
              every time they send an online ad to you and get details about you
              or those who are also using the computer. This information allows
              the ad networks to offer you targeted advertisements that they
              think would interest you. This Privacy policy talks about the use
              of cookies by Hospitality Finders.in but not about the use of
              cookies from any advertisers.
            </p>
            <p className="text-xl py-5 font-semibold">
              7. Privacy Policy Changes
            </p>
            <p className="">
              Though most of the changes in the Privacy policy are going to be
              minor, Hospitality Finders.in may implement any changes in its
              privacy policy. As a regular user of Hospitality Finders.in
              request you to check any changes to the Privacy Policy. If you
              continue using the site after the changes, we will consider that
              you accept the change
            </p>
          </div>

          <Footer />
          <WhatsAppLogo />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default PrivacyPolicy;
