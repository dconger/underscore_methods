function group(instructions){
  return function(obj, iterator){
    var result = {};
    iterator = optimize(iterator);
    
    obj.forEach(function(value, index){
      var key = iterator(value, index);
      instructions(result, value, key);
    })
    
    return result;
  }
}

function optimize(iterator){
  if(isFunction(iterator)){
    return iterator;
  } else {
    return property(iterator);
  }
};

function property(key){
  return function(obj){
    return obj[key];
  }
};

function isFunction(obj){
  return typeof obj === 'function';
};

var groupBy = group(function(obj, value, key){
  if(obj.hasOwnProperty(key)){
    obj[key].push(value);
  } else {
    obj[key] = [value];
  }
});

console.log(groupBy([1.3, 2.1, 2.4], function(num){
  return Math.floor(num);
}));