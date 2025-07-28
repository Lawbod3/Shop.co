import { Link } from "react-router";

const TopBanner = () => {
  return (
    <div className="bg-black text-white text-sm text-center py-2 px-4">
      🎉 Sign up and get <span className="font-semibold">20% off</span> to your
      first order.{""}
      <Link
        to="/signup"
        className="underline font-medium ml-1 hover:text-gray-300"
      >
        Sign up here
      </Link>
    </div>
  );
};

export default TopBanner;
