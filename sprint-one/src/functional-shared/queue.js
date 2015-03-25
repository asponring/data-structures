var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance={};
  someInstance.storage = {};
  someInstance.entrance = 0;
  someInstance.exit = 0;

  return _.extend(someInstance, queueMethods);
};

var queueMethods = {
  size : function(){
    return this.entrance - this.exit;
  },

  enqueue : function(val){
    this.storage[this.entrance++] = val;
  },

  dequeue : function (){
    if(this.exit < this.entrance){
      return this.storage[this.exit++];
    }
    return;
  }
};



