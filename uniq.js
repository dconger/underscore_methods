function uniq(array){
	return filter(array, function(value, index){
		return array.indexOf(value) === index;
	})
};