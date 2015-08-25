function delay (func, wait) {
	var args = Array.prototype.slice.call(arguments, 2);
	setTimeout(function () {
  		func.apply(null, args);
	}, wait);
};

var log = _.bind(console.log, console);

delay(log, 1000, 'logged later');
'logged later' // Appears after one second.