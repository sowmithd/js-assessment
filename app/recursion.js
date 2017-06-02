exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
	var listOfFiles = [];
    var dirs = [];

    function processDir(dir) {
      var i;
      var len;
      var file;
      var files = dir.files;

      dirs.push( dir.dir );

      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    processDir(data);


    return listOfFiles;
  },

  permute: function(arr) {
	var temp = [];
    var answer = [];

    function logResult() {
      answer.push(
        temp.slice()
      );
	  function doIt() {
      var i;
      var len;
      var item;

      for (i = 0, len = arr.length; i < len; i+=1) {
        item = arr.splice(i, 1)[0];

        temp.push(item);

        if (arr.length) {
          doIt();
        } else {
          logResult();
        }

        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    return doIt();
  }
  },

  fibonacci: function(n) {
	 var a = 0, b = 1, f = 1, arr= [];
    for(var i = 2; i <= n; i++) {
		arr.push(f);
        f = a + b;
        a = b;
        b = f;
    }
	arr.push(f);
    return arr;
  },

  validParentheses: function(n) {
	var pairs={
    "\(" : "\)",
    "\{" : "\}",
    "\[" : "\]"
	};
	var open=[];
	for(var i = 0; i<n.length; i++){
		if(n[i] in pairs){
        open.push(n[i]);
		}
		else {
        var current = open.pop();
			if(current === undefined || pairs[current] !== n[i]){
            return false;
			}
		}
	}
	return open.length === 0;
  }
};
