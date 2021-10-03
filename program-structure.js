'use strict'
// ****************************

// Looping a triangle

// my Answer
let result = ''
for (let i = 0; i < 7; i++) {
  result += '#'
  console.log(result)
}
// Author Answer
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

// ****************************

// FizzBuzz
// My Answer
for (let i = 1; i <= 100; i++) {
  i % 3 === 0 && i % 5 === 0 ? console.log('FizzBuzz') :
    i % 3 === 0 ? console.log('Fizz') :
      i % 5 === 0 ? console.log('Buzz') :
        console.log(i)
}
// Author Answer
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// ****************************

// Chessboard
// Author Answer
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// ****************************
