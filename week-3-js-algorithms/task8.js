function checkEquality(type, value) {
    if (type === value) {
        return true;
    } else {
        return false;
    }
}

console.log(checkEquality(1, true)); 
console.log(checkEquality(0, "0")); 
console.log(checkEquality(1, 1)); 