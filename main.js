// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

// function will take two arguments when it is called; a and b are placeholders / parameters for those arguments
function max(a, b){
    // Your answer here
    if (a > b) {
      return a;
    } else {
      return b;
    }
}

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a, b, c){
    // Your answer here
    // check to see if a is the largest
    if (a > b && a > c) {
      return a;
      // we know a isn't the largest, so we only need to compare b and c
    } else if (b > c) {
      return b;
      // b wasn't larger than c, so c is the largest
    } else {
      return c;
    }
}

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char) {
    // Your answer here
    // let's make the character lowercase so we don't have to check against upper and lower case letters
    char = char.toLowerCase();
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
      return true;
    }

    return false;
}

// how could you use indexOf to check if char in inside an array or contained in a string?

// function isVowel(char) {
//   char = char.toLowerCase();
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//
//   // indexOf will return -1 if the char is not found; it will return the index of char if it is found
//   return vowels.indexOf(char) !== -1;
// }

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(a, b) {
  return a + b;
}

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(a, b, c) {
  return (a + b + c) / 3
}

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(string) {
  return string.length;
}

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greatherThan(a, b) {
  return b > a;
}

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(name) {
  return "Hello," + " " + name + "!"
}

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madlib(color, animal, verb, noun) {
  return "The quick," + " " + color + " " + animal + " " + verb + " " + "over the" + " " + noun + "!";
}

// madlib('red', 'penguin', 'jumps', 'hat')
