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
		var some_have = some(args.slice(1), function (array) {
			return some(array, function (val) {
				return val === value;
			});
		});

		if (!some_have) {
			results.push(value);
		}
	});

	return results;
};

console.log(difference([1, 2, 3, 4, 5], [5, 2, 10]));