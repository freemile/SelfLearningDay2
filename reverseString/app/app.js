'use strict'

var file = {}
file.reverseString = function (inString) {
    var forString = inString;
    var newArr = [];
    
    // return null if the input string is an empty string
    if (inString === ""){
        return null;
    }
    
    
    for (var j = 0; j <forString.length; j++){
        //loop through the inString and add the element at each loop to the first index of newArr
        newArr.unshift (inString[j]);
    }
    
    inString = newArr.join("");
    var revString =inString;
    
    // return 'true' for palindromes and return the reversed string for non-palindromes
    if(revString === forString){
        return true;
    }
        return revString;
    }
module.exports= file;
