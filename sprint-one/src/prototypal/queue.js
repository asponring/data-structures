var Queue = function() {
  var someInstance = Object.create(Queue.prototype);
  someInstance.storage = {};
  someInstance.entrance = 0;
  someInstance.exit = 0;

  return someInstance;
};

var queueMethods = {};

Queue.prototype.size = function() {
  return this.entrance - this.exit;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.entrance++] = val;
};

Queue.prototype.dequeue = function() {
  if (this.exit < this.entrance) {
    return this.storage[this.exit++];
  }
  return;
};

