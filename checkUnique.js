const checkUnique = (str) => {
  const obj = {};
  let bool = true;

  for (let char of str) {
    console.log(char)
    if (!obj[char]) {
      obj[char] = 1;
    } else obj[char]++;
  }
  
  for (let key in obj) {
    if (obj[key] > 1) {
      bool = false;
    }
  }
  console.log('obj', obj)
  console.log('bool', bool)
  return bool;
}

checkUnique("hello");
checkUnique("copywright");
checkUnique("banana");