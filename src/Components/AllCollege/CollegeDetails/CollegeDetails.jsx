import React from "react";
import { useLoaderData } from "react-router";
import { FaParking, FaBath, FaBed } from "react-icons/fa";
import Details from "./Details";

const CollegeDetails = () => {
  const detailsData = useLoaderData();

  return (
    <div>
      {detailsData.map((data) => (
        <Details data={data} key={data._id}>
          {" "}
        </Details>
      ))}
    </div>
  );
};

export default CollegeDetails;
