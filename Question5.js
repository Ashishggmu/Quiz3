const arr = [1, 2, 3, 4, 'a'];

const sum = arr.reduce( (sumSoFar, nextValue) => {
    if ( typeof nextValue === "number" && isFinite(nextValue) ) {
       return sumSoFar + nextValue;
    }
    
    return sumSoFar;
 }, 0); 
  
  console.log(sum);