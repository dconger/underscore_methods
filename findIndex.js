function findIndex(array, test){
	var result = -1;

	each(array, function(value, index){
		if(test(value) && result === -1){
			result = index
		}
	})

	return result;
};