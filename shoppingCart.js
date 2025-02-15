const products = [
  { name: "Shampoo", price: 300, quantity: 5 },
  { name: "shirt", price: 1200, quantity: 3 },
  { name: "pant", price: 2000, quantity: 4 },
  { name: "juto", price: 800, quantity: 2 },
];

function cartTotal(products) {
  let total = 0;
  for (const product of products) {
    total += product.price * product.quantity;
  }
  return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);
