import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Common/SectionTitle";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Add your logic to handle form submission here
    // 'data' contains all the form values
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        heading="Admission From"
        subHeading="Submit Your Form For Admission"
      ></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 w-1/2 mx-auto mt-28 bg-white rounded-lg shadow-md border border-gray-200 transition-transform hover:scale-100"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Candidate Name
          </label>
          <input
            type="text"
            {...register("candidateName", {
              required: "Candidate Name is required",
            })}
            className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.candidateName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.candidateName.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            {...register("subject", { required: "Subject is required" })}
            className="mt-1 block w-full border border-green-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Candidate Email
          </label>
          <input
            type="email"
            {...register("candidateEmail", {
              required: "Candidate Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="mt-1 block w-full border border-red-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.candidateEmail && (
            <p className="text-red-500 text-sm mt-1">
              {errors.candidateEmail.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Candidate Phone
          </label>
          <input
            type="text"
            {...register("candidatePhone", {
              required: "Candidate Phone is required",
            })}
            className="mt-1 block w-full border border-yellow-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.candidatePhone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.candidatePhone.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            className="mt-1 block w-full border border-purple-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dateOfBirth", {
              required: "Date of Birth is required",
            })}
            className="mt-1 block w-full border border-pink-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dateOfBirth.message}
            </p>
          )}
        </div>
        {/* Add the Image field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
            className="mt-1 block w-full border border-teal-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Submit Admission
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
