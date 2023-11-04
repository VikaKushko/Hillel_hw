// const num = prompt("Enter");
// const arrayOfDigits = num.split(" ").map(Number && String);
//
// arrayOfDigits.sort();
// console.log(arrayOfDigits);
//
// arrayOfDigits.splice(1, 4);
// console.log(arrayOfDigits);

function colorOf(r, g, b) {
  // Convert RGB values to hexadecimal strings and pad them to have 2 characters each
  const redHex = r.toString(16).padStart(2, "0");
  const greenHex = g.toString(16).padStart(2, "0");
  const blueHex = b.toString(16).padStart(2, "0");

  // Combine the hexadecimal values with "#" and return the web color code
  return `#${redHex}${greenHex}${blueHex}`;
}

// Test cases
console.log(colorOf(255, 0, 0)); // Output: "#ff0000"
console.log(colorOf(0, 111, 0)); // Output: "#006f00"
console.log(colorOf(1, 2, 3)); // Output: "#010203"
