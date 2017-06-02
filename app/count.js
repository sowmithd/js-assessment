exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
	  var time;
	  function countTime(){
		  console.log(start++);
		if(start <= end){
			time = setTimeout(countTime, 100);
		}
	  }
	  
	  countTime();
  }
};
