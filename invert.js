function keys(obj){
  var results = [];
  
  for (var key in obj){
    results.push(key);
  }
  
  return results;
};

function values(obj){
  var results = [];
  var theKeys = keys(obj);
  
  for (var i = 0; i < theKeys.length; i++){
    results.push(obj[theKeys[i]]);
  }
  
  return results;
};

function invert(obj){
  var result = {};
  
  var theKeys = keys(obj);
  var theValues = values(obj);
  
  for (var i = 0; i < theKeys.length; i++){
    result[theValues[i]] = theKeys[i] 
  }
  
  return result;
};