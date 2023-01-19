import React from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
// import Style from "../styles/globals.css";
import Head from "next/head";
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppIcon from '../public/images/wapp.png'
import WhatsAppLogo from "../components/common-components/WhatsApp";

function WhyChooseUS() {
  return (
    <div>
      <Head>
        <title>
          Hospitality Finder | Best website to find hospitality staff
        </title>
        <meta
          name="description"
          content="Hospitality Finder is the best website to find hospitality staff, search and hire best continental chef, best Chinese chef, best north Indian chef, top Spanish chefs, best oriental chefs, best Japanese chef, best Italian chef, best French chef, etc."
        />
         <meta name="google-site-verification" content="CF__90Zfvbb28X_oOxUD5HIzBkNnNtP-SHP3RjPvYOM" />
        <meta
          name="Keywords"
          content="Best website to find hospitality staff,
          North Indian chef,
          best continental chef,
          best Chinese chef,
          hiring chef to cook Chinese dish,
          best north Indian chef,
          top Spanish chefs,
          best oriental chefs,
          little chef Chinese,
          continental cooks,
          Top chefs from Jaipur,
          Chefs at home,
          Hire chef for bakery,
          Chef required for bakery,
          Need chef for bakery,
          continental cook,
          Chinese cook,
          Chefs employment,
          North Indian cook near me,
          Indian chaat near me,
          Chaat wala near me,
          hiring waiters,
          hiring a cook,
          hiring a chef,
          hiring online professional chefs,
          hiring a manager,
          hiring housekeepers,
          hiring utility staff,
          hiring cooks,
          hiring chefs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (<>
        <Header PageName="whyChooseUs" />
        <div className="bgImage">
          <p className="text-center pt-20 sm:pt-28  md:pt-48 text-[#ffffff] font-bold text-xl sm:text-2xl md:text-4xl lg:text-[50px] 3xl:text-5xl">
            WHY CHOOSE US
        </p>
        </div>
        <div className="grid grid-cols-12 pt-2 sm:pt-5 md:pt-10 md:py-10 px-5  md:px-10">
          <div className="col-span-12 sm:col-span-12 md:col-span-6">
            <p className="py-5 md:pr-10 3xl:text-2xl">
              Setting up any business is a tough cookie to crack. But when we
              asked people who wanted to start their own hotel, they told us their
              biggest worry.
          </p>{" "}
            <p className="md:pr-10 3xl:text-2xl">
              They told us that the competition in the market is very tough. Other
              market players take the few available resources. They are unable to
            find the<b> Master chefs</b> for their hotels.
          </p>
            <p className="py-5 md:pr-10 3xl:text-2xl">
              This let us to think about this great problem existing. Our idea of
              Hospitality finder.com came out of this issue. We decided that the
              hospitality recruitment market needs a total change. Our next step
              was to find out people matching the skills usually in demand in the
              hospitality industry.
          </p>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-6">
            <img
              src="/images/about-team.png"
              alt="Hiring chefs for restaurant"
              className="w-full rounded md:h-[400px] 3xl:h-[500px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </div>
        </div>
        <div className="bgCenterImage">
          <div className="w-full ">
            <div className="w-1/2"></div>
            <div className="w-full md:w-1/2 float-right p-2 md:p-5 pl-5 md:pl-16">
              <p className="py-1 md:py-5 md:pr-10 text-[#ffffff] 3xl:text-2xl">
                This let us to think about this great problem existing. Our idea
                of Hospitality finder.com came out of this issue. We decided that
                the hospitality recruitment market needs a total change. Our next
                step was to find out people matching the skills usually in demand
                in the hospitality industry.
            </p>
              <ul className="pl-3 md:pl-6 text-[#ffffff] 3xl:text-2xl">
                <li className="list-disc">Reception and office</li>
                <li className="list-disc">Back end operations</li>
                <li className="list-disc">Food and Beverage</li>
                <li className="list-disc">Bar staff</li>
                <li className="list-disc">Event management </li>
                <li className="list-disc">Legal</li>
                <li className="list-disc">Reservations desk</li>
                <li className="list-disc">Designing and content</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-5 md:px-10 3xl:px-20  bg-gradient-to-t from-[#ffffff] to-[#1b1465]">
          <p className="text-[#ffffff] pt-10 3xl:text-2xl">
            Now you can search the entire database and pick up the candidates that
            match the profile you want. We can help you sort out your detailed
            employee base with just one click. Our guidance will let you set up
            your hospitality brand in no time. Have a look at some of the reasons
            why you must choose us:
        </p>
          <div className="w-full pt-2 sm:pt-5 md:pt-10 px-5  lg:px-10 flex flex-wrap-reverse md:flex-wrap">
            <div className="w-full md:w-1/2">
              <p className="md:p-5 lg:p-10 text-[#ffffff] font-semibold 3xl:text-3xl text-center">Extensive database</p>
              <p className="p-5 lg:p-10 text-[#ffffff] 3xl:text-2xl">
                At Hospitality finder.com, you will
                find multiple candidates for the same profile. You can sort these
                profiles based on area, experience, and expected pay package. This
                will make your search process of home chefs much easy.
            </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/expensive.png"
                alt="Find best Chefs"
                className="w-full rounded-xl md:h-[280px] 3xl:h-[450px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 pt-2 sm:pt-5 md:pt-10 px-5  lg:px-10">
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <img
                src="/images/interface.png"
                alt="How do I pick a Chef"
                className="w-full rounded-xl md:h-[280px] 3xl:h-[450px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <p className="md:p-5 lg:p-10 text-[#ffffff] font-semibold 3xl:text-3xl text-center">Simple interface</p>

              <p className="p-5 lg:p-10 text-[#ffffff] 3xl:text-2xl">
                Our website is relatively easy to
                understand and use. You just have to select one among the packages
                available. Then you can start searching from the database of
              candidates available like <b>Famous French Chefs</b> . If there is
              someone who suits your profile, just contact them. We are always
              there to help you out if there is any difficulty.
            </p>
            </div>
          </div>
          <div className="w-full pt-2 sm:pt-5 md:pt-10 px-5  lg:px-10 flex flex-wrap-reverse md:flex-wrap">
            <div className="w-full md:w-1/2">
              <p className="md:p-5 lg:p-10 font-semibold 3xl:text-3xl text-center">Multiple packages</p>

              <p className="p-5 lg:p-10 3xl:text-2xl">
                We offer you numerous packages, and each
                comes with a different resume count. You can choose any of the
                packages basis the budget. Once you are done, you are free to
                search the resumes and pick up the cream of the lot.
            </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/multiple-package.jpg"
                alt="Oriental chefs"
                className="w-full rounded-xl md:h-[280px] 3xl:h-[450px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 pt-2 sm:pt-5 md:pt-10 px-5  lg:px-10">
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <img
                src="/images/customer.jpg"
                alt="How to Hire a Chef"
                className="w-full rounded-xl md:h-[280px] 3xl:h-[450px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <p className="md:p-5 lg:p-10 font-semibold 3xl:text-3xl text-center"> Customer support</p>

              <p className="p-5 lg:p-10 3xl:text-2xl">
                At any point, if you are confused about
                the system, you contact our customer service reps. They will help
                you out and guide you in finding the solution to your problem.
              They will help you <b>hire a personal chef.</b>
              </p>
            </div>
          </div>
          <div className="w-full pt-2 sm:pt-5 md:pt-10 px-5  lg:px-10 flex flex-wrap-reverse md:flex-wrap">
            <div className="w-full md:w-1/2">
              <p className="md:p-5 lg:p-10 font-semibold 3xl:text-3xl text-center">Experienced and trustworthy candidates</p>

              <p className="p-5 lg:p-10 3xl:text-2xl">
                Obviously, we
                cannot offer you anything less than the best. Our candidates are
                all well versed in their job. They are experienced, and you can
                trust them with any responsibility. They will not let you down in
                terms of their work.
              <br />
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/exp-chef.jpg"
                alt="Where to hire Cooks"
                className="w-full rounded-xl md:h-[280px] 3xl:h-[450px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>
          <p className="text-xl p-5 md:p-10 font-semibold text-[#666666] text-center 3xl:text-2xl">
            {" "}
          If you need good quality and qualified candidates for your new hotel,
          you are at the right place. Tell us what you are looking for like{" "}
            <b>chef near me</b>, and let us help you. Use the contact form or book
          a package and start right away.
        </p>
        </div>
        <Footer />
      </>) : ""}
      <WhatsAppLogo />
    </div>
  );
}

export default WhyChooseUS;
