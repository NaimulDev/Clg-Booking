import React from "react";
import { FaTrash, FaStar, FaEdit } from "react-icons/fa";

const CollegeReviewCard = ({ reviewData }) => {
  const { displayName, photoURL, rating, reviewComment } = reviewData;

  const defaultImage =
    "https://cdn2.vectorstock.com/i/1000x1000/34/96/flat-business-man-user-profile-avatar-in-suit-vector-4333496.jpg";

  const renderStars = (numStars) => {
    return Array.from({ length: numStars }, (_, index) => (
      <FaStar key={index} className="text-yellow-500" />
    ));
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <FaEdit className="inline-block mr-2" /> Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <FaTrash className="inline-block mr-2" /> Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={photoURL || defaultImage}
          alt={`${displayName} image`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          {displayName}
        </h5>
        <span className="text-sm text-gray-500">{reviewData.user}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">{renderStars(rating)}</div>
        <p className="text-gray-600">{reviewComment}</p>
      </div>
    </div>
  );
};

export default CollegeReviewCard;
