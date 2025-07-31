import { Link } from "react-router";

const SecondBanner = () => {
  return (
    <div id="brands" className="bg-black  py-6 px-4 md:px-20 ">
      <div className="flex justify-between items-center w-full text-white">
        <span className="text-[24px] fomt-serif tracking-wider">VARSACE</span>
        <span className=" text-[22px] tracking-wide font-serif uppercase italic">
          ZARA
        </span>
        <span className=" text-[22px] tracking-widest font-serif">GUCCI</span>
        <span className=" text-[24px] font-bold font-serif">PRADA</span>
        <span className=" text-[20px] font-light font-sans">CALVIN KLEIN</span>
      </div>
    </div>
  );
};

export default SecondBanner;
