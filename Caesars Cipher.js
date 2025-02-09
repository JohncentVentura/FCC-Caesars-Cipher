function rot13(str) {
    //Placeholder for the dechipered str to be returned
    let decipheredStr = "";
  
    //Iterate each letter (char) of the str, since we will use ASCII for dechipering
    for(let i = 0; i < str.length; i++) {
  
      //Assign to asciiNum the Unicode of the char of str[i], example is Unicode of A is 65
      let asciiNum = str[i].charCodeAt();
      
      //If asciiNum is >= 65 which is A, and <= to 77 which is M
      if (asciiNum >= 65 && asciiNum <= 77) {
  
        //Count forward to 13 from the asciiNum since we are using ROT13 cipher,
        //Then convert the Unicode into a char and assign it
        decipheredStr += String.fromCharCode(asciiNum + 13);
  
      //Else if asciiNum is >= 78 which is N, and <= to 90 which is Z
      } else if (asciiNum >= 78 && asciiNum <= 90) {
  
        //Count backward to 13 from the asciiNum since we are using ROT13 cipher,
        //Then convert the Unicode into a char and assign it
        decipheredStr += String.fromCharCode(asciiNum - 13);
  
      //Else we need to pass on spaces, we will just add it to the decipheredStr
      } else {
        decipheredStr += str[i];
      }
    }
  
    return decipheredStr;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
