import React from "react";
import UseCollegeData from "../../Hooks/UseCollegeData";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges] = UseCollegeData();

  console.log(colleges);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>College Image</th>
            <th>College Name</th>
            <th>College Rating</th>
            <th>Admission Date</th>
            <th> Research</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college, index) => (
            <tr key={college._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={college.collegeImage} alt="College Image" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{college.collegeName}</td>
              <td>{college.rating}</td>
              <td>{college.admissionDate}</td>
              <td>{college.researchCount}</td>
              <td>
                <button className="btn btn-primary">
                  <Link to="/admissionForm"> Admission </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admission;
