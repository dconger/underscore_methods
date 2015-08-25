function some(collection, test) {
  for (var i = 0; i < collection.length; i++) {
    if(test(collection[i])){
      return true;
    }
  }
  return false;
};
				

some([0,2,4,6], function(item) {
	return item % 2 === 0;
});

