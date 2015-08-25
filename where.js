function where(obj, attrs) {
	return obj.filter(function(obj){
		return isMatch(obj, attrs);
	});
};

function isMatch(object, attrs) {
	var keys = keys(attrs),
		length = keys.length;

	for (var i = 0; i < length; i++) {
		var key = keys[i];
		if (attrs[key] !== object[key] || !(key in object)) {
			return false;
		}
	}
	return true;
};


