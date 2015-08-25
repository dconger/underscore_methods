function sortBy (collection, iterator) {
    var swap = function (array, i1, i2) {
      var temp = array[i1];
      array[i1] = array[i2];
      array[i2] = temp;
      return array;
    };
  
    var isolatedSort = function (collection, iterator) {
      var switched = true;
      while (switched !== false) {
        switched = false;
        for (var i = 1; i < collection.length; i++) {

          if (iterator(collection[i - 1]) > iterator(collection[i])) {
            collection = swap(collection, (i - 1), i);
            switched = true;
          }
        }
      }
      return collection;
    };
  
    if (typeof iterator === 'string') {
      return isolatedSort(collection, property(iterator));
    } else {
      return isolatedSort(collection, iterator);
    }
};

function property (key) {
  return function(obj) {
    return obj[key];
  };
};

var stooges = [{name: 'larry', age:40}, {name: 'moe', age:60}, {name: 'curly', age:50}]

console.log(sortBy(stooges, 'age'))