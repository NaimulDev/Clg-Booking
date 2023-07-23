import SectionTwoCard from "./SectionTwoCard";
import cardImageOne from "../../../assets/images/covid-developments-1.jpg";
import cardImageTwo from "../../../assets/images/covid-developments-2.jpg";
import cardImageThree from "../../../assets/images/covid-developments-3.jpg";

const SectionTwo = () => {
  return (
    <div className="bg-[#f3f5f7] py-16 ">
      <div className="text-lg mb-16 text-center">
        <h1>SimplyBook special
          <br />
          developments to help stand
          <br />
          against COVID-19</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 lg:px-20">
        {/* Use 'flex-col' for small devices and 'flex-row' for medium and large devices */}
        <SectionTwoCard image={cardImageOne} title={"Online Video Meetings"} subTitle={"SimplyBook.me partners with video calling software to provide an excellent Video Appointment Scheduling system."} />
        <SectionTwoCard image={cardImageTwo} title={"Online Video Meetings"} subTitle={"SimplyBook.me partners with video calling software to provide an excellent Video Appointment Scheduling system."} />
        <SectionTwoCard image={cardImageThree} title={"Online Video Meetings"} subTitle={"SimplyBook.me partners with video calling software to provide an excellent Video Appointment Scheduling system."} />
      </div>
    </div>
  );
};

export default SectionTwo;
