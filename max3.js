const jim = 56;
const tim = 98;
const kim = 99;

if (jim > tim && jim > kim) {
  console.log("jim is the ultimate boss");
} else if (tim > jim && tim > kim) {
  console.log("tim is the boss");
} else {
  console.log("kim is the boss");
}

function maxofThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const max = maxofThree(45, 76, 86);
console.log(max);

const max2 = Math.max(478, 45, 67, 9, 34, 65, 34, 65, 7);
console.log("max using math.max is", max2);
