function duplicate(array){
    var Array = [];
    
    
    for(i=0; i < array.length; i++){
        if(Array.indexOf(array[i]) === -1) {
            Array.push(array[i]);
        }
    }
    return Array;
}


console.log(duplicate(['John', 'Taylor', 'John']));