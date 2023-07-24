import React from "react";
import { Link } from "react-router-dom";

const AllCollegeData = ({ college }) => {
  return (
    <div>
      <div>
        <a href="#" className="group relative block bg-black">
          <img
            alt="Developer"
            src={college.collegeImage}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm  uppercase tracking-widest font-bold text-pink-500">
              {college.collegeName}
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              ADMISION {college.admissionDate}{" "}
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-20">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white  text-center mb-2">
                  <button className="btn bg-indigo-600 btn-sm">
                    <Link to={`/colleges/${college._id}`}>DETAILS</Link>
                  </button>
                </p>
                <div className="text-white">
                  <h1 className=" font-bold">
                    College Name : {college.collegeName}{" "}
                  </h1>
                  <h1>
                    events {college.events[0]} and{" "}
                    <span>{college.events[1]} </span>{" "}
                  </h1>
                  <h1>Research Count: {college.researchCount} </h1>
                  <h1>
                    Sports Facilities {college.sportsFacilities[0]} and{" "}
                    <span> {college.sportsFacilities[1]} </span>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AllCollegeData;
