import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Banner.css";
import { FaDiscourse, FaGraduationCap, FaHome, FaSchool } from "react-icons/fa";

const images = [
  "https://www.juneauempire.com/wp-content/uploads/2023/05/32641077_web1_Grad2lead.jpg",
  "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?cs=srgb&dl=pexels-pixabay-267885.jpg&fm=jpg",
];

const BannerCarousel = () => {
  const [loaded, setLoaded] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [sliderRef] = useKeenSlider({
    animationEnded(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
    initial: 0,
    autoplay: true, // Enable auto slide
    interval: 3000, // Set the duration between slides (in milliseconds)
  });

  React.useEffect(() => {
    const newLoaded = [...loaded];
    newLoaded[currentSlide] = true;
    setLoaded(newLoaded);
  }, [currentSlide]);

  return (
    <div ref={sliderRef} className="keen-slider relative h-[800px] ">
      {images.map((src, idx) => (
        <div key={idx} className="keen-slider__slide lazy__slide">
          <img
            className=""
            src={
              loaded[idx]
                ? src
                : "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?cs=srgb&dl=pexels-pixabay-267885.jpg&fm=jpg"
            }
            alt={`Slide ${idx + 1}`}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black opacity-75"></div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-extrabold font-serif textin text-white mb-10">
              WELCOME TO OUR{" "}
              <span className="text-cyan-400">
                {" "}
                <br />
                EDUCATION <br /> <span className="text-blue-700">
                  MASTER
                </span>{" "}
              </span>
            </h1>
            <p className="text-lg text-white mb-6">
              A campus is by tradition the land on which a <br /> college or
              university and related institutional <br />
              buildings are situated.
            </p>
            <div className="flex items-center justify-center mb-10">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 mr-2 border rounded"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded">
                Search
              </button>
            </div>
          </div>

          {/* Avatars */}
          <div className="absolute bottom-8 left-1/2 my-3 mx-4 transform -translate-x-1/2 flex space-x-6">
            <div className="w-24 h-14 rounded-full hover:ring-white ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden flex items-center justify-center">
              <span className="text-white text-2xl font-bold hover:text-indigo-500">
                <FaHome></FaHome>{" "}
              </span>
            </div>
            <div className="w-24 h-14 rounded-full ring ring-primary ring-offset-base-100 hover:ring-white ring-offset-2 overflow-hidden flex items-center justify-center">
              <span className="text-white text-2xl hover:text-indigo-500 font-bold">
                <FaGraduationCap></FaGraduationCap>{" "}
              </span>
            </div>
            <div className="w-24 h-14 hover:ring-white rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden flex items-center justify-center">
              <span className="text-white  hover:ring-white  hover:text-indigo-500 text-2xl font-bold">
                <FaDiscourse></FaDiscourse>{" "}
              </span>
            </div>
            <div className="w-24 h-14 rounded-full ring ring-primary hover:text-indigo-400 hover:text  hover:ring-white ring-offset-base-100 ring-offset-2 overflow-hidden flex items-center justify-center">
              <span className="text-white hover:text-indigo-500 text-2xl font-bold">
                <FaSchool></FaSchool>{" "}
              </span>
            </div>
          </div>
          <div className="absolute bottom-0  mb-28 left-1/2 transform -translate-x-1/2 flex space-x-8">
            <p className="text-white font-bold">ACADEMY</p>
            <p className="text-white font-bold">ADMISSION</p>
            <p className="text-white font-bold">COURSE</p>
            <p className="text-white font-bold ">SEMINER</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerCarousel;
