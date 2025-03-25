// let array = ["", false, 0, 5, 10, "Hello world!"]; 

// let filteredArray = array.filter(Boolean); 
// console.log(filteredArray); 

let array = ["", false, 0, 5, 10, "Hello world!"];
let result = []; 

for (let i = 0; i < array.length; i++) {
    if (array[i]) {
        result.push(array[i]);
    }
}

console.log(result); 
