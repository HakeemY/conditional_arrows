// Problem 1
// Write an arrow function that checks to see if a user is older than 18.
// If they are older than 18, the output should be:

// "You are good to go!"

// If they are not older than 18, the output should be:

// "Sorry! You must be 18 or older!"
const age_checker = (num) => {
  num > 18
    ? console.log("You are good to go!")
    : console.log("Sorry! You must be 18 or older!");
};

num = 5;

age_checker(num);

// Problem 2
// Write an arrow function that checks to see if it is currently raining.

// If it is raining, the output should be:

// "Get your rain jacket!"

// If it is not raining, the output should be:

// "No rain on today's forecast!"

const raining_output = (x) => {
  x > true
    ? console.log("Get your rain jacket!!")
    : console.log("No rain on today's forecast!");
};
x = false;

raining_output(x);

// Problem 3
// Write an arrow function that checks to see if a number is even.

// If it is even, the output should be:

// "That's an even number!"

// If it is not even, the output should be:

// "That's an odd number!"

// The conditional logic should be written with a ternary operator.

const arrow = (num) => {
  num % 2 == 0
    ? console.log("That's an even number!")
    : console.log("That's an odd number!!");
};

num = 8;

arrow(num);

// Problem 4
// Write an arrow function that takes in two parameters and checks whether one number is greater than another.

// If the number is greater, the output should be:

// "<<NUMBER HERE>> is more than <<SECOND NUMBER HERE>>!"

// If the number is less than the other number, the output should be:

// "<<NUMBER HERE>> is less than <<SECOND NUMBER HERE>>!"

const greater_num = (num1, num2) =>
  num1 > num2
    ? console.log(`${num1} is more than ${num2}`)
    : console.log(`${num1} is less than ${num2}`);

greater_num(2, 120);
