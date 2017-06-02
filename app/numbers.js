exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
	return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
	return parseInt(str, 10);
  },

  convertToBinary: function(num) {
	return num>0 ? num.toString(2) : (~num).toString(2);
  },

  multiply: function(a, b) {
	var result = a*b;
	return result;
  }
};
