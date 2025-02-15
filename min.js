const prices = [
  20000, 16000, 50000, 160000, 100000, 12000, 10000, 30000, 35000,
];

function getmin(numbers) {
  let minPrice = numbers[0];
  for (const number of numbers) {
    if (minPrice > number) {
      minPrice = number;
    }
  }
  return minPrice;
}

const cheap = getmin(prices);
// console.log("cheapes one is", cheap);

const mobile = [
  { name: "samsung", price: 23000, camera: "12mp", color: "black" },
  { name: "xiaomi", price: 27000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "Apple", price: 123000, camera: "12mp", color: "black" },
  { name: "HTC", price: 12000, camera: "12mp", color: "black" },
];

function cheapMobile(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const phones = cheapMobile(mobile);
console.log(phones);
