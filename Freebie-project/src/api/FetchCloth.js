export const fetchClothProducts = async () => {
  try {
    const menRes = await fetch(
      "https://dummyjson.com/products/category/mens-shirts"
    );
    const menData = await menRes.json();

    const womenRes = await fetch(
      "https://dummyjson.com/products/category/womens-dresses"
    );
    const womenData = await womenRes.json();

    const allProducts = [...menData.products, ...womenData.products];

    const updatedProducts = allProducts.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.images?.[0],
      price: item.price,
      oldPrice: item.price + item.price * 0.2,
      category: item.category,
      rating: item.rating,
      description: item.description,
      discount: 20,
    }));

    return updatedProducts;
  } catch (error) {
    console.error("Failed to fetch clothing products:", error);
    return [];
  }
};
