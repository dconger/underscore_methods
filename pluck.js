function pluck (collection, key) {
  return collection.map(function(item) {
    return item[key];
  });
};