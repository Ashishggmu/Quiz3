var num = process.argv.slice(2);
const numberOfChair = num[0];
const numberOfRows = num[1];
function totalChairs(z,c){
if(isNaN(numberOfChair,numberOfRows)){
    var z="Enter a number";
    return z;
}
else{
    var c=numberOfRows*numberOfChair;
    return c;
}
}

console.log(totalChairs())
//arrow function
var num = process.argv.slice(2);
const numberOfChair = num[0];
const numberOfRows = num[1];

var sum= (z,c) => {if(isNaN(numberOfChair,numberOfRows)){var z="Enter a number"; return z;}else{ var c=numberOfRows*numberOfChair; return c;}}
console.log(sum())