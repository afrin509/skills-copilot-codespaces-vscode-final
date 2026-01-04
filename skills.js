function filterOutValueTwo(arr) {
  return arr.filter(item => item !== 2);
}

// Example usage:
const numbers = [1, 2, 3, 2, 4, 5];
const filteredNumbers = filterOutValueTwo(numbers);
console.log(filteredNumbers); // Output: [1, 3, 4, 5]