import banner from "../../../assets/images/banner.jpg"

const Banner = () => {
    return (
        <div className="relative">
            <img src={banner} alt="" />
            <div className="absolute right-72 top-24 ">
            <h2 className="text-2xl">Online Booking system for</h2>
            <h1 className="text-4xl font-semibold mt-2">Colleges</h1>
            <div className="mt-6">
            <button className="bg-red-600 text-lg font-bold px-6 py-3 rounded-full mr-4">Get a Free Account</button>
            <button className="bg-cyan-700 text-lg font-bold px-6 py-3 rounded-full">Get Inspired</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;