/**
 ~ Arrays ~

    
**/


/**
 * Notes of Array:
 Array is an collection of elements. 
 Index starts with 0 
 Lenght starts with 1
 */

// How to declare an Array with Values in JS
var marks = [20,40,60,80,100]

//How to access the elements present in the array > We can do this with Array name and index value. In Array index count always start with 0. 
console.log(marks[2]) //60 will be the output

//How we can reassign the value in an array
marks[3] = 85 //Changing the index 3 value from 80 to 85
console.log(marks) //[ 20, 40, 60, 85, 100 ] will be the output

//How to know the length of an Array > length
console.log(marks.length) //5 will be the output

//How to increase the array size of an Array > Push is a method which will help you to append new element to an array.
marks.push(66)
console.log(marks) 