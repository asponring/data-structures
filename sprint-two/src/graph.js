var Graph = function(){
  this.vertices = {};
  this.edges = []; // array of objects with two properties, each prop pointing to a node.
};

Graph.prototype.addNode = function(node){
  this.vertices[node] = node;
};

Graph.prototype.contains = function(node){
  return this.vertices.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  if (this.contains(node)) {
    delete this.vertices[node];
  }
  this.removeEdge(node);
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.some(this.edges, function(elem){
    return elem.hasOwnProperty(fromNode) && elem.hasOwnProperty(toNode);
  });
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var newEdge = {};
  if(!this.hasEdge(fromNode, toNode)){
    newEdge[fromNode] = fromNode;
    newEdge[toNode] = toNode;
    this.edges.push(newEdge);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this.edges = _.reject(this.edges, function(elem){
    if (toNode) {
      return elem.hasOwnProperty(fromNode) && elem.hasOwnProperty(toNode);
    } else {
      return elem.hasOwnProperty(fromNode);
    }
  });
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.vertices, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(1)
 * removeNode: O(N)
 * hasEdge: O(N)
 * addEdge: O(N)
 * removeEdge: O(N)
 * forEachNodeL O(N)
 */



