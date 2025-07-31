import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
const Company = () => {
  return (
    <div className="bg-gray flex flex-row gap-12 px-10 py-6 ">
      <div className="text-sm text-gray-400">
        <h2 className="text-2xl text-black font-bold mr-20 ">SHOP.CO</h2>
        <ul className="mt-4 text-xs text-gray-500  space-y-2 ">
          <li>
            <p> we have cloth that suit your style and</p>
          </li>
          <li>
            <p>which you're proud to wear. From</p>
          </li>
          <li>
            <p>women to men</p>
          </li>
        </ul>
        <div className="flex space-x-3 mt-6 text-gray-600 text-[10px]">
          <a href="#">
            <FaTwitter className="hover:text-black cursor-pointer" />
          </a>
          <a href="#" rel="noopener noreferrer" target="_blank">
            <FaFacebookF className="hover:text-black cursor-pointer" />
          </a>

          <a href="#" rel="noopener noreferrer" target="_blank">
            <FaInstagram className="hover:text-black cursor-pointer" />
          </a>

          <a href="#" rel="noopener noreferrer" target="_blank">
            <FaGithub className="hover:text-black cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="">
        <h4 className="font-semibold tracking-[0.3em]  text black ml-8 mt-2 mr-20 ">
          {" "}
          COMPANY
        </h4>
        <ul className="text-gray-500 text-sm mt-4 ml-8 space-y-2">
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Careers</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold font-sans tracking-[0.3em] text black ml-8 mt-2 mr-24">
          Help
        </h4>
        <ul className="text-gray-500 text-sm mt-4 ml-8 space-y-2">
          <li>Customer Support</li>
          <li>Delivery details</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold font-sans tracking-[0.3em]  text black ml-8 mt-2 mr-28">
          FAQ
        </h4>
        <ul className="text-gray-500 text-sm mt-4 ml-8 space-y-2">
          <li>Account</li>
          <li>Manage Deliveries</li>
          <li>Orders</li>
          <li>Payments</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold font-sans tracking-[0.3em] text black ml-8 mt-2">
          RESOURCES
        </h4>
        <ul className="text-gray-500 text-sm mt-4 ml-8 space-y-2">
          <li>Free ebooks</li>
          <li>Development Tutorial</li>
          <li>How To- Blog</li>
          <li>Youtube Playlist</li>
        </ul>
      </div>
      <hr className="border-t border-gray-300 my-10 w-11/12 mx-auto mt-24" />
    </div>
  );
};

export default Company;
