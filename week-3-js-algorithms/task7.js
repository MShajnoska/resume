function longerString(firstString, secondString) {
    if(firstString.length > secondString.length){
        return firstString;
    } else {
        return secondString;
    }
}
  
  console.log(longerString('codemify', 'test'));
  console.log(longerString('automation', 'coding'));
  console.log(longerString('automation', 'the codemify'));