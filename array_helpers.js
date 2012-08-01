// Takes a single-dimensional array of numbers and returns the average of those numbers.
Array.prototype.avg = function() {
  var av, num, _i, _len;
  av = 0;
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    num = this[_i];
    av = av + num;
  }
  return av / this.length;
};

// Takes a single-dimensional array and returns a new array with only unique values kept.
Array.prototype.unique = function() {
  var key, output, value, _ref, _results;
  output = {};
  for (key = 0, _ref = this.length; 0 <= _ref ? key < _ref : key > _ref; 0 <= _ref ? key++ : key--) {
    output[this[key]] = this[key];
  }
  _results = [];
  for (key in output) {
    value = output[key];
    _results.push(value);
  }
  return _results;
};