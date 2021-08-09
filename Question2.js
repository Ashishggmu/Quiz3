var nameAge = process.argv.slice(2);
const student = nameAge[0];
const age = nameAge[1];
function rturnString(){
    var s= +student+" "+"is a good student and he is"+" "+age+" "+" years old.";
    return s;
}
console.log(rturnString())