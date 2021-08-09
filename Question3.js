var num = process.argv.slice(2);
const number = num[0];
function isNumber(){
    if (isNaN(number))
    return false;
    else{
        return true;
    }
}
console.log(isNumber())
/*arrow function 
var sum = ()=>{if (isNaN(number))return false;else{return true;}}
console.log(sum())
*/