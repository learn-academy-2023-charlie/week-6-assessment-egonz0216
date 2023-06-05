// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// PseudoCode:
  // Input: an array of objects
  // Output: an array of strings
  // Method: Create a variable with an empty array. iterate throught the initial array of objects with a for loop. Use dot notation to create a sentence that satisfies the requirement. Use .push() to populate the new array and then return it.


// a) Create a test with an expect statement using the variable provided.

describe("nameCap", () => {
  const hitchhikersCharacters = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(nameCap(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// FAIL  ./code-challenges.test.js
// nameCap
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized 
//   ReferenceError: nameCap is not defined

// b) Create the function that makes the test pass.

const nameCap = (arr) => {
  const newArr = []
  for(let i = 0; i < arr.length; i++){
    const capitalize = arr[i].name.split(' ').map((name) => name[0].toUpperCase().concat(name.slice(1))).join(' ')
    newArr.push(capitalize + ' ' + 'is' + ' ' + arr[i].occupation + '.')
  }
  return newArr
}

// PASS  ./code-challenges.test.js
// nameCap
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.


// PseudoCode:
  // input: an array of mixed data types
  // output: an array of numbers that are the remainder of dividing by three
  // process: iterate through the array with a for loop, and set an if-statement to make a condititon checking for the data type of the array, and if the data type is a number, divide that number with a modulo operator and push the remainder into an empty array.


// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("arrRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(arrRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(arrRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
//   arrRemainders
//   ReferenceError: arrRemainders is not defined

// b) Create the function that makes the test pass.

const arrRemainders = (arr) => {
  newArr = []
  for(let i = 0; i < arr.length; i++)
  if (typeof arr[i] === 'number'){
    newArr.push(arr[i] % 3)
  }
  return newArr
}

// PASS  ./code-challenges.test.js
// nameCap
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (3 ms)
// arrRemainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// PseudoCode:
  // input: an array of numbers
  // output: a single number
  // process: iterate through the array. set condition to check for type of data 


// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("arrSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(arrSum(cubeAndSum1)).toEqual(99)
    expect(arrSum(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// arrSum
// ReferenceError: arrSum is not defined

// b) Create the function that makes the test pass.

const arrSum = (arr) => {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    theCube = arr[i] * arr[i] * arr[i]
    sum += theCube
  }
  return sum
}

// PASS  ./code-challenges.test.js
// arrSum
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (3 ms)