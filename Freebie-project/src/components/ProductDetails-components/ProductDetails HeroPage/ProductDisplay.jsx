import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchClothProducts } from "../../../api/FetchCloth";
const ProductDisplay = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const loadProducts = await fetchClothProducts();
        const products = loadProducts.find((item) => item.id === parseInt(id));
        setProduct(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [id]);

  if (!product) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex justify-center items-center bg-[#f6f6f6] rounded-xl p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-h-[400px] object-contain"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2"> {product.title}</h2>
        <p className="text-yellow-500">
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
          <span className="text-sm text-gray-500 "> {product.rating}/5</span>
        </p>

        <div className="">
          <span className="text-2xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <>
              <span className="ml-4 line-through text-2xl text-gray-400 font-bold">
                ${product.oldPrice.toFixed(2)}
              </span>
              <span className="ml-2 border rounded-full bg-red-100 text-red-500 text-sm">
                -{product.discount}%
              </span>
            </>
          )}
        </div>
        <p className="text-gray-400 mt-4 mb-4">{product.description}</p>
        <hr className="border-t border-gray-300 my-5 w-11/12 " />

        <div className="mb-4 ">
          <p className="font-semibold text-gray-400 mb-1">Choose Size</p>
          <div className="flex space-x-4 mt-2">
            <button className="border rounded-full text-sm px-4 py-1 bg-white text-gray-400 hover:bg-black">
              Small
            </button>
            <button className="border rounded-full px-4 py-1 bg-white text-gray-400 hover:bg-black">
              Medium
            </button>
            <button className="border rounded-full px-4 py-1 bg-white text-gray-400 hover:bg-black">
              Large
            </button>
            <button className="border rounded-full px-4 py-1 bg-white text-gray-400 hover:bg-black">
              X-Large
            </button>
          </div>

          <hr className="border-t border-gray-300 my-10 w-11/12  " />

          <div className="flex items-center space-x-4 mt-4 mb-0">
            <div className="flex bg-gray-300 items-center border rounded-full px-8 py-1 hover:bg-white">
              <button className="text-lg font-bold hover:text-red-400 ">
                −
              </button>
              <span className="mx-6">1</span>
              <button className="text-lg font-bold hover:text-red-400">
                +
              </button>
            </div>
            <button className="flex-1 bg-black text-white py-2 rounded-full hover:bg-white hover:text-black border border-black">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-10 w-11/12 mx-auto" />
    </section>
  );
};

export default ProductDisplay;
