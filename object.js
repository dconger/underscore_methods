function object(array, values) {
  var result = {};
  
  for (var i = 0; i < array.length; i++) {
    if (values) {
      result[array[i]] = values[i];
    } else {
      result[array[i][0]] = array[i][1];
    }
  }
  
  return result;
};

console.log(object(['moe', 'larry', 'curly'], [30, 40, 50]));
=> {moe: 30, larry: 40, curly: 50}