import axios from "axios";
import React, { useEffect, useState } from "react";
import CollegeReviewCard from "../CollegeReviewCard/CollegeReviewCard";
import SectionTitle from "../../../Common/SectionTitle";

const ReviewCard = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    axios
      .get("ReviewData.json")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <SectionTitle
          heading="REVIEWS"
          subHeading="HERE IS THE SOME STUDENT REVIEW"
        ></SectionTitle>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1  gap-4 p-4">
        {reviews.map((reviewData) => (
          <CollegeReviewCard reviewData={reviewData} key={reviewData._id} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
