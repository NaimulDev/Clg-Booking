import React, { useEffect, useState } from "react";
import axios from "axios";
import CollegeResearch from "./CollegeResearch/CollegeResearch";
import SectionTitle from "../../../Common/SectionTitle";

const Researches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("Researches.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <div>
        <SectionTitle
          heading="RESEARCH"
          subHeading="EXPLORE THE SUME OF RESEARCH COLLEGE"
        ></SectionTitle>
      </div>

      <div className=" md:w-[1240px]  sm:w-full mx-auto mt-8 p-4">
        {data.length > 0 ? <CollegeResearch data={data} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Researches;
