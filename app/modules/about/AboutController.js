angular.module('myApp.about', []).controller('AboutCtrl', AboutCtrlFunc);
function AboutCtrlFunc($scope) {
	
	var self = this;

	this.skills = {
		develope: ['AngularJS', 'Angular Material', 'ReactJS', 'Redux', 'JavaScript', 'ES6', 'Jsx', 'Babel', 'D3.js', 'Underscore.js', 'CoffeeScript', 'Hundlebars', 'HTML5', 'CSS3', 'Jade (Pug)', 'Stylus', 'LESS', 'SASS', 'BEM', 'Git', 'Grunt', 'Gulp', 'Webpack', 'Bootstrap', 'Foundation', 'PHP', 'SQL', 'Linux', 'Agile Scrum', 'REST APIs', 'Yandex Maps API'],
		cms: ['Wordpress', 'Joomla', '1C-Bitrix', 'Simpla', 'UMI'],
		design: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Lightroom']
	};

	this.experience = [
		{
			date: '2015 - in present',
			name: 'SOTA SYSTEM (Megamade group companies)',
			link: {title: 'www.sotasystem.ru', go: 'http://www.sotasystem.ru/'},
			unit: 'Frontend developer'
		},{
			date: '2013 - 2015',
			name: 'Kelnik Studios',
			link: {title: 'www.kelnik.ru', go: 'http://www.kelnik.ru/'},
			unit: 'Frontend developer'
		},{
			date: '2012 - 2013',
			name: 'Freelance',
			unit: 'Web developer'
		}
	];

	this.education = [
		/*{
			date: '2014 - 2014',
			name: 'Loftschool',
			link: {title: 'www.loftschool.com', go: 'https://loftschool.com/'},
			unit: 'Advanced course on web development'
		},*/{
			date: '2000 - 2006',
			name: 'State University of Aerospace Instrumentation',
			link: {title: 'www.suai.ru', go: 'http://suai.ru/'},
			unit: 'Institute of computing systems and programming'
		}
	];

};

