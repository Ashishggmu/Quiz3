var num = process.argv.slice(2);
const studentName=num[0];
const grade = num[1];
function gradeno(){
    if(grade<50){
        return "grade F";
    }
    else if(grade<=59){
        return "grade D";
    }
    else if(grade<=69){
        return "grade C";
    }
    else if(grade<=79){
        return "grade B";
    }
    else if(grade<=100){
        return "grade A";
    }
    else{
        return"unknown";
    }
}
console.log(`${studentName} has scored ${gradeno()}.`)