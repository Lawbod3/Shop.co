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

    return [...menData.products, ...womenData.products];
  } catch (error) {
    console.error("Failed to fetch clothing products:", error);
    return [];
  }
};
