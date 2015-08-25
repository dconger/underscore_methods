function omit (obj, iteratee) {
  if (isFunction(iteratee)) {
    iteratee = negate(iteratee);
  } else {
    var keys = Object.keys(obj);
    iteratee = function(value, key) {
      return !contains(keys, key);
    };
  }
  return pick(obj, iteratee);
};

function negate(func) {
  return function() {
    return !func.apply(this, arguments);
  };
};

function contains(array, target){
  return array.indexOf(target) >= 0;
};

function pick(obj, oiteratee){
  var result = {};
  
  if(isFunction(oiteratee)){
    keys = Object.keys(obj);
    iteratee = optimize(oiteratee);
  } else {
    keys = Array.prototype.slice.call(arguments, 1);
    iteratee = function(value, key, obj){
      return key in obj;
    }
  }
  
  for (var i = 0; i < keys.length; i++){
    var key = keys[i];
    var value = obj[key];
    if(iteratee(value, key, obj)){ // Note: if the value was not a number, then this if statement would return true and the key:value pair would be included in the results.
      result[key] = value;
    }
  }
  
  return result;
};
  
function optimize(func){
  return function () {
    return func.apply(this, arguments); 
  }
};