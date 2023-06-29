// FUNCTIONALITY

for (i = 1; i < 101; i++) {
  // FizzBuzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " " + "Fizzbuzz");
    // Fizz (multiples of 3)
  } else if (i % 3 == 0) {
    console.log(i + " " + "Fizz");
    // Buzz (multiples of 5)
  } else if (i % 5 == 0) {
    console.log(i + " " + "Buzz");
  }
}

// FUNCTIONALITY END
