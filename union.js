function union () {
	var args = Array.prototype.slice.call(arguments, 0);

	return uniq(flatten(args));
};

function uniq(array){
	return filter(array, function(value, index){
		return array.indexOf(value) === index;
	})
};

function flatten(nestedArray){
	var result = [];

	each(nestedArray, function(value){
		if(Array.isArray(value)){
			result = result.concat(flatten(value));
		} else {
			result.push(value);
		}
	});

	return result;
};