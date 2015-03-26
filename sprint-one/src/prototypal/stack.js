var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.numItems = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.numItems++] = val;
};

stackMethods.pop = function() {
  if (this.numItems > 0) {
    return this.storage[--this.numItems];
  }
  return;
};

stackMethods.size = function() {
  return this.numItems;
};
