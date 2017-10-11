;(function(){
	angular.module('myApp.contacts', [])
	.controller('ContactsCtrl', ContactsCtrlFunc)
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('blue-grey') // cyan
			.accentPalette('deep-orange');
	});

	function ContactsCtrlFunc($scope, $http, amToast) {

		var self = this;
		this.letter = {};
		this.emailPattern = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i;

		this.sendMail = function(form) {

			if (form.$invalid) return false;

			var req = {
				method: 'POST',
				url: '/ak-me.ru/mail/mail.php', // изменить на /mail/mail.php
				data: self.letter
			};

			$http(req).then(function(res){
				if (res.status == 200 && res.data == 'Message sent!') {
					amToast.show('success', 2000, 'Your message was successfully sent');
					self.letter = {};
					form.$setPristine();
					form.$setUntouched();
				}
			}, function(err){
				amToast.show('alert', 2000, 'Error. Message not sent.');
				console.log(err);
			});

		}

	};
})();
