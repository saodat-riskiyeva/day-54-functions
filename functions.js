function greetUser(name = "Guest") {
  console.log(`Hello, ${name}! Welcome to our website.`);
}

greetUser("Max"); // Default parameter
greetUser(); // Default parameter

function sumUp(num1 = 0, num2 = 0, num3 = 0) {
  return num1 + num2 + num3;
}

console.log(sumUp(1, 2, 3)); // 6
console.log(sumUp(1, 2)); // NaN
console.log(sumUp(1)); // NaN
