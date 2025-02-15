const heights = [65, 66, 68, 72, 78, 60];

function getMax(numbers) {
  let tallest = numbers[0];
  for (const number of numbers) {
    if (number > tallest) {
      tallest = number;
    }
  }
  return tallest;
}

const max = getMax(heights);
console.log(max);
