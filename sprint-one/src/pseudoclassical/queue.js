var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.entrance = 0;
  this.exit = 0;
};

Queue.prototype.enqueue = function(val){
  this.storage[this.entrance++] = val;
};

Queue.prototype.dequeue = function(){
  if(this.entrance > this.exit){
    var result = this.storage[this.exit];
    delete this.storage[this.exit++];
    return result;
  }
  return;
};

Queue.prototype.size = function(){
  return this.entrance - this.exit;
};


