var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if(!this._storage.get(i)){
    this._storage.set(i,[]);
  }
  var bucket = this._storage.get(i);
  bucket.push(tuple);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result = _.find(bucket, function(elem, i) {
    return elem[0] === k;
  });
  // console.log("result is: ", result);
  return (result === undefined) ? null :result[1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var newBucket = _.reject(bucket, function(elem, i){
    return elem[0] === k;
  });
  this._storage.set(i, newBucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1)
 * retrieve: O(1)
 * remove: O(1)
 * Assuming that the buckets don't get too big...
 */
