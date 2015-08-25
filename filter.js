function filter(collection, test){
	var results = [];

	each(collection, function(value){
		if(test(value)){
			results.push(value);
		}
	});

	return results;
};

function reduce(collection, iterator, memo){
	if (memo === undefined){
		memo = collection[0];
	}

	each(collection, function(value){
		memo = iterator(memo, value);
	})

	return memo;
};

function filter(collection, test){
	return reduce(collection, function(memo, val){
		if(test(val)){
			memo.push(val);
		}
		return memo;
	},[]);
};