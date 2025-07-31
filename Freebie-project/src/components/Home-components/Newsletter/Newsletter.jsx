import { useState } from "react";
import { FiMail } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py16 mb-10">
      <section className=" bg-black  text-white mx-auto w-[90%] rounded-[20px] px-8 py-10 flex flex-col md:flex-row items-center justify-between  gap-8    ">
        <h2 className=" text-3xl md:text-4xl font-bold  leading-tight text-center md:text-left ">
          STAY UPTO DATE ABOUT <br />
          OUR LATEST OFFERS
        </h2>
        <form
          className=" flex flex-col gap-4 w-full md:w-[40%]"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center bg-white text-black rounded-full px-4 py-3">
            <FiMail className="text-gray-400 mr-2"></FiMail>
            <input
              id="inputId"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-1-full text-black focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black rounded-full px-6 py-3"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </section>
      <hr className="border-t border-gray-300 my-10 w-11/12 mx-auto mt-24" />
    </div>
  );
};
export default Newsletter;
