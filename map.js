function map(collection, iterator){
	var results = [];

	each(collection, function(value, index){
		results.push(iterator(value, index));
	})

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

function map(collection, iterator){
	return reduce(collection, function(memo, val){
		memo.push(iterator(val));
		return memo;
	},[]);
};