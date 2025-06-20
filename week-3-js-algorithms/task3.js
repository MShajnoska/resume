function divideByTwo(numberToDivide) {
    return numberToDivide /=2;
  }
  
console.log(divideByTwo(6));
console.log(divideByTwo(105));
  
// FYI. Same thing can be achieved by assigning result to const first
const result = divideByTwo(6)
console.log(result) // 3

const result2 = divideByTwo(105)
console.log(result2)