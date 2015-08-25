function without(array){
  var args = Array.prototype.slice.call(arguments, 1);
  var results = [];
  
  each(array, function(value, index){
    if(!contains(args, value)){
      results.push(value);
    }
  });
  
  return results;
};

function without(array){
  var args = Array.prototype.slice.call(arguments, 1); [0, 1]
  return difference(array, args);
};