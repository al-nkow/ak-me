(function(){

	myApp.service('uphold', function() {
		this.data = function() {
			var num = Math.round(this.getRandom(0, this.messages.length - 1));
			return this.messages[num];
		};
		this.getRandom = function (min, max) {
			return Math.random() * (max - min) + min;
		};
		this.messages = [
			'msg1', 'msg2'
		]
	});
	
})();