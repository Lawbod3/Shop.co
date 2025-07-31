import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#f6f6f6] rounded-xl overflow-hidden shadow-sm cursor-pointer">
      <div className="bg-white p-4">
        <Link to={"/product/${product.id}"}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[250px] object-contain "
          />
        </Link>
      </div>

      <div className="text-center p-4">
        <h3 className="font-semibold text-lg mb-1">{product.title}</h3>

        <p className="text-yellow-500 text-sm">
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
        </p>

        <div className="mt-2 ">
          <span className="text-xl font-bold">{product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <>
              <span className="text-gray-400 line-through ml-2">
                ${product.oldPrice.toFixed(2)}
              </span>
              <span className="text-pink-500 text-sm ml-1">
                -{product.discount}%
              </span>
            </>
          )}

          <button className="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-white hover:text-black ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
