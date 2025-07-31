import { Link } from "react-router";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold ">
        <Link to="/">Shop.co</Link>
      </div>

      <div className="space-x-6  md:flex px-5 ">
        <Link to="/Shop" className="text-grey-700 hover:text-black-700">
          Shop
        </Link>
        <a href="#topselling" className="text-grey-700 hover:text-black-700">
          top-Sales
        </a>
        <a href="#newArrivals" className="text-grey-700 hover:text-black-700">
          New-Arrivals
        </a>
        <a href="#brands" className="text-grey-700 hover:text-700">
          Brands
        </a>
      </div>

      <div className="flex-1 mx-4">
        <form className="relative ">
          <input
            type="text"
            placeholder="Search for products..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none w-full "
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/account">
          <FaUser className="text-xl text-gray-700 hover:text-black" />
        </Link>
        <Link to="/wishlist">
          <FaHeart className="text-xl text-gray-700 hover:text-black" />
        </Link>
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-xl text-gray-700 hover:text-black" />
          <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
