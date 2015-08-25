function range(start, stop, step) {
  if (stop === null) {
    stop = start || 0;
    start = 0;
  }
  
  step = step || 1;
  
  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);
  
  for (var i = 0; i < length; i++, start += step) {
    range[i] = start;
  }
  
  return range;
};