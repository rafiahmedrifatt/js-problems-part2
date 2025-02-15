let heights = [23, 45, 67, 11, 23, 45, 67, 87];

function smallest(heights) {
  let shortest = heights[0];

  for (const height of heights) {
    if (shortest > height) {
      shortest = height;
    }
  }
  return shortest;
}

let short = smallest(heights);
console.log(short);
