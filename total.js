const products = [
  { name: "Shampoo", price: 300 },
  { name: "shirt", price: 1200 },
  { name: "pant", price: 2000 },
  { name: "juto", price: 800 },
];

function getShoppingTotal(products) {
  let sum = 0;
  for (const product of products) {
    sum += product.price;
  }
  return sum;
}

const total = getShoppingTotal(products);
console.log("total cost of todays shopping", total);
