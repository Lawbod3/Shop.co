import React from "react";
import ProductDetailsNavBar from "../components/ProductDetails-components/ProductDetails HeroPage/NavBar";
import ProductDisplay from "../components/ProductDetails-components/ProductDetails HeroPage/ProductDisplay";
import Newsletter from "../components/Home-components/Newsletter/Newsletter";
import Company from "../components/Home-components/Company/Company";
import Footer from "../components/Home-components/Footer/Footer";
import AlternativeProduct from "../components/ProductDetails-components/Product you might Like/MightLikeProduct";

const ProductDetails = () => {
  return (
    <section>
      <ProductDetailsNavBar />
      <ProductDisplay />
      <AlternativeProduct />
      <Newsletter />
      <Company />
      <Footer />
    </section>
  );
};

export default ProductDetails;
