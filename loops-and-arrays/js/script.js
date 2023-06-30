// ACTIVITY 1 ✔
// Create a variable called "tasks" with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat']
// Using the "for" loop display the value of each of these items
// "console.log" the output, separated by a space

let tasks = [
  "Wake up",
  "Shower",
  "Eat",
  "Gym",
  "Eat again",
  "Work",
  "Work some more",
  "Eat again",
  "Bath",
  "Sleep",
];

for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i]);
}

// ACTIVITY 1 END

// ACTIVITY 2 ✔
// Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6
// console.log your output

// Sum Variable
let sum = 0;

for (let i = 0; i < tasks.length; i++) {
  sum += i;
}

console.log(sum);


// ACTIVITY 2 END

// ACTIVITY 3 ✔
// Using the tasks variable created above
// Create a loop that performs the 15 times table
// Leading up to the "length" of your tasks variable

for (i = 0; i < tasks.length; i++) {
  i * 15;
}

// ACTIVITY 3 END

// ACTIVITY 4 ✔
// Edit your code in activity 3, by creating an array called timesTable
// And store each value of the your fifteen times table in it

let timesTable = [];

for (i = 0; i < tasks.length; i++) {
  let results = i * 15;
  timesTable.push(results);
}

// ACTIVITY 4 END

// ACTIVITY 5 ✔
// Using the array you created in the Activity 4, loop through the array and print each value to the console.
for (i = 0; i < timesTable.length; i++) {
  console.log(timesTable[i]);
}
// ACTIVITY 5 END

// ACTIVITY 6 ✔
// Use the .reduce() built-in method to calculate the average of the array created in Activity 4.

// Sum of values
let sumOfArray = (sum, num) => {
  return sum + num;
};

let result = () => {
  let arraySum = timesTable.reduce(sumOfArray);
  return arraySum;
};
// ...

// Average of values
let average = timesTable.reduce(result) / timesTable.length;
console.log(average);
// ... 

// ACTIVITY 6 END

// BONUS ACTIVITY ✔
//Repeat the output of what you produced in activity 6, this time by not using the .reduce function

let sumResult = result();
const newAverage = sumResult / timesTable.length;
// Expected output:
// 67.5

//Create a "for of" loop, looping through the values of your tasks variable created in activity 1
//console.log the output

for (const task of tasks) {
  console.log(task);
}

//Try to replicate the above activity by using a "for in" loop instead

for (const task in tasks) {
  console.log(task);
}

//Does this work? can you understand and explain why it displays what it displays?
// My answer to the question...

// This solution works in the sense that an output of some kind was produced. 
// However, it did not produce the expected output, which was the array items displayed as strings. As they were defined.
// This is due to the fact that the 'for in' loop iterates through an objects 'properties', rather than the array elements themselves. 
// In this case, the properties of the array elements are their index values. Hence the output.

// BONUS ACTIVITY END
