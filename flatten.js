function flatten (nestedArray) {
	var result = [];

	each(nestedArray, function(value){
		if(Array.isArray(value)){
			result = result.concat(flatten(value));
		} else {
			result.push(value);
		}
	})

	return result;
};

