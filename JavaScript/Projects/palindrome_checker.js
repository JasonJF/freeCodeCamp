/*
 * Filename: u:\Projects\Coding\freeCodeCamp\JavaScript\Projects\palindrome_checker.js
 * Path: u:\Projects\Coding\freeCodeCamp\JavaScript\Projects
 * Created Date: Wednesday, July 7th 2021, 2:06:57 pm
 * Author: JasonJF
 * 
 * This file is part of the palindrome checker project which is one of the javascript projects
 * on freecodecamp
 * Copyright (c) 2021 Your Company
 */

 //The palindrome checker should return true when the given string is a palindrome,
 //otherwise return false

 //strings can be in various formats, cases and may contain spaces and special characters

 //remove special characters and spaces
var myString = "";
var cleanString = "";
var stringToCheck = "";

let arr1 = [];  //array to store original string
let arr2 = []; //array to store inverted string

function stringRinser(myString){
     
     myString = myString.replace(/\s+/g,''); //remove spaces
     myString = myString.replace(/[^a-zA-Z0-9]/g,''); //remove special characters
     myString = myString.toLowerCase(); //make all letters lowercase
    //  console.log(myString);
     return myString

 }
 
 //palindrome checks if a given string is a palindrome
 function palindrome(stringToCheck){
     cleanString = stringRinser(stringToCheck);
     arr1 = cleanString.split('');  //split characters into an array
     arr2 = arr1.slice(0,arr1.length); //copy arr1 to arr2
     arr2.reverse();                    //invert arr2

     for(let i = 0; i < arr1.length; i++){ //check if contents of arr1 matches reversed arr2
         if(arr1[i] == arr2[i]){
             continue
         }
         else{
             return false;                  //if there is a mismatch, string is not a palindrome
         }
         
     }
     return true                        //if all letters are equal string is a palindrome
    //  console.log(arr1);
    //  console.log(arr2);

 }
 console.log(palindrome("2A3*3a2"));
//  console.log(palindrome("racecar"));