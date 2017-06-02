exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
	return arr.indexOf(item);
  },

  sum: function(arr) {
	var arr = [1,2,3];
	var sum = 0;
	for(var i=0; i<arr.length;i++){ 
		sum += arr[i];
	}
	console.log("Sum: "+i);
  },

  remove: function(arr, item) {
		var arr = [1,2,3];
		var flag= false;
		for(var i=0; i<arr.length;i++){
			if(arr[i] == item){
				arr.splice(i,1);
				break;
			}
			else if(flag){
				console.log("given element does not exist");
			}
		}
  },

  removeWithoutCopy: function(arr, item) {
	
	var temp = [];
	while (arr.length > 0) {
    var result = arr.shift()
    if (result !== item) {
      temp.unshift(result);
    }
  }
  while (temp.length > 0) {
    arr.unshift(temp.shift());
  }
  return arr;
  },

  append: function(arr, item) {
	var arr = [1,2,3];
	arr.push(item);
	return arr;
  },

  truncate: function(arr) {
	var arr = ['apple', 'mango', 'rocket', 'moon', 'tiger'];
	arr.splice(2); 
	return arr;
  },

  prepend: function(arr, item) {
	var arr = [1,2,3];
	arr.unshift(0);
	return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    var i,
      arrLen = arr.length;

    for (i = 0; i < arrLen; i += 1) {
      if (i === index) {
        arr.splice(i, 0, item);
        arrLen += arrLen;
      }
    }
    return arr;
  },

  count: function(arr, item) {
var i,
      count = 0,
      arrLength = arr.length;
    
    for (i = 0; i < arrLength; i += 1) {
      if (arr[i] === item) {
        count += 1;
      }
    }
    return count;
  },

  duplicates: function(arr) {
var i,
      counts = [],
      duplicates = [],
      arrLength = arr.length,
      countsLength;
    
    for (i = 0; i < arrLength; i += 1) {
      if (counts[arr[i]] === undefined) {
        counts[arr[i]] = 1;
      } else {
        counts[arr[i]] += 1;
      }
    }
    
    countsLength = counts.length;
    for (i = 0; i < countsLength; i += 1) {
      if (counts[i] > 1) {
        duplicates.push(i);
      }
    }
    return duplicates;
  },

  square: function(arr) {
var i,
      arrLength = arr.length;
    
    for (i = 0; i < arrLength; i += 1) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
var i,
      counts = [],
      duplicates = [],
      arrLength = arr.length,
      countsLength;
    
    for (i = 0; i < arrLength; i += 1) {
      if (arr[i] === target) {
        duplicates.push(i);
      }
    }
    
    return duplicates;
  }
  }
};
