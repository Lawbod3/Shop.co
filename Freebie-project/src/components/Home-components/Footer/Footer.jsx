import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="bg-white text-gray-500  flex py-8">
        <div className="container mx-auto ml-10 text-xs ">
          <p>Shop.co © 2000-2025 All rights reserved.</p>
        </div>

        <ul className="flex gap-4 mr-10 text-2xlS ">
          <li className="bg-white text-blue-600">
            {" "}
            <FaCcVisa className="bg-white" />
          </li>

          <li className="text-red-500">
            <FaCcMastercard />
          </li>
          <li>
            <FaCcPaypal />
          </li>
          <li>
            <FaApplePay />
          </li>
          <li>
            <FaGooglePay />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
