var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.numItems = 0;
};

Stack.prototype.push = function(val){
  this.storage[this.numItems++] = val;
};

Stack.prototype.pop = function(){
  if(this.numItems > 0){
    return this.storage[--this.numItems];
  }
  return;
};

Stack.prototype.size = function(){
  return this.numItems;
};



