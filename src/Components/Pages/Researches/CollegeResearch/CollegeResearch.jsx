import React from "react";
import { pdf, Document, Page } from "@react-pdf/renderer";
import { FaFilePdf } from "react-icons/fa";

const CollegeResearch = ({ data }) => {
  const handleDownloadPDF = async (title, link) => {
    const doc = (
      <Document>
        <Page>
          <h1>{title}</h1>
          <p>Research paper content goes here...</p>
        </Page>
      </Document>
    );

    const blob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title}.pdf`;
    a.click();
  };

  return (
    <div className="grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-4  container">
      {data.map((college) => (
        <div
          key={college.collegeId}
          className="p-4 border-spacing-4 border-indigo-600 border rounded shadow-lg transition-all hover:shadow-xl"
        >
          <img
            src={college.researchPic}
            alt="Research Pic"
            className="mb-4 object-cover h-40 w-full rounded"
          />
          <h2 className="text-xl font-bold">{college.collegeName}</h2>
          <p className="mb-4">Research Papers:</p>
          <ul className="list-disc ml-6">
            <li>
              <a
                href={college.researchPaper1Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {college.researchPaper1Title}
              </a>{" "}
              -{" "}
              <button
                onClick={() =>
                  handleDownloadPDF(
                    college.researchPaper1Title,
                    college.researchPaper1Link
                  )
                }
                className="text-blue-500 underline"
              >
                Download PDF <FaFilePdf className="inline ml-1" />
              </button>
            </li>
            <li>
              <a
                href={college.researchPaper2Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {college.researchPaper2Title}
              </a>{" "}
              -{" "}
              <button
                onClick={() =>
                  handleDownloadPDF(
                    college.researchPaper2Title,
                    college.researchPaper2Link
                  )
                }
                className="text-blue-500 underline"
              >
                Download PDF <FaFilePdf className="inline ml-1" />
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CollegeResearch;
