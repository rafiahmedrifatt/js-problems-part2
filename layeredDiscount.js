/**
 * first100 : 100
 * 101 to 200: 90
 * above200: 70
 */

function layeredDiscountedTotal(quantity) {
  const first100Price = 100;
  const second100price = 90;
  const above200 = 70;

  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  } else if (quantity <= 200) {
    const first100Price = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainTotal = remainingQuantity * 90;
    const total = first100Price + remainTotal;
    return total;
  } else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100price;
    const remainingQuantity = quantity - 200;
    const total = first100Total + second100Total + remainingQuantity;
    return total;
  }
}

const quantity = layeredDiscountedTotal(349);
console.log(quantity);
