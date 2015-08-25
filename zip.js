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

function pluck (collection, key) {
  return collection.map(function(item) {
    return item[key];
  });
};

function zip () {
	var arrays = Array.prototype.slice.call(arguments);
	var max = Math.max.apply(null, pluck(arrays, 'length'));
	var result = [];

	each(arrays, function (arr, index) {
		for (var i = 0; i < max; i++) {
			result[ii] = result[ii] || [];
			result[ii].push(arr[ii]);
		}
	});

	return result;
};