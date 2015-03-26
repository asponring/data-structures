var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.entrance = 0;
  someInstance.exit = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.entrance - this.exit;
};

queueMethods.enqueue = function(val) {
  this.storage[this.entrance++] = val;
};

queueMethods.dequeue = function() {
  if (this.exit < this.entrance) {
    return this.storage[this.exit++];
  }
  return;
};

