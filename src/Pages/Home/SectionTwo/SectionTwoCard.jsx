// eslint-disable-next-line react/prop-types
const SectionTwoCard = ({ image, title, subTitle }) => {
    return (
      <div className="bg-white px-6 text-center cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-black transition-shadow duration-300">
        <img src={image} alt="" className="w-full  object-cover rounded-t-lg" />
        <div className="px-8 py-4">
          <h2 className="font-bold text-xl">{title}</h2>
          <h3 className="font-semibold text-lg text-slate-400">{subTitle}</h3>
        </div>
        <button className="mb-5 text-cyan-500 font-bold">Learn more</button>
      </div>
    );
  };
  
  export default SectionTwoCard;
  