function once(func){
	var alreadyCalled = false;
	var result;

	return function () {
		if(!alreadyCalled){
			result = func.apply(this, arguments);
			alreadyCalled = true;
		}

		return result;
	}
};