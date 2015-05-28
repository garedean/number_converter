var binaryToInteger = function(binaryValue) {

  var binArray = binaryValue.split("");
  binArray = binArray.reverse();
  var output = 0;
  binArray.forEach(function(value, index) {
    value = parseInt(value);
    if (value === 1) {
      output += Math.pow(2, index);
    }
  });
  return output;
};

var trinaryToInteger = function(binaryValue) {
  var ternArray = binaryValue.split("").reverse();

  var output = 0;
  ternArray.forEach(function(value, index) {
    value = parseInt(value);
    output += (value * Math.pow(3, index));
  });
  return output;
};

var hexToInteger = function(input) {
  var hexArray = input.split("").reverse();
  var hexHash = {"1":1,
                 "2":2,
                 "3":3,
                 "4":4,
                 "5":5,
                 "6":6,
                 "7":7,
                 "8":8,
                 "9":9,
                 "A":10,
                 "B":11,
                 "C":12,
                 "D":13,
                 "E":14,
                 "F":15,
                 "G": 16};
  var output = 0;
  hexArray.forEach(function(symbol, index)  {
    symbol = hexHash[symbol];
    output += (symbol * Math.pow(16, index));
  });

  return output;
};
