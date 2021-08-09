function Length(s) {
    var length = 0;
    while (s[length] !== undefined){
      length++;
    } 
    return length;
  }
  
  console.log(Length(""));