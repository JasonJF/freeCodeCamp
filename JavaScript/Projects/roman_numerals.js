/*
 * Filename: u:\Projects\Coding\freeCodeCamp\JavaScript\Projects\roman_numerals.js
 * Path: u:\Projects\Coding\freeCodeCamp\JavaScript\Projects
 * Created Date: Wednesday, July 7th 2021, 3:16:56 pm
 * Author: JasonJF
 * 
 * This module is part of the freecodecamp javascript projects module.
 * A number is given and the roman numral equivalent is returned
 * Copyright (c) 2021 Your Company
 */

 let romanDigits = [["I","II","III","IV","V","VI","VII","VIII","IX"],
["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],["M","MM","MMM"]];

var num = 0;
var numString = "";
var myRomanString = "";
var convertedNumeral = [];

function convertToRoman(num){

    numString = num.toString();      //convert integer to a string
    numString = numString.split('');    //convert string to an  array
    numString = numString.reverse();    //reverse string to make single digit index 0

    for(let i = 0; i < numString.length; i++){ //loop through numString and look up roman numeral
        
        var numeral = parseInt(numString[i]);
        var digit = romanDigits[i][numeral - 1];  
        convertedNumeral.push(digit);

        // console.log(convertedNumeral);

    }
    convertedNumeral = convertedNumeral.reverse()   //reverse array back into proper form
    myRomanString = convertedNumeral.join('');      //convert array into string
    console.log(myRomanString);
    // return myRomanString;                           //return roman numeral

}

convertToRoman(2);