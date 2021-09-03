// with looping
const compress = (str) => {
  console.log(str)
  let counter = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      counter++;
      console.log('counter', counter)


    } else {
      if (counter === 1) {
        result += `${str[i]}`
      } else {
        result += `${counter}${str[i]}`
      }
      counter = 1;
    } 

  }
  console.log('result', result)
  return result;
}

compress('aaabccdddda')

// recursively
const compress1 = (str, idx = 0, counter = 1, result = "") => {
  if (idx === str.length) {
    console.log('recursive', result)
    return result;
  }
  if (str[idx] === str[idx + 1]) {
    counter++
  } else {
    if (counter === 1) {
      result += `${str[idx]}`
    } else {
      result += `${counter}${str[idx]}`
    }
    counter = 1;
  }

  return compress1(str, ++idx, counter, result)
}

compress1('aaabccdddda')
compress1('potatoo')
compress('')