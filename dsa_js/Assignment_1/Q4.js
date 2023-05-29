//Approch
//using BigInt Type which find the large number primitive in a given array
//1st to join the numbers using method join() and wrap it into BigInt and add BigInt(1).Also convertit into a string then split() it then convert into number by using map
//time complexity and space complexity
//O(n) and O(1)

let plusOne = function(digit){
    return (BigInt(digit.join("")) + BigInt(1)).toString().split("").map(digit => +digit);      //map gives numbers
};//A bigint is created by appending n to the end of an integer literal or by calling the function BigInt that creates bigints from strings, numbers etc.

console.log(`The new array after the increment is`,plusOne([1, 2, 3]));