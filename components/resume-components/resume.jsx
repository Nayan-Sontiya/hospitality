import React from 'react';
import { multipleMediaIdentifier } from './../helpers/HelperFunctions';
import { awsUrl } from './../helpers/ApiHelper';
const resume = ({ data }) => {
    return (
        <div className=" md:px-8 sm:px-5">
            <p className="text-center text-3xl mb-5 font-bold"> Curriculum vitae</p>
            <div className="grid grid-cols-12 pt-2 px-8">
                <div className="col-span-12 md:col-span-6 px-8 lg: order-last lg:order-first ">
                    <p className="font-semibold font-inter">
                        {data.name_of_candidate }
                        <br />
                        {data.contactno1}
                    </p>
                    <p className="text-[#1B1465] font-semibold">{data.email_address}</p>
                    <p className="pt-2 text-[#1B1465] font-semibold font-inter">
                        Expected salary
            </p>
                    <p className=" font-semibold font-inter">
                        {data.salary_expectation}/month
            </p>

                    <p className="pt-2 text-[#1B1465] font-semibold font-inter">
                        Category
            </p>
                    <p className=" font-semibold font-inter">{data.category}</p>

                    <p className="pt-2 text-[#1B1465] font-semibold font-inter">
                        Languages
            </p>
                    <p className=" font-semibold font-inter">{data.languages}</p>
                    <p className=" pt-2 text-[#1B1465] font-semibold font-inter">
                        Education{" "}
                    </p>
                    <p className=" font-semibold font-inter ">{data.education}</p>
                    <p className="pt-2 text-[#1B1465] font-semibold font-inter">
                        Chef Type
            </p>
                    <p className=" font-semibold font-inter">{data.chef_type}</p>
                    

                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-6 px-8">
                    <img
                        src={awsUrl + data.photo_of_candidate}
                        alt="CandidateProfile"
                        className="w-[200px] h-[150px] ojbect-contain sm:m-0  md:ml-auto "
                    />
                </div>
            </div>
            <div className="px-8">
                <p
                    className=" text-[#1B1465]
   text-[24px] 3xl:text-[36px] py-5 px-8"
                >
                    Objective
          </p>

                <ul className="px-8 3xl:text-2xl">
                    <li className="list-disc">
                        {data.objective !== "" ? data.objective : "NA"}
                    </li>
                    <p
                        className=" text-[#1B1465]
             text-[24px] 3xl:text-[36px]  py-5"
                    >
                        Work Experience
            </p>
                    {data.length !== 0
                        ? data.experiences.map((exp, i) => {
                            return (
                                <li className="list-disc" key={i}>
                                    Worked in {exp.expOutletName},{exp.expCity} as a{" "}
                                    {exp.expDesignation} from {exp.expStartDate} to{" "}
                                    {exp.expEndDate}.
                                </li>
                            );
                        })
                        : ""}
                </ul>
            </div>

            <div className="md:px-8">
                <p
                    className=" text-[#1B1465]
             md:text-[24px] 3xl:text-[36px] py-5 pl-6 "
                >
                    Personal Details
          </p>

                <div className="grid grid-cols-12 px-8">
                    <li className="list-disc col-span-6 font-semibold">Father Name</li>
                    <p className="col-span-6 font-semibold">
                        : &nbsp;&nbsp;{data.father_name}
                    </p>
                    <li className="list-disc col-span-6 font-semibold">Gender</li>
                    <p className="col-span-6 font-semibold">
                        : &nbsp;&nbsp;{data.gender}
                    </p>
                    <li className="list-disc col-span-6 font-semibold">
                        Marital status
            </li>
                    <p className="col-span-6 font-semibold">
                        : &nbsp;&nbsp;{data.marital_status}
                    </p>
                    <li className="list-disc col-span-6 font-semibold">
                        Relative Contact
            </li>
                    <p className="col-span-6 font-semibold">
                        : &nbsp;&nbsp;{data.relative_contact_no}
                    </p>
                    <li className="list-disc col-span-6 font-semibold">
                        Permanent Address
            </li>
                    <p className="col-span-6 font-semibold">
                        : &nbsp;&nbsp;{data.permanent_address}
                    </p>
                </div>

                <div className="grid grid-cols-1 pt-2 sm:pt-5 md:pt-10 px-5 md:px-10">
                    <p className="text-[32px] 3xl:text-[40px] text-center">
                        Dish Images
            </p>
                    <div className="grid grid-cols-12 lg:col-span-12 sm:col-span-6 md:py-8 ">
                        {data.dish !== undefined
                            ? multipleMediaIdentifier(data.dish).map((val, i) => {
                                return (
                                    <div className="col-span-2 px-2" key={i}>
                                        {" "}
                                        <img
                                            src={awsUrl + val.media}
                                            className="md: h-35 sm:h-45 md:w-full object-cover rounded"
                                        />
                                    </div>
                                );
                            })
                            : ""}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default resume;