import { Link } from "react-router";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { fetchClothProducts } from "../../api/FetchCloth";
const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const loadProducts = await fetchClothProducts();
        const limitedProducts = loadProducts.slice(0, 4);

        const update = limitedProducts.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.images?.[0],
          price: item.price,
          oldPrice: item.price - (item.price * 20) / 100,
          category: item.category,
          rating: item.rating,
          discount: 20,
        }));
        setProducts(update);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-4xl font-black text-center mb-10">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="px-6 py-2 border rounded-full hover:bg-black hover:text-white transition"
        >
          View All
        </a>
      </div>
      <hr className="border-t border-gray-300 my-10 w-11/12 mx-auto" />
    </section>
  );
};

export default NewArrivals;
