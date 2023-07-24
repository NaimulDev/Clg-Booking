import React from "react";
import { FaCar, FaShower, FaBed } from "react-icons/fa";

const Details = ({ data }) => {
  const {
    collegeName,
    admissionDate,
    researchHistory,
    events,
    sportsFacilities,
    rating,
    researchCount,
    collegeImage,
  } = data;

  return (
    <a
      href="#"
      className="block h-11/12 w-1/2 container mx-auto rounded-lg p-4 shadow-sm shadow-indigo-700 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-indigo-600 opacity-30 z-10"></div>
      <img
        alt={collegeName}
        src={collegeImage}
        className="w-full mx-auto rounded-md object-cover"
      />

      <div className="relative z-20 mt-2">
        <dl>
          <div>
            <dt className="sr-only">College Name</dt>
            <dd className="text-blue-700 text-2xl font-bold">{collegeName}</dd>
          </div>

          <div>
            <dt className="sr-only">Admission Date</dt>
            <dd className="text-white mt-2">Admission Date: {admissionDate}</dd>
          </div>

          <div>
            <dt className="sr-only">Research History</dt>
            <dd className="text-white mt-2">{researchHistory}</dd>
          </div>

          <div>
            <dt className="sr-only">Events</dt>
            <dd className="text-white mt-2">
              Events:{" "}
              {events.map((event, index) => (
                <span key={index}>
                  {event}
                  {index !== events.length - 1 && ", "}
                </span>
              ))}
            </dd>
          </div>

          <div>
            <dt className="sr-only">Sports Facilities</dt>
            <dd className="text-white mt-2">
              Sports Facilities:{" "}
              {sportsFacilities.map((facility, index) => (
                <span key={index}>
                  {facility === "Parking" && (
                    <>
                      <FaCar className="inline-block mr-1" />
                      {facility}
                    </>
                  )}
                  {facility === "Bathroom" && (
                    <>
                      <FaShower className="inline-block mr-1" />
                      {facility}
                    </>
                  )}
                  {facility === "Bedroom" && (
                    <>
                      <FaBed className="inline-block mr-1" />
                      {facility}
                    </>
                  )}
                  {index !== sportsFacilities.length - 1 && ", "}
                </span>
              ))}
            </dd>
          </div>

          <div>
            <dt className="sr-only">Rating</dt>
            <dd className="text-white mt-2">Rating: {rating}</dd>
          </div>

          <div>
            <dt className="sr-only">Research Count</dt>
            <dd className="text-white mt-2">Research Count: {researchCount}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          {/* Your other content here */}
        </div>
      </div>
    </a>
  );
};

export default Details;
