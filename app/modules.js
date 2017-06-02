exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
	return {
      greetPerson: function() {
        return this.message + ', ' + this.name;
      },
	message: str1,
    name: str2
    };
  }
};
