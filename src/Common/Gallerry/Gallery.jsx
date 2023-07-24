// eslint-disable-next-line no-unused-vars
import React from "react";

const Gallary = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400">
              GRADUATION
            </p>
          </div>
          <h2 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative text-red-600">Hey</span>
            </span>{" "}
            <span className="text-indigo-600 font-serif">
              Wellcome to Our Simply Booking
            </span>{" "}
            <span className="text-red-500">Gallery</span>
          </h2>
          <p className="text-base text-gray-900 md:text-lg font-thin ">
            Commencement is the ceremony that honors graduating students. <br />{" "}
            Commencement refers to the start of something, <br /> and in an
            academic context
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto ">
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="object-cover w-full h-56 rounded shadow-lg border border-indigo-600"
            src="https://images.theconversation.com/files/526908/original/file-20230517-18592-a08agm.jpg?ixlib=rb-1.1.0&rect=23%2C46%2C5092%2C3366&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
            alt=""
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="object-cover w-full h-56 rounded border border-red-600 shadow-lg"
            src="https://static8.depositphotos.com/1278120/896/i/450/depositphotos_8963157-Graduation-group.jpg"
            alt=""
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="object-cover w-full h-56 rounded border border-purple-800 shadow-lg"
            src="https://www.akseleran.co.id/blog/wp-content/uploads/2022/10/Graduation-Adalah.jpg"

            alt=""
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="object-cover w-full h-56 rounded border border-green-400 shadow-lg"
            src="https://hips.hearstapps.com/hmg-prod/images/graduation-wishes-1651254203.jpeg?crop=0.669xw:1.00xh;0.166xw,0&resize=1200:*"

            alt=""
          />
        </div>
        <div className="grid container mx-auto gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto ">
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="object-cover w-full h-56 rounded shadow-lg border border-indigo-600"
            src="https://st.depositphotos.com/2273597/2457/i/950/depositphotos_24574743-stock-photo-graduation-group-of-friends-pose.jpg"
            alt=""
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="object-cover w-full h-56 rounded border border-red-600 shadow-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjj3Y6HaEBUmb5Q0y8KS1QaIuvcxjWLOPNcoFBH1C7ycfI2YukbUkGBdgMXR2qCJ7M88I&usqp=CAU"
            alt=""
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="object-cover w-full h-56 rounded border border-purple-800 shadow-lg"
            src="https://media.istockphoto.com/id/615502046/photo/celebrating-after-graduation.jpg?s=612x612&w=0&k=20&c=ZOW69gb0dFMJpMlL8xj0eJ6C5wkWPp_TgBE5VJBei6U="
            alt=""
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="object-cover w-full h-56 rounded border border-green-400 shadow-lg"
            src="https://media.istockphoto.com/id/482362583/photo/multi-ethnic-friends-excitedly-hold-diplomas-after-college-graduation.jpg?s=612x612&w=0&k=20&c=0u-Jm_50Rtdwl5n8vMZ-ROfxEg-BCSmg3ZKJJ_w5CWY="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
