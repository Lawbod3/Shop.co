import { Link } from "react-router";
import CountUp from "react-countup";

const counters = [
  { value: 200, suffix: "+", label: "International Brands" },
  { value: 2000, suffix: "+", label: "High-Quality Products" },
  { value: 30000, suffix: "+", label: "Happy Customers" },
];

const HeroBanner = () => {
  return (
    <section
      style={{ backgroundColor: "#F2F0F1" }}
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen"
    >
      <div className="pt-10">
        <h1 className="text-6xl font-extrabold mt-14 px-20 leading-tight mb-2">
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </h1>
        <h6 className="px-20 text-sm text-gray-500 my-5 ">
          Browse through our diverse range of meticulously crafted garments,
          designed <br />
          to bring out individuality and cater to your sense of style.
        </h6>
        <div
          className="px-20 py-2
        mt-2 mb-4"
        >
          <button className="bg-black text-white text-lg hover:bg-stone-700 py-4 px-12 rounded-full mb-2">
            Shop Now
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8  px-20 mt-12">
          {counters.map((counter, index) => (
            <div key={index} className="flex flex-col ">
              <p className="text-3xl  font-bold text-stone-800 ">
                <CountUp end={counter.value} duration={4} separator="," />
                {counter.suffix}
              </p>
              <span className="mt-2 text-sm  text-gray-600">
                {counter.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-full">
        <img
          className="absolute bottom-0 right-0 object-cover  w-full h-[95vh] "
          src="/pics1.png "
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroBanner;
