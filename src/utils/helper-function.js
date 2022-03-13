export function isInList(list, id) {
  return Boolean(list.find((item) => item.productID === id));
}

export function getId(list, productID) {
  return list.find((item) => item.productID === productID)["id"];
}

const filterFunctions = [
  filterInStock,
  sortProducts,
  filterByRating,
  filterByCategory,
  filterByPriceRange,
];

export function getFilteredProducts(products, filters) {
  return filterFunctions.reduce((acc, crr) => {
    return crr(acc, filters);
  }, products);
}

function filterInStock(productList, filters) {
  return !filters.inStock
    ? productList.filter((product) => product.inStock)
    : productList;
}

function sortProducts(productList, { sort }) {
  if (sort === "lowToHigh") {
    return [...productList].sort((a, b) => {
      return a.discountedPrice - b.discountedPrice;
    });
  } else if (sort === "highToLow") {
    return [...productList].sort((a, b) => {
      return b.discountedPrice - a.discountedPrice;
    });
  }

  return productList;
}

function filterByRating(productList, { rating }) {
  return productList.filter((product) => product.rating > rating);
}

function filterByCategory(productList, { categories }) {
  if (!categories.length) return productList;

  return productList.filter((product) => {
    return categories.includes(product.category.toLowerCase());
  });
}

function filterByPriceRange(productList, { price }) {
  return productList.filter((product) => product.discountedPrice < price);
}
