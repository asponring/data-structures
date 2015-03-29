var BinarySearchTree = function(value){
  var instance = Object.create(BinarySearchTree.prototype);

  instance.value = value;
  instance.left = null;
  instance.right = null;

  return instance;
};

BinarySearchTree.prototype.insert = function(val){

  var traverser = function(tree, val){

    if(val === tree.value){
      return;
    }
    if(val < tree.value && tree.left === null){
      tree.left = BinarySearchTree(val);
      return;
    }
    if (val < tree.value){
      return traverser(tree.left, val);
    }
    if(val > tree.value && tree.right === null){
      tree.right = BinarySearchTree(val);
      return;
    }
    if(val > tree.value){
      return traverser(tree.right, val);
    }
  };
  traverser(this, val);

};

BinarySearchTree.prototype.contains = function(val, tree){
  if (tree === undefined) {
    tree = this;
  }
  if (tree === null) {
    return false;
  }
  return val === tree.value ||
      (this.contains(val, tree.left) || this.contains(val, tree.right));
};

BinarySearchTree.prototype.depthFirstLog = function(fn, tree){
  if (tree === undefined) {
    tree = this;
  }
  if (tree === null) {
    return;
  }
  fn(tree.value);
  this.depthFirstLog(fn, tree.left);
  this.depthFirstLog(fn, tree.right);
};

BinarySearchTree.prototype.breadthFirstLog = function(fn){
  var nodesToTraverse = new Queue();
  var current;

  nodesToTraverse.enqueue(this);
  while (nodesToTraverse.size() > 0) {
    var current = nodesToTraverse.dequeue();
    if (current.left !== null) {
      nodesToTraverse.enqueue(current.left);
    }
    if (current.right !== null) {
      nodesToTraverse.enqueue(current.right);
    }
    fn(current.value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(logN)
 * contains: O(logN)
 * depthFirstLog: O(logN)
 */

 //queue helper class
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
