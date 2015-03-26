var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
  var traverser = function(tree){
    if(tree.value === target){
      result = true;
      return;
    }
    if(tree.value !== target && tree.children.length === 0){
      return;
    }
    _.each(tree.children, traverser);
  };

  traverser(this);

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: if ordered, then O(log(N)), but in worst case O(N)
 */
