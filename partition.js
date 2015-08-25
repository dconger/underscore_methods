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


function some(collection, test) {
  for (var i = 0; i < collection.length; i++) {
    if(test(collection[i])){
      return true;
    }
  }
  return false;
};


function difference () {
	var args = Array.prototype.slice.call(arguments, 0);
	var results = [];

	each(args[0], function (value) {
		var some_arrays_have_property = some(args.slice(1), function (array) {
			return some(array, function (val) {
				return val === value;
			});
		});

		if (!some_arrays_have_property) {
			results.push(value);
		}
	});

	return results;
};

function partition(array, test){
	var pass_test_array = array.filter(test);
	return [pass_test_array, difference(array, pass_test_array)];
};

function isOdd(num){
  return num % 2 !== 0;
};

console.log(partition([0, 1, 2, 3, 4, 5], isOdd));