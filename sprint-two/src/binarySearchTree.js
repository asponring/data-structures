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

BinarySearchTree.prototype.breadthFirstLog = function(fn, tree){
  if (tree === undefined) {
    tree = this;
  }
  var q = new Queue();
  q.enqueue(tree);
  while (q.size() > 0) {
    var current = q.dequeue();

  }
  // var enqFn = function(val){
  //   q.enqueue(val);
  // };
  // var boundEnqueue = Queue.prototype.enqueue.bind(q);
  this.depthFirstLog(enqFn, this);

  // if (tree === undefined) {
  //   tree = this;
  // }
  // if (tree === null) {
  //   return;
  // }
  // fn(tree.value);
  // this.depthFirstLog(fn, tree.left);
  // this.depthFirstLog(fn, tree.right);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(logN)
 * contains: O(logN)
 * depthFirstLog: O(logN)
 */

//extra credit code below
var Queue = function() {
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

