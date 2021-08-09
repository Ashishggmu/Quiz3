function reverse(array) {
    var output = [];
    while (array.length) {
      output.push(array.pop());
    }
  
    return output;
  }
  console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
/*function reverse(str){  
    let reversed = "";  
    
     for (var i = str.length - 1; i >= 0; i--){         
       reversed += str[i];  
     }     
    return reversed;
}
    
  console.log(reverse([1, 2, 3, 4, 5, 6, 7]));*/