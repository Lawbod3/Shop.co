import { Link } from "react-router";
import { useEffect, useState } from "react";
import ProductCard from "../../ProductCard";
import { fetchClothProducts } from "../../../api/FetchCloth";
const TopSelling = () => {
  const [products, setProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const loadProducts = await fetchClothProducts();

        setProducts(loadProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const displayProducts = showAllProducts ? products : products.slice(6);
  return (
    <section id="topselling" className="bg-white py-16 px-4">
      <h2 className="text-4xl font-black text-center mb-10 ">TOP SELLING</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          onClick={() => setShowAllProducts((prev) => !prev)}
          className="px-6 py-2 border rounded-full hover:bg-black hover:text-white transition cursor-pointer"
        >
          {showAllProducts ? "Show Less" : "view all"}
        </a>
      </div>
      <hr className="border-t border-gray-300 my-10 w-11/12 mx-auto" />
    </section>
  );
};

export default TopSelling;
