function capitalizeWords(str) {
    str = str.toLowerCase(); 
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(" "); 
}

console.log(capitalizeWords("hello WORLD"));     
console.log(capitalizeWords("rIKKei acaDEMy"));   
