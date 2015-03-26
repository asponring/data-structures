var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    if (this.head === null) {
      this.head = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function(){
    if (this.head === null) {
      return null;
    }
    var result = this.head.value;
    this.head = this.head.next;
    return result;
  };

  list.contains = function(target){
    var f = function(node){
      if(node.value === target){
        return true;
      }
      if(node.next === null){
        return false;
      }
      return f(node.next);
    }

    return f(this.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * contains: O(n)
 * removeHead: O(1)
 * addTail: O(1)
 */
