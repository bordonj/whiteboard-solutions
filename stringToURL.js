// stringToURl recursive
const stringToURL = (string, idx = 0, newStr = "") => {

  if (idx === string.length) {
    console.log(newStr)
    return newStr;
  }
  if (string[idx] === " ") { // if char is a space
    newStr += '%20' 
  } else { // if char is not space
    newStr += string[idx];
  }
  return stringToURL(string, ++idx, newStr);
}

stringToURL("jenn b");
stringToURL("Jasmine Ann Jones");
stringToURL('jenn godfrey arthur john')

// loops
const stringToURL1 = (string) => {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      newStr += "%20"
    } else newStr += string[i];
  }
  console.log('newStr', newStr)
  return newStr;
}

stringToURL1('jenn b')
stringToURL1('jenn godfrey arthur john')