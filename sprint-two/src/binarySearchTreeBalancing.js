var BinarySearchTreeBalancing = function(value){
  var instance = Object.create(BinarySearchTreeBalancing.prototype);

  instance.value = value;
  instance.left = null;
  instance.right = null;
  instance.depth = 0;

  return instance;
};

BinarySearchTreeBalancing.prototype.insert = function(val){

  var traverser = function(tree, val){
    if(val === tree.value){
      throw new Error("Oops! Cannot add value that is already in tree.");
    }
    if(val < tree.value && tree.left === null){
      tree.left = BinarySearchTreeBalancing(val);
      return 1;
    }
    if (val < tree.value){
      tree.depth = Math.max(tree.depth, traverser(tree.left, val));
      return tree.depth + 1;
    }
    if(val > tree.value && tree.right === null){
      tree.right = BinarySearchTreeBalancing(val);
      return 1;
    }
    if(val > tree.value){
      tree.depth = Math.max(tree.depth, traverser(tree.right, val));
      return tree.depth + 1;
    }
  };

  this.depth = Math.max(this.depth, traverser(this, val));
};

BinarySearchTreeBalancing.prototype.contains = function(val, tree){
  if (tree === undefined) {
    tree = this;
  }
  if (tree === null) {
    return false;
  }
  return val === tree.value ||
      (this.contains(val, tree.left) || this.contains(val, tree.right));
};

BinarySearchTreeBalancing.prototype.depthFirstLog = function(fn, tree){
  if (tree === undefined) {
    tree = this;
  }
  if (tree === null) {
    return;
  }
  fn(tree.value, tree);
  this.depthFirstLog(fn, tree.left);
  this.depthFirstLog(fn, tree.right);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(logN)
 * contains: O(logN)
 * depthFirstLog: O(logN)
 */

