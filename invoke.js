function isFunction(obj){
	return typeof obj === 'function';
};

function invoke(collection, methodName, args){
	return collection.map(function(value, index){
		return isFunction(methodName) ? methodName : value[methodName].apply(value, args);
	})
}