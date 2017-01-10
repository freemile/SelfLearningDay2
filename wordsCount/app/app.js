'use strict'

var file = {}
file.words=function ( data){
    var temp={};
    
    // split the strings into an array, filter out the empty string in the array if any and join the array back to //become a string
    
    var dataInput = data.split(" ").filter(function(n){ return n != ''}).join(' ');
    
    // replace the following symbols in the string with an empty space
    
    var word=dataInput.replace(/\s|\n|\t/g, " ");
    
    // split the string back into an array so as to count the words
    var count=word.split(' ');


    for (var i = 0; i < count.length; i++) {

        if ( count[i] in temp){
          temp[count[i]] = (+temp[count[i]] ||0)+ 1
        }


        else{

          temp[count[i]]=1;
        }
    }
    return temp;
    

};
module.exports= file;
