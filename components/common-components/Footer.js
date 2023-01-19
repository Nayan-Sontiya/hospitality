import Link from "next/link";
import React from "react";
import Style from "../../styles/common.module.css";

function Footer() {
  return (
    <div className=" bg-[#ffffff] ">
      <div className="grid grid-cols-12 pb-5 content-center">
        <div className="col-span-12 sm:col-span-12 md:col-span-3">
          <div className="grid justify-items-center">
            <Link href="/" passHref>
              <img
                src="/images/logo.png"
                className=" h-14 mt-10 3xl:h-20 ml-6"
                alt="find the best housekeeping staff"
              />
            </Link>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 md:col-span-3 pl-5 sm:pl-0 md:pl-0 mt-10 grid justify-items-center">
          <div>
            <p
              className={
                Style.headerText +
                " text-[#1B1465]  text-xs sm:text-sm md:text-lg  3xl:text-2xl bold uppercase"
              }
            >
              For Employers
            </p>
            <Link href="/about" passHref>
              <button
                className={
                  Style.footerText +
                  " cursor-pointer px-5 px-2 mt-2  text-xs sm:text-sm md:text-lg  3xl:text-xl 3xl:pt-2 uppercase"
                }
              >
                About Us
              </button>
            </Link>
            <br />
            <Link href="/how-to-hire" passHref>
              <button
                className={
                  Style.footerText +
                  " cursor-pointer px-5 px-2 mt-2  text-xs sm:text-sm md:text-lg  3xl:text-xl 3xl:pt-2 uppercase"
                }
              >
                How to Hire
              </button>
            </Link>
            <br />
            <Link href="/how-it-works" passHref>
              <button
                className={
                  Style.footerText +
                  " cursor-pointer px-5 px-2 mt-2  text-xs sm:text-sm md:text-lg  3xl:text-xl 3xl:pt-2 uppercase"
                }
              >
                HOW IT WORKS
              </button>
            </Link>
            <br />
            <Link href="/packs" passHref>
              <button
                className={
                  Style.footerText +
                  " cursor-pointer px-5 px-2 mt-2  text-xs sm:text-sm md:text-lg  v 3xl:text-xl 3xl:pt-2 uppercase"
                }
              >
                Packs
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 md:col-span-3 mt-10 pl-5 sm:pl-0 md:pl-0 grid justify-items-center">
          <div>
            <p
              className={
                Style.headerText +
                " text-[#1B1465]  text-xs sm:text-sm md:text-lg  3xl:text-2xl bold uppercase"
              }
            >
              COMPANY
            </p>

            <Link href="/blogs" passHref>
              <button
                className={
                  Style.footerText +
                  " cursor-pointer px-5 px-2 mt-2  text-xs sm:text-sm md:text-lg  3xl:text-xl 3xl:pt-2 uppercase"
                }
              >
                BLOGS
              </button>
            </Link>
            <br />
            <Link href="/contact-us" passHref>
              <button
                className={
                  Style.footerText +
                  " cursor-pointer px-5 px-2 mt-2  text-xs sm:text-sm md:text-lg  3xl:text-xl 3xl:pt-2 uppercase"
                }
              >
                CONTACT US
              </button>
            </Link>
            <br />
            <Link href="/privacy-policy" passHref>
              <button
                className={
                  Style.footerText +
                  "  cursor-pointer px-5 px-2 mt-2  text-xs sm:text-sm md:text-lg  3xl:text-xl 3xl:pt-2 uppercase"
                }
              >
                Privacy Policy
              </button>
            </Link>
            <br />
            <Link href="/terms-and-condition" passHref>
              <button
                className={
                  Style.footerText +
                  " cursor-pointer px-5 px-2 mt-2  text-xs sm:text-sm md:text-lg  3xl:text-xl 3xl:pt-2 uppercase"
                }
              >
                TERMS &#38; CONDITIONS
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 md:col-span-3 mt-10 pl-5 sm:pl-0 md:pl-0 grid justify-items-center">
          <div>
            <p
              className={
                Style.headerText +
                " text-[#1B1465]  text-xs sm:text-sm md:text-lg  3xl:text-2xl  bold uppercase"
              }
            >
              QUICK TERMS
            </p>
            <Link href="/faq" passHref>
              <button
                className={
                  Style.footerText +
                  "px-5 px-2 cursor-pointer  text-xs sm:text-sm md:text-lg   3xl:text-xl 3xl:pt-2 uppercase"
                }
              >
                FAQ
              </button>
            </Link>
            <p
              className={
                " text-xs sm:text-sm md:text-lg  pt-3 text-[#1b1465] 3xl:text-2xl"
              }
            >
              Connect with us
            </p>
            <div className="flex pt-2">
              <a
                href="https://www.facebook.com/Hospitality-Finder-108350105215206"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/facebook.png"
                  className="w-6 h-6 3xl:w-10 3xl:h-10 mx-2"
                  alt="most talented chefs"
                />
              </a>
              <a
                href="https://www.instagram.com/hospitalityfinders/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/instagram.png"
                  className="w-6 h-6 3xl:w-10 3xl:h-10 ml-2 mx-2"
                  alt="cooks and kitchen Staff"
                />
              </a>
              <a
                href="https://twitter.com/Hospitalityfin"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/twitter.png"
                  className="w-6 h-6 3xl:w-10 3xl:h-10 ml-2 mx-2"
                  alt="Best Chef to make french dishes"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/hospitality-finder-72520a257/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/linkdin.png"
                  className="w-6 h-6 3xl:w-10 3xl:h-10 ml-2 mx-2"
                  alt="Best Chef to make Thai dishes"
                />
              </a>
              <a
                href="https://www.youtube.com/@hospitalityfinder4586/featured"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/youtube.png"
                  className="w-6 h-6 3xl:w-10 3xl:h-10 ml-2 mx-2"
                  alt="Best Chef to make Thai dishes"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
