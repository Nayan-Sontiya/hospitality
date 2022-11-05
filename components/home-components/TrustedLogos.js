import React from 'react'
import Slider from "react-slick";

function TrustedLogos({ settings }) {

  const Logos = [
    {
      id: "1",
      img: "",
      altTag: ""
    },
    {
      id: "2",
      img: "",
      altTag: ""
    },
    {
      id: "3",
      img: "",
      altTag: ""
    },
    {
      id: "4",
      img: "",
      altTag: ""
    },
    {
      id: "5",
      img: "",
      altTag: ""
    },
    {
      id: "6",
      img: "",
      altTag: ""
    },
    {
      id: "7",
      img: "",
      altTag: ""
    },
    {
      id: "8",
      img: "",
      altTag: ""
    },
    {
      id: "9",
      img: "",
      altTag: ""
    },
    {
      id: "10",
      img: "",
      altTag: ""
    },
    {
      id: "11",
      img: "",
      altTag: ""
    },
    {
      id: "12",
      img: "",
      altTag: ""
    },
    {
      id: "13",
      img: "",
      altTag: ""
    },
    {
      id: "14",
      img: "",
      altTag: ""
    },
  ]
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/radisson.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>
        <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/bosch.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>
        <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/cadila.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>
        <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/liberty.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>
        <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/manish.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>
        <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/siemens.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>
        <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/videocon.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>
        <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/au.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>   <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/chai.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>   <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/entertaintment.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>   <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/faases.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>   <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/manikarnika.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>   <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/nyk.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>   <div>
          <div className="grid justify-items-center m-2 p-2 border">
            <img src="/images/HomePage/pharmalab.webp" className="h-12 3xl:h-24" alt="Online professional chef" fetchPriority="high" />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default TrustedLogos
