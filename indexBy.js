function indexBy(obj, iterator){
	var result = {};
	iterator = optimize(iterator);

	each(obj, function(value, index){
		result[iterator] = value;
	})

	return result;
};

function group(instructions){
  return function(obj, iterator){
    var result = {};
    iterator = optimize(iterator);
    
    obj.forEach(function(value, index){
      var key = iterator(value, index);
      instructions(result, value, key);
    })
    
    return result;
  }
};

var indexBy = group(function(result, value, key){
	result[key] = value;
})