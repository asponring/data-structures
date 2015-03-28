var BloomFilter = function(size) {
  this.size = size;
  this.slots = [];
  for (var i = 0; i < this.size; i++) {
    this.slots.push(0);
  }
};

var hash1 = function(value, bloomFilter) {
  var hash = 0;
  for (var i = 0; i < value.length; i++) {
    hash += value.charCodeAt(i);
  }
  return hash % bloomFilter.size;
};
var hash2 = function(value, bloomFilter) {
  var hash = 0;
  for (var i = 0; i < value.length; i++) {
    hash = (hash<<5) + hash + value.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % bloomFilter.size;
};
var hash3 = function(value, bloomFilter) {
  // return value.charCodeAt(1) % bloomFilter.size;
  var result = 0;
  for (var i = 0; i < value.length; i++) {
    result = result * 33 + value.charCodeAt(i);
  }
  return result % bloomFilter.size;
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

//simple tests below
var bloomFilter = new BloomFilter(18);

var substrate = "We the people of the United States";
substrate = substrate.split(" ");
for (var i = 0; i < substrate.length; i++) {
  bloomFilter.add(substrate[i]);
}
var notInFilter = "We the people of the United States";
notInFilter = notInFilter.split(" ");