//First solution
function compareAge(str, age) {
    if(age > 34) {
        return (str + " is older than me");
    } 
    else {
        return (str + " is younger than me.");
    }
}

console.log(compareAge("Joel", 36));
console.log(compareAge("Samuel", 24)); 
console.log(compareAge("Lily", 28));

//Second solution
const compare1 = compareAge("Joel", 36);
const compare2 = compareAge("Samuel", 24);
const compare3 = compareAge("Joel", 28);

console.log(compare1); 
console.log(compare2); 
console.log(compare3); 


