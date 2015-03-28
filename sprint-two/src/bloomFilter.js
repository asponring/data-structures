var BloomFilter = function(size) {
  this.size = size;
  this.slots = [];
  for (var i = 0; i < this.size; i++) {
    this.slots.push(0);
  }
};

var hash1 = function(value, bloomFilter) {
  return value.charCodeAt(0) % bloomFilter.size;
};
var hash2 = function(value, bloomFilter) {
  return value.charCodeAt(value.length - 1) % bloomFilter.size;
};
var hash3 = function(value, bloomFilter) {
  return value.charCodeAt(1) % bloomFilter.size;
};

BloomFilter.prototype.hashFunctions = [hash1, hash2, hash3];

BloomFilter.prototype.add = function(value) {
  var signature = this.getSignature(value);
  for (var i = 0; i < signature.length; i++) {
    this.slots[signature[i]] = 1;
  }
};

BloomFilter.prototype.contains = function(value) {
  var signature = this.getSignature(value);
  var result = true;
  for (var i = 0; i < signature.length; i++) {
    if (this.slots[signature[i]] !== 1) {
      result = false;
    }
  }
  return result;
};

BloomFilter.prototype.getSignature = function(value) {
  var signature = [];
  for (var i = 0; i < this.hashFunctions.length; i++) {
    signature.push(this.hashFunctions[i](value, this));
  }
  return signature;
};

var bloomFilter = new BloomFilter(18);
bloomFilter.add("cat");
bloomFilter.add("dog");
bloomFilter.add("animals");
console.log(bloomFilter.contains("cat"));
console.log(bloomFilter.contains("animals"));
console.log(bloomFilter.contains("animal"));
console.log(bloomFilter.contains("buffalo56"));