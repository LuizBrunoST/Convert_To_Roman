// Created by c. mechain

function decimToRoman(n) {
     
  var roman   = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  var decimal = [ 1,   4,    5,   9,   10,   40,   50,  90,   100, 400,  500, 900,  1000];
  var result = '';
  
  if (decimal.indexOf(n) > -1) {
    result = roman[decimal.indexOf(n)];
  } 
  else if (decimal.indexOf(n) === -1) {
    for(var i = 12; i >= 0; i--) {
      while(n >= decimal[i]) {
        result += roman[i];
        n -= decimal[i];
      }
    }
  }
  return result;
}


$(function() {
    
        $("#convert").click(function() {
            $("#result").text(decimToRoman($("#number").val()));
        })
});