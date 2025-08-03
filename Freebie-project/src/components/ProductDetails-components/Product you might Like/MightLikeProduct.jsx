import { useParams } from "react-router";
import { fetchClothProducts } from "../../../api/FetchCloth";
import { useEffect, useState } from "react";
import MightLikeProductCard from "./MightLikeProductCard";

const AlternativeProduct = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const loadProducts = await fetchClothProducts();
      const index = loadProducts.findIndex((item) => item.id === parseInt(id));

      let sliceProduct;

      if (index < 5) {
        sliceProduct = loadProducts.slice(0, 5);
      } else {
        sliceProduct = loadProducts.slice(5);
      }
      const alternativeProducts = sliceProduct.filter(
        (product) => product.id !== parseInt(id)
      );
      setProducts(alternativeProducts);
    };
    fetchProducts();
  }, [id]);

  if (!product) {
    return <div className="text-center py-10">Loading...</div>;
  }
  return (
    <section id="mightLike" className="bg-white py-16 px-4">
      <h2 className="text-4xl font-black text-center mb-10 ">
        YOU MIGHT ALSO LIKE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {product.map((product) => (
          <MightLikeProductCard key={product.id} product={product} />
        ))}
      </div>
      <hr className="border-t border-gray-300 my-10 w-11/12 mx-auto" />
    </section>
  );
};
export default AlternativeProduct;
