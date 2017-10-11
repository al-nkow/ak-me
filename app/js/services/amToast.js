;(function(){

	// выводит сообщение
	// type - тип 'success' или 'alert'
	// time - длительность мс
	// text - текст сообщения
	// position - позиция 'bottom left' итд

	myApp.service('amToast', function ($mdToast) {

		this.show = function(type, time, text, position) {
			var pos = position || 'top right';
			$mdToast.show(
				$mdToast.simple()
				.toastClass(type)
				.hideDelay(time)
				.textContent(text)
				.position(pos)
			);
		};

	});
	
})();