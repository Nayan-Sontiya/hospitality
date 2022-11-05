import React from "react";
import Footer from "../components/common-components/Footer";
import Header from "../components/common-components/Header";
import Head from "next/head";

function about() {
  const Profiles = [
    "Online professional chef",
    "Receptionist",
    "Bartender",
    "Housekeeper",
    "Room attendant",
    "Front desk agent",
    "Sales Manager",
    "Reservation executive",
    "Electrician",
    "F & B manager",
    "Lobby manager",
    "Manager-Legal",
    "Manager-Accounts",
    "Business development manager",
    "Doorman",
    "Hotel security",
    "Event staff",
    "Dish cleaning staff",
  ];
  return (
    <div>
      <Head>
        <title>
          Hospitality Finder | Looking for qualified and experienced chefs
        </title>
        <meta
          name="description"
          content="Hospitality Finder | If you are looking for qualified and experienced chefs, finding a personal chef, grill masters, line cooks, prep cooks, baker and so many more, choose us."
        />
        <meta
          name="Keywords"
          content="best place to hire chefs,
          Best place to work as a chefs,
          looking for qualifies and experienced chefs,
          Find chefs for my restaurant,
          Hire the best Chef Experts,
          finding a perosnal chef,
          Hiring chefs for restaurant,
          What to look for when hiring a chef,
          Find best Chefs,
          Hire Cook,
          Hire a Chef,
          How do I pick a Chef,
          Oriental chefs,
          How to Hire a Chef,
          Where to hire Cooks,
          Best Places to Find Chefs,
          Cooks near me,
          Chef Recruiter,
          Home Chefs,
          Domestic chefs and cooks,
          How can I hire a cook for my new restaurant,
          Best agency for Chefs,
          Best Home Chefs,
          Halwai,
          hiring a professional chef,
          Domestic cooks,
          India's Best Chef,
          Where to find Chefs,
          Where to find kitchen workers,
          List of Indian chefs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (
        <>
          <Header PageName="about" />
          <>
            <img
              src="/images/about-banner.png"
              className="w-full lg:h-[600px] 3xl:h-[900px] object-cover"
              alt="looking for qualifies and experienced chefs"
            />
            <p className="text-[24px] xs:text-[32px] xs:px-5 py-5 text-center 3xl:text-[42px]">
              {" "}
              Find your new hospitality team with us
            </p>
            <p className="px-5 md:px-10 3xl:text-2xl">
              Hospitality Finder is a unique concept that will help you
              establish your hospitality business easily. We are a recruitment
              agency which offers you the one-stop place for all the resources
              like <b>North Indian Chef</b> that you require.
              <br /> A new hotel/restaurant requires a hardworking and
              experienced employee base to sustain the beginning few months.
              However, looking for such a talented bunch is a headache with
              already so much to deal with.
            </p>
            <p className="px-5 md:px-10 py-5 3xl:text-2xl">
              That is where hospitality finder comes to your help. We offer you
              the following profiles making the process of recruitment simple.
            </p>

            <div className="px-1 sm:px-3 md:px-10">
              <div className="grid grid-cols-12">
                {Profiles.map((items, i) => {
                  return (
                    <div
                      className="col-span-12 xs:col-span-6 sm:col-span-4 lg:col-span-3 3xl:col-span-2 bg-[#1b1465] px-5 py-3 mx-2 my-3 rounded transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-[#5b4bfa] duration-300"
                      key={i}
                    >
                      <p className="text-[#ffffff] text-center text-xs xs:text-lg 3xl:text-xl">{items}</p>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-12 pt-2 sm:pt-5 md:pt-10">
                <div className="col-span-12 sm:col-span-12 lg:col-span-6 px-5">
                  <p className="py-5 md:pr-10 3xl:text-2xl">
                    At one location, you will get details of professionals in
                    these profiles. You can search from our database and take
                    your pick from the options available. If you are
                    <b> looking for a chef,</b> remember that all the staff we
                    provide are reputed and have their background checks in
                    place.
                  </p>{" "}
                  <p className="py-5 md:pr-10 3xl:text-2xl">
                    You get to choose from the massive variety of candidates
                    available. Having an experienced owner at its help
                    hospitality finder would cover all your recruitment queries.
                    We are always available and can help and guide you in
                    establishing your hospitality business too.
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-12 lg:col-span-6">
                  <img
                    src="/images/about-hotel.png"
                    alt="Best place to work as a chefs"
                    className="w-full md:h-[400px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  />
                </div>
              </div>
              <div className="px-5">
              <p className="text-[32px] 3xl:text-[42px] py-5 text-center">Our features</p>
              <p className="3xl:text-2xl">
                Before we explain to you the process of working with us, have a
                look at our features:
              </p>
              <ul className="pl-5 3xl:text-2xl">
                <li className="list-disc">
                  Extremely high-quality workforce with all the checks done
                </li>
                <li className="list-disc">
                  High-class management solutions to act as a booster for the
                  success of your business
                </li>
                <li className="list-disc">
                  Match the suitable candidates based on their niche and
                  strengths
                </li>
                <li className="list-disc">
                  Leverage the best candidates from the existing pool{" "}
                </li>
                <li className="list-disc">
                  Having engaging discussions with both clients and candidates
                  to understand the needs of each
                </li>
                <li className="list-disc">
                  Procuring employees from other industries and helping them
                  train with the required expertise
                </li>
                <li className="list-disc">
                  Shifting the staff to areas where such experienced staff are
                  less
                </li>
                <li className="list-disc">
                  Flexible in meeting the client&apos;s expectations of{" "}
                  <b>Oriental Chefs</b>
                </li>
                <li className="list-disc">
                  Finding out which job opportunities get maximum takers and
                  thus arranging candidates as per the demand.
                </li>
              </ul>
              <p className="py-2 3xl:text-2xl">
                So what are you waiting for? If you have to set your hotel up,
                you cannot wait. Trust your recruitment work with us and relax
                as we find the best candidates for you.
              </p>{" "}
              <p className="py-2 3xl:text-2xl">
                You can hire <b>Qualified and experienced Chefs</b> as per the
                cuisine you want. Just sign up for our service, and we promise
                we will lift all your recruitment workload from you.
              </p>
              </div>
              </div>
          </>
          <Footer />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default about;
