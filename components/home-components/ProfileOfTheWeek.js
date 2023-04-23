import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { GetRequest } from "../helpers/ApiHelper";
import Profile from "./Profile";

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  row: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
function ProfileOfTheWeek() {
  const [data, setData] = useState([]);
  async function fetchPosts() {
    let res = await GetRequest("getAllActivatePerformanceCandidate/");
    if (res.status === 200) {
      setData(res.data.reverse());
    } else {
      setData([]);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  if (!data || !data?.length) {
    return null;
  }
  return (
    <div>
      <div className="bg-[#1B1465] px-10 md:py-10 pb-10">
        <p className="text-center text-white text-4xl 3xl:text-xl font-bold py-5 md:py-10">
          Profile Of The Week
        </p>
        <div
          style={{
            position: "relative",
          }}
        >
          <Slider {...settings}>
            {data.map((d, index) => (
              <Profile data={d} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ProfileOfTheWeek;
