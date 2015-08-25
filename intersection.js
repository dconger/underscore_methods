function each (collection, iterator) {
  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};

function every (collection, test) {
  for (var i = 0; i < collection.length; i++){
    if(!test(collection[i])){
      return false;
    }
  }
  return true;
};

function some(collection, test) {
  for (var i = 0; i < collection.length; i++) {
    if(test(collection[i])){
      return true;
    }
  }
  return false;
};


function intersection () {
  var args = Array.prototype.slice.call(arguments, 0);
  var results = [];

  each(args[0], function (value) {
    var all_arrays_have_value = every(args, function (array) {
      return some(array, function (val) {
        return val === value;
      })
    });

    if (all_arrays_have_value){
      results.push(value);
    }
  });

  return results;
}

console.log(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]))

function each(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};

function every(collection, test){
  return collection.reduce(function(memo, value) {
    if(!test(value)){
      return false;
    } else {
      return memo;
    }
  }, true);
};


function some(collection, test){
  for (var i = 0; i < collection.length; i++) {
    if(test(collection[i])){
      return true;
    }
  }
  
  return false;
};


function intersection () {
  var args = Array.prototype.slice.call(arguments, 0);
  var results = [];
  
  each(args[0], function(value){
    var all_have_value = every(args.slice(1), function(array){
      return some(array, function(val){
        return val === value;
      })
    })
    
    if(all_have_value){
      results.push(value);
    }
  });
  
  return results;
};

function indexOf(array, target) {
  var result = -1;
  
  each(array, function(value, index) {
    if (value === target && result === -1){
      result = index;
    }
  });
  
  return result;
};

function contains(array, target){
  return indexOf(array, target) >= 0;
};

console.log('Dan', intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));

function intersection () {
  var args = Array.prototype.slice.call(arguments, 0);
  var results = [];
  
  each(args[0], function(value) {
    var all_have_value = every(args.slice(1), function(array){
      return contains(array, value);
    })
    
    if (all_have_value){
      results.push(value);
    }
  });
  
  return results;
};

