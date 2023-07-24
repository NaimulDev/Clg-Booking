import React from "react";
import UseCollegeData from "../../Hooks/UseCollegeData";
import Colleges from "../CollegeCard/Colleges";
import AllCollegeData from "./AllCollegeData";
import SectionTitle from "../../Common/SectionTitle";

const AllCollege = () => {
  const [colleges] = UseCollegeData();
  return (
    <div>
      <div>
        <SectionTitle
          subHeading="CHOOSE AND FIND COLLEGE"
          heading="ALL COLLEGE"
        >
          {" "}
        </SectionTitle>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 mx-auto sm:w-1/2  md:w-[1240px]">
        {colleges.map((college) => (
          <AllCollegeData college={college} key={college._id}></AllCollegeData>
        ))}
      </div>
    </div>
  );
};

export default AllCollege;
