import React, { useState } from "react";
import UseCollegeData from "../../Hooks/UseCollegeData";
import Colleges from "./Colleges";

const CollegeCard = () => {
  const [colleges] = UseCollegeData();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredColleges = colleges.filter((college) =>
    college.collegeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Display only the first three filtered colleges
  const displayColleges = filteredColleges.slice(0, 3);

  return (
    <div>
      <div className="w-1/2 mx-auto mb-5">
        <div className="text-center">
          <h1 className="font-bold text-3xl font-serif">
            {" "}
            <span className="text-red-600"> FIND</span> YOUR{" "}
            <span className="text-indigo-500">COLLOGE</span>{" "}
          </h1>
        </div>
        <div className="relative bg-indigo-600 p-1 rounded-lg">
          <input
            type="text"
            placeholder="Search college by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
          <div className="absolute inset-0 border rounded-lg pointer-events-none"></div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 mx-auto sm:w-1/2  md:w-[1240px]">
        {displayColleges.length > 0 ? (
          displayColleges.map((college) => (
            <Colleges college={college} key={college._id}></Colleges>
          ))
        ) : (
          <p>No colleges found.</p>
        )}
      </div>
    </div>
  );
};

export default CollegeCard;
