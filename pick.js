function each(collection, iterator){
  if(Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      iterator(collection[i],i, collection);
    }
  } else {
    for (var key in collection){
      iterator(collection[key],key, collection);
    }
  }
};

function isFunction(obj){
  return typeof obj === 'function'
};

function isArray(obj){
  return toString.call(obj) === '[object Array]';
};

function isNumber(obj){
  return toString.call(obj) === '[object Number]';
};

// each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
//     ['is' + name] = function(obj) {
//       return toString.call(obj) === '[object ' + name + ']';
//     };
// });

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
    if(iteratee(value, key, obj)){
      result[key] = value;
    }
  }
  
  return result;
};
  
function optimize(func){
  return function (/* arguments from line 47 being passed in*/) {
    return func.apply(this, arguments); // You can pass in more arguments than the function is looking for, so this is a way to 
    // Hey, those arguments that are being passed in, take those and use them as your own arguments.
  }
};

pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return isNumber(value);
});