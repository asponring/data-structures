var Stack = function() {
  var someInstance = Object.create(Stack.prototype);

  someInstance.storage = {};
  someInstance.numItems = 0;
  return someInstance;
};

var stackMethods = {};

Stack.prototype.push = function(val) {
  this.storage[this.numItems++] = val;
};

Stack.prototype.pop = function() {
  if (this.numItems > 0) {
    return this.storage[--this.numItems];
  }
  return;
};

Stack.prototype.size = function() {
  return this.numItems;
};
