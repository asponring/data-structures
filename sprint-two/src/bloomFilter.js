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
    hash += value.charCodeAt(i) + i;
  }
  return hash % bloomFilter.size;
};
var hash2 = function(value, bloomFilter) {
  var result = 0;
  for (var i = 0; i < value.length; i++) {
    result = result * 37 + value.charCodeAt(i);
  }
  return result % bloomFilter.size;
};
var hash3 = function(value, bloomFilter) {
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
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

var bloomFilter = new BloomFilter(18);

var inFilter = "We the people of the United States";
inFilter = inFilter.split(" ");
for (var i = 0; i < inFilter.length; i++) {
  bloomFilter.add(inFilter[i]);
}
var substrate = "qoiOOIJDSVsdlkjwmOiKJgNlsdkfoIUYIiBX<WRiOIYYYTBVM86BNm";
for (var i = 0; i < 1e4; i++) {
  var size = getRandomArbitrary(2, 7);
  var start = getRandomArbitrary(0, substrate.length - 8);
  inFilter.push(substrate.slice(start, start + size));
}

var positives = 0;
for (var i = 0; i < inFilter.length; i++) {
  if (bloomFilter.contains(inFilter[i])) {
    positives++;
  }
}
console.log("Rate of positives SHOULD be .00069951\nRate of positives was ACTUALLY " + positives/10007);
