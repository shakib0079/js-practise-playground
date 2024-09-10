// Problem Set: JavaScript Basics
// Problem 1: Variable Declaration and Reassignment
// Declare a variable favoriteColor and assign it your favorite color as a string.
// Declare a variable yearOfBirth and assign it your birth year as a number.
// Declare a variable isEmployed and assign it a boolean value indicating your employment status.
// Reassign the value of favoriteColor to another color.
// Reassign the value of yearOfBirth to a different year.
// Reassign the value of isEmployed to the opposite boolean value.

// const favoriteColor = "Blue"
// const yearOfBirth = 1996
// let isEmployed = yes

// const favoriteColor = "black"
// const yearOfBirth = 1992
// let isEmployed =yes

// Problem 2: Comparison Operators
// Compare yearOfBirth with the current year using == and ===. Print the results.
// Check if favoriteColor is not equal to “blue” using != and !==. Print the results.
// Compare yearOfBirth with 2000 using <, >, <=, and >=. Print the results.
// Use logical operators to check if yearOfBirth is less than 2000 and isEmployed is true. Print the result.

// const currentYear = 2024
// console.log(currentYear == yearOfBirth)
// console.log(favoriteColor != "blue" && favoriteColor !== "blue")
// console.log(yearOfBirth < 2000 && yearOfBirth > 2000 && yearOfBirth >= 2000)

// Exercise 1

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// “Jabroni”	“Patron Tequila”
// “School Counselor”	“Anything with Alcohol”
// “Programmer”	“Hipster Craft Beer”
// “Bike Gang Member”	“Moonshine”
// “Politician”	“Your tax dollars”
// “Rapper”	“Cristal”
// anything else	“Beer”
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be “Beer”.

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input “pOLitiCIaN” should still return “Your tax dollars”

// const myFunction = (input) => {
//     if(input === "Jabroni"){
//         console.log("Patron Tequila")
//     }else if(input === "School Counselor"){
//         console.log("Anything with Alcoho")
//     }else if(input === "Programmer"){
//         console.log("Hipster Craft Beer")
//     }else if(input === "Bike Gang Member"){
//         console.log("Moonshine")
//     }else{
//         console.log("Beer");
//     }
// }

// myFunction("Jabroni")
// myFunction("Shakib")

// Exercise 2

// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return “invalid string”.

// For example:

// “abcdefghijklm” –> [“b”, “d”, “f”, “h”, “j”, “l”]

// “a”             –> “invalid string”




// const evenCharacter = (str) => {
//     // if(array.length >= 2 || array.length <= 100){
//         let result = ""
//         for( let i = 1; i < str.length; i += 2){
//             result = result + str[i]
//         }
//     // }

//     console.log(result);

    
// }

// evenCharacter("sfdsvdhsggdfgfdgfdgfdgdgfsedwsrffvvfc")



let myArray