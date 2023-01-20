import React from "react";
import Footer from "../../components/common-components/Footer";
import Header from "../../components/common-components/Header";
import Head from "next/head";
import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppLogo from "../../components/common-components/WhatsApp";
function Blogs() {
  const BlogContent = [
    {
      id: 1,
      img: "/images/five-star-hotel.jpg",

      subHeading:
        "Things you must keep in mind while hiring a professional chef.",
      link: "things-you-must-keep-in-mind-while-hiring",
    },
    {
      id: 2,
      img: "/images/service-restaurant.jpg",

      subHeading:
        "5 Tips you could use to make your professional hospitality staff productive",
      link: "five-tips-you-could-use-to-make-your-professional-hospitality-staff-productive",
    },
    {
      id: 3,
      img: "/images/hotel-staff.jpg",

      subHeading:
        "Strategies to use to find experienced hospitality staff for hire",
      link: "strategies-to-use-to-find-experienced-hospitality-staff-for-hire",
    },
    {
      id: 4,
      img: "/images/chinesfood.jpg",
      subHeading:
        "Best place to find Chinese Chef",
      link: "best-place-to-find-chinese-chef",
    },
  ];
  return (
    <div>
      <Head>
        <title>
          Hospitality Finder | Find best hospitality staff for hotel and home
          parties.
        </title>
        <meta
          name="description"
          content="Find best hospitality staff for hotel and home parties with Hospitality Finder hospitality staff selection website. We are a hospitality staffing agency that helps employers to find and hire hospitality employees for hotels in the world."
        />
        <meta
          name="Keywords"
          content="Find best hospitality staff for hotel and home parties ,
          hospitality staff selection website,
          website for hospitality staff selection,
          online professional chefs for home parties,
          captains for home parties,
          housekeepers for home parties,
          utility staff for home parties,
          receptionists for home parties,
          waiters for home parties,
          stewards for home parties,
          Bartenders for home parties,
          security staff for home parties,
          cooks for home parties,
          chefs for home parties,
          managers for home parties,
          hiring a full time housekeeper,
          hiring a part time housekeeper,
          hospitality staffing agency,
          juggler for home parties,
          bartending helper for home parties,
          full time housekeeper for hire,
          part time housekeeper for hire,
          hostess for home parties,
          private bartender for hire,
          looking for housekeepers,
          looking for electricians,
          electrician for home parties,
          F	&#38; B manager for home parties,
          legal manager for home parties,
          event management staff for home parties"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.browser ? (
        <>
          <Header PageName="blog" />
          <div>
            <div className="relative">
              <img
                src="/images/blog-banner.jpg"
                alt="How to find good Chef near me"
                className="w-full"
              />

              <p className="text-2xl md:text-4xl lg:text-[50px] 3xl:text-5xl text-white font-bold py-5 text-center verticle-center">
                Blogs
              </p>
            </div>
          </div>
          <div className="w-full p-0 m-0">

            <div className=" sm:px-10 pt-10">
              <div className="grid grid-cols-12">
                {BlogContent.map((item, i) => {
                  return (
                    <div
                      className="col-span-12 sm:col-span-6 lg:col-span-4 3xl:col-span-3 border m-3"
                      key={i}
                    >
                      <img
                        src={item.img}
                        alt="Hire Chefs online"
                        className="w-full h-48"
                      />
                      <div className="h-40">
                        <div className="h-28">
                          <p className="pt-3 pl-2 text-sm md:text-lg font-semibold 3xl:text-2xl">
                            {item.subHeading}
                          </p>
                        </div>
                        <div className="text-right mr-2">
                          <Link href={`/blogs/${item.link}`} passHref>
                            <button className="py-1  px-3 text-center 3xl:text-xl border border-[#1B1465] text-[#1B1465] uppercase rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ffffff] duration-300">
                              View more
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Footer />{" "}
        </>
      ) : (
        ""
      )}
     <WhatsAppLogo />
    </div>
  );
}

export default Blogs;
