// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import slide1 from "../../assets/images/SectionThree/preview-simply-bookingpage.png";
import slide2 from "../../assets/images/SectionThree/preview-simply-linebot.png";
import slide3 from "../../assets/images/SectionThree/preview-simply-widget.png";
import slide4 from "../../assets/images/SectionThree/preview-simplyinstagram.png";
import slide5 from "../../assets/images/SectionThree/preview-simplyinstagram.png";
import slide6 from "../../assets/images/SectionThree/preview-simplyinstagram.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const images = [slide1, slide2, slide3, slide4, slide5, slide6];

const SectionThree = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleIconClick = (index) => {
    setCurrentSlide(index);
  };

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#253246] py-14 text-center text-white px-6 md:px-10 lg:px-20">
      <h1 className="font-bold text-2xl">
        Do you want <span className="text-cyan-700">more bookings?</span>
      </h1>
      <h4 className="font-bold">Accept bookings from multiple channels</h4>
      <div className="flex flex-col md:flex-row md:mt-6 items-center">
        <div>
          <img src={images[currentSlide]} alt="" className="w-full md:w-2/3" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
          {images.map((image, index) => (
            <IconWithText
              key={index}
              icon={index < 3 ? <FaFacebookF className="text-4xl" /> : <FaInstagram className="text-4xl" />}
              text={index < 3 ? "Facebook" : "Instagram"}
              onClick={() => handleIconClick(index)}
              isActive={currentSlide === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const IconWithText = ({ icon, text, onClick, isActive }) => {
  const iconClassName = isActive
    ? "bg-black text-white hover:bg-black"
    : "text-gray-200 hover:text-white";

  return (
    <div
      className={`cursor-pointer py-6 px-8 rounded-2xl space-y-3 ${iconClassName} flex flex-col items-center`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <h2 className="text-white">{text}</h2>
    </div>
  );
};

export default SectionThree;
