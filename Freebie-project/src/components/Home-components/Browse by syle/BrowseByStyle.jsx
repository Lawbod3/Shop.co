import { Link } from "react-router";
import { styles } from "./Styles";
const BrowseByStyle = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-4xl font-black text-center mb-10 ">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="max-w-3xl mx-auto grid grid-cols-2 grid-rows-2 overflow-hidden rounded-xl border border-gray-200">
        {styles.map((style, index) => (
          <div key={style.id} className="relative h-60 group">
            <img
              src={style.image}
              alt={style.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl  font-semibold mb-2">{style.name}</h3>
              <button className="border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-t border-gray-300 my-10 w-11/12 mx-auto mt-24" />
    </section>
  );
};

export default BrowseByStyle;
