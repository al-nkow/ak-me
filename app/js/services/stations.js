(function(){

	myApp.service('stations', function() {
		this.list = [

			// - красная ветка
			{
				name: 'Девяткино',
				color: 'red',
				left: 305,
				top: 27
			},{
				name: 'Гражданский проспект',
				color: 'red',
				left: 305,
				top: 43
			},{
				name: 'Академическая',
				color: 'red',
				left: 305,
				top: 59
			},{
				name: 'Политехническая',
				color: 'red',
				left: 305,
				top: 75
			},{
				name: 'Площадь мужества',
				color: 'red',
				left: 305,
				top: 91
			},{
				name: 'Лесная',
				color: 'red',
				left: 305,
				top: 107
			},{
				name: 'Выборгская',
				color: 'red',
				left: 305,
				top: 123
			},{
				name: 'Площадь Ленина',
				color: 'red',
				left: 305,
				top: 139
			},{
				name: 'Чернышевская',
				color: 'red',
				left: 305,
				top: 155
			},{
				name: 'Площадь Восстания',
				color: 'red',
				left: 303,
				top: 176
			},{
				name: 'Владимирская',
				color: 'red',
				left: 268,
				top: 210
			},{
				name: 'Пушкинская',
				color: 'red',
				left: 213,
				top: 265
			},{
				name: 'Технологический инст. 1',
				color: 'red',
				left: 30,
				top: 307,
				before: true
			},{
				name: 'Балтийская',
				color: 'red',
				left: 74,
				top: 356,
				before: true
			},{
				name: 'Нарвская',
				color: 'red',
				left: 86,
				top: 373,
				before: true
			},{
				name: 'Кировский завод',
				color: 'red',
				left: 42,
				top: 390,
				before: true
			},{
				name: 'Автово',
				color: 'red',
				left: 99,
				top: 407,
				before: true
			},{
				name: 'Ленинский проспект',
				color: 'red',
				left: 23,
				top: 424,
				before: true
			},{
				name: 'Проспект Ветеранов',
				color: 'red',
				left: 23,
				top: 441,
				before: true
			},
			// - красная ветка
			// - синяя ветка
			{
				name: 'Парнас',
				color: 'blue',
				left: 171,
				top: 27
			},{
				name: 'Пр. Просвещения',
				color: 'blue',
				left: 171,
				top: 43
			},{
				name: 'Озерки',
				color: 'blue',
				left: 171,
				top: 59
			},{
				name: 'Удельная',
				color: 'blue',
				left: 171,
				top: 75
			},{
				name: 'Пионерская',
				color: 'blue',
				left: 171,
				top: 91
			},{
				name: 'Черная речка',
				color: 'blue',
				left: 171,
				top: 107
			},{
				name: 'Петроградская',
				color: 'blue',
				left: 171,
				top: 123
			},{
				name: 'Горьковская',
				color: 'blue',
				left: 171,
				top: 139
			},{
				name: 'Невский проспект',
				color: 'blue',
				left: 171,
				top: 176
			},{
				name: 'Сенная пл.',
				color: 'blue',
				left: 171,
				top: 211
			},{
				name: 'Технологический инст. 2',
				color: 'blue',
				left: 30,
				top: 317,
				before: true
			},{
				name: 'Фрунзенская',
				color: 'blue',
				left: 171,
				top: 342
			},{
				name: 'Московские ворота',
				color: 'blue',
				left: 171,
				top: 358
			},{
				name: 'Электросила',
				color: 'blue',
				left: 171,
				top: 374
			},{
				name: 'Парк Победы',
				color: 'blue',
				left: 171,
				top: 390
			},{
				name: 'Московская',
				color: 'blue',
				left: 171,
				top: 406
			},{
				name: 'Звездная',
				color: 'blue',
				left: 171,
				top: 422
			},{
				name: 'Купчино',
				color: 'blue',
				left: 171,
				top: 438
			},
			// - синяя ветка
			// - зеленая ветка
			{
				name: 'Приморская',
				color: 'green',
				left: 35,
				top: 120,
				before: true
			},{
				name: 'Василеостровская',
				color: 'green',
				left: -1,
				top: 136,
				before: true
			},{
				name: 'Гостиный двор',
				color: 'green',
				left: 171,
				top: 187
			},{
				name: 'Маяковская',
				color: 'green',
				left: 303,
				top: 187
			},{
				name: 'Пл.Александра Невского 1',
				color: 'green',
				left: 442,
				top: 231
			},{
				name: 'Елизаровская',
				color: 'green',
				left: 362,
				top: 267,
				before: true
			},{
				name: 'Ломоносовская',
				color: 'green',
				left: 351,
				top: 283,
				before: true
			},{
				name: 'Пролетарская',
				color: 'green',
				left: 361,
				top: 299,
				before: true
			},{
				name: 'Обухово',
				color: 'green',
				left: 394,
				top: 315,
				before: true
			},{
				name: 'Рыбацкое',
				color: 'green',
				left: 385,
				top: 331,
				before: true
			}
			// - зеленая ветка
			// - желтая ветка
			,{
				name: 'Спасская',
				color: 'yellow',
				left: 171,
				top: 221
			},{
				name: 'Достоевская',
				color: 'yellow',
				left: 268,
				top: 221
			},{
				name: 'Лиговский пр.',
				color: 'yellow',
				left: 362,
				top: 221
			},{
				name: 'Пл.Александра невского 2',
				color: 'yellow',
				left: 442,
				top: 242
			},{
				name: 'Новочеркасская',
				color: 'yellow',
				left: 474,
				top: 283
			},{
				name: 'Ладожская',
				color: 'yellow',
				left: 474,
				top: 299
			},{
				name: 'Пр.Большевиков',
				color: 'yellow',
				left: 474,
				top: 315
			},{
				name: 'Улица Дыбенко',
				color: 'yellow',
				left: 474,
				top: 331
			}
			// - желтая ветка
			// - фиолетовая ветка
			,{
				name: 'Комендантский пр.',
				color: 'violet',
				left: 29,
				top: 27,
				before: true
			},{
				name: 'Старая деревня',
				color: 'violet',
				left: 48,
				top: 43,
				before: true
			},{
				name: 'Крестовский остров',
				color: 'violet',
				left: 22,
				top: 59,
				before: true
			},{
				name: 'Чкаловская',
				color: 'violet',
				left: 71,
				top: 75,
				before: true
			},{
				name: 'Спортивная',
				color: 'violet',
				left: 71,
				top: 91,
				before: true
			},{
				name: 'Адмиралтейская',
				color: 'violet',
				left: 42,
				top: 201,
				before: true
			},{
				name: 'Садовая',
				color: 'violet',
				left: 121,
				top: 232,
				before: true
			},{
				name: 'Звенигородская',
				color: 'violet',
				left: 213,
				top: 276
			},{
				name: 'Обводный канал',
				color: 'violet',
				left: 237,
				top: 299
			},{
				name: 'Волковская',
				color: 'violet',
				left: 253,
				top: 315
			},{
				name: 'Бухарестская',
				color: 'violet',
				left: 269,
				top: 331
			},{
				name: 'Международная',
				color: 'violet',
				left: 284,
				top: 347
			}
			// - фиолетовая ветка


		];
	});
	
})();