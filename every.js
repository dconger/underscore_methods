function every (collection, test) {
    return collection.reduce(function (memo, val) {
      if (!test(val)) {
        return false;
      } else {
        return memo;
      }
    }, true);
};

function every (collection, test) {
  for (var i = 0; i < collection.length; i++){
    if(!test(collection[i])){
      return false;
    }
  }
  return true;
};

every([0,2,4,6], function(item) {
	return item % 2 === 0;
});