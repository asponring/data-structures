var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var entrance = 0;
  var exit = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[entrance++] = value;
  };

  someInstance.dequeue = function(){
    if (exit < entrance) {
      return storage[exit++];
    }
    return;
  };

  someInstance.size = function(){
    return entrance - exit;
  };

  return someInstance;
};
