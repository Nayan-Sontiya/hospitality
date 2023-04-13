import React from 'react'
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    row: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
};
function Testimonials() {
    return (
        <div>
            <div className="bg-[#F8B705] px-10 md:py-10  pb-10">
            <p className="text-center text-4xl 3xl:text-xl font-bold py-5 md:py-10">
                    Client / Customer Testimonials
                        </p>
                <Slider {...settings}>
                    <div>

                        <div className="grid justify-items-center py-5">
                            <img src="/images/HomePage/boy-1.webp" className="h-16 w-16 3xl:h-24 3xl:w-24 rounded-full" alt="Tips For Hiring A Great Chef" fetchPriority="high"  />
                        </div>
                        <p className="text-center text-black text-lg 3xl:text-3xl ">Manjeet Brar</p>{" "}
                        <p className="text-center text-sm text-black 3xl:text-2xl">Jallandhar</p>
                        <p className="text-center text-sm text-black px-5 md:px-10 pt-5 3xl:text-2xl">
                            I planned to start a new food joint in Jallandhar city. But there are not many Chinese chefs and other staff in my area. Somebody told me about HospitalityFinder.in, and I bought their basic package. With their help, I had so many options of employees for hire. Now my fast food joint is running successfully. Totally recommended.
                         </p>

                    </div>
                    <div>

                        <div className="grid justify-items-center py-5">
                            <img src="/images/HomePage/girl-1.webp" className="h-16 w-16 3xl:h-24 3xl:w-24  rounded-full" alt="Tips For Hiring A Great Chef" fetchPriority="high"  />
                        </div>
                        <p className="text-center text-black text-lg 3xl:text-3xl">Meghna Agarwal</p>{" "}
                        <p className="text-center text-sm text-black 3xl:text-2xl"> Delhi</p>
                        <p className="text-center text-sm text-black px-10 pt-5 3xl:text-2xl">
                            I started a Pizza franchise with my husband. But soon after launching the staff left the store. We had to run our outlet, so we contacted HospitalityFinder.in. There we found everything from chefs to cash register reps. Within no time, we were back to the normal running of our Pizza joint. Thank you, Hospitalityfinder.in.
                         </p>

                    </div>
                    <div>

                        <div className="grid justify-items-center py-5">
                            <img src="/images/HomePage/boy-2.webp" className="h-16 w-16 3xl:h-24 3xl:w-24  rounded-full" alt="Tips For Hiring A Great Chef" fetchPriority="high"  />
                        </div>
                        <p className="text-center text-black text-lg 3xl:text-3xl">Ritesh Bakshi</p>{" "}
                        <p className="text-center text-sm text-black 3xl:text-2xl">Chennai</p>
                        <p className="text-center text-sm text-black px-10 pt-5 3xl:text-2xl">
                            When I decided to start a hotel in Manali, I was pretty sure we would be successful. However, there were some positions for which I could not get qualified staff. I did not want to compromise on the quality of staff. Somebody told me about HospitalityFinder.in. I searched, and with one package itself, I was able to find all the people that I wanted. Now my hotel runs successfully, and I am pretty happy with the service.
                         </p>

                    </div>

                    <div>

                        <div className="grid justify-items-center py-5">
                            <img src="/images/HomePage/girl-2.webp" className="h-16 w-16 3xl:h-24 3xl:w-24  rounded-full" alt="Tips For Hiring A Great Chef" fetchPriority="high"  />
                        </div>
                        <p className="text-center text-black text-lg 3xl:text-3xl">Priya Malik</p>{" "}
                        <p className="text-center text-sm text-black 3xl:text-2xl">Mumbai</p>
                        <p className="text-center text-sm text-black px-10 pt-5 3xl:text-2xl">
                            My husband was running a burger joint, but we were not getting good returns. People did not like the taste of the food offered. Therefore we had to let the chef go. Then came the job of finding another chef. That’s when we came to know about HospitalityFinder.in. We contacted them and bought a package. Not only did we get a chef but some other people that improved the working of the outlet.
                         </p>

                    </div>
                    <div>

                        <div className="grid justify-items-center py-5">
                            <img src="/images/HomePage/boy-3.webp" className="h-16 w-16 3xl:h-24 3xl:w-24  rounded-full" alt="Tips For Hiring A Great Chef" fetchPriority="high"  />
                        </div>
                        <p className="text-center text-black text-lg 3xl:text-3xl">Rajat Malhotra</p>{" "}
                        <p className="text-center text-sm text-black 3xl:text-2xl">Gurgaon</p>
                        <p className="text-center text-sm text-black px-10 pt-5 3xl:text-2xl">
                            I was already running a food court in a mall when one of the outlets faced a shortage of staff. We were told about HospitalityFinder.in and then we took about the best team for that outlet. Soon that outlet started running with huge profits. I would like to recommend their service to everyone.
                         </p>

                    </div>
                </Slider>
            </div>   </div>
    )
}

export default Testimonials
