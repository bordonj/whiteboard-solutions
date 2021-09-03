// new Set()
const arrayDedupe1 = (arr) => {
  const newArr = [...new Set(arr)]
  console.log('new set', newArr)
}

arrayDedupe1([7, 9, "hi", 12, "hi", 7, 53])

// recursive
const arrayDedupe2 = (arr, index = 0, newArr = []) => {
  if (index === arr.length) {
    console.log('newArr2', newArr);
    return newArr;
  }
  if (!newArr.includes(arr[index])) {
    newArr.push(arr[index])
  }

  return arrayDedupe2(arr, ++index, newArr)
}
arrayDedupe2([7, 9, "hi", 12, "hi", 7, 53]);

// with looping
const arrayDedupe3 = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }
  
  console.log("newArr3", newArr);
  return newArr;
}

arrayDedupe3([7, 9, "hi", 12, "hi", 7, 53]);

// with filter() --- need the index as well
const arrayDedupe4 = (arr) => {
  const newArr = arr.filter((c, i) => arr.indexOf(c) === i);
  console.log('newArr4', newArr);
}
arrayDedupe4([7, 9, "hi", 12, "hi", 7, 53]);