function extend (obj) {
	var args = Array.prototype.slice.call(arguments, 1);

	for (var i = 0; i < args.length; i++) {
		for (var key in args[i]) {
			if (args[i].hasOwnProperty(key) && obj[key] === undefined) {
				obj[key] = args[i][key];
			}
		}
	}
	return obj;
};