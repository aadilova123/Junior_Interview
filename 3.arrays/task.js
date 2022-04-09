function compareArrays(arr1, arr2) {
  let result = false;
  
  if(arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])){
    result = true;
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(item => item > 0 && item % 3 == 0);
  let newArr = [];
  newArr = resultArr.map(elem => {
    return elem * 10
  });
  return newArr; // array
}
