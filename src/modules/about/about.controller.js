export default class AboutController {

    constructor() {
        this.skills = {
            develope: [
                'ReactJS',
                'Redux',
                'ES6',
                'Vue',
                'Vuex',
                'Nuxt',
                'GraphQL',
                'Apollo',
                'Angular 4',
                'TypeScript',
                'AngularJS',
                // 'Material',
                'JavaScript',
                // 'Jsx',
                'Node.js',
                'MongoDB',
                'AWS',
                'Express',
                'Babel',
                'D3.js',
                // 'Underscore.js',
                'CoffeeScript',
                'Jasmine',
                'Karma',
                'Hundlebars',
                'HTML5',
                'CSS3',
                'Jade (Pug)',
                'Stylus',
                'LESS',
                'SCSS',
                // 'BEM',
                'Webpack',
                'Gulp',
                'Grunt',
                'Git',
                'Bootstrap',
                'Foundation',
                'PHP',
                'SQL',
                'Linux',
                // 'Agile Scrum',
                'REST APIs',
                // 'Yandex Maps API'
            ],
            cms: ['Wordpress', 'Joomla', '1C-Bitrix', 'Simpla', 'UMI'],
            design: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Lightroom']
        };

        this.experience = [
            {
                date: '2019 - in present',
                name: 'Trafficstars',
                link: {title: 'www.trafficstars.com', go: 'https://trafficstars.com/'},
                unit: 'Frontend developer'
            },{
                date: '2017 - 2019',
                name: 'BeKitzur LLC',
                link: {title: 'www.bekitzur.com', go: 'http://www.bekitzur.com/'},
                unit: 'Frontend developer'
            },{
                date: '2015 - 2017',
                name: 'SOTA SYSTEM (Megamade group companies)',
                link: {title: 'www.sotasystem.ru', go: 'http://www.sotasystem.ru/'},
                unit: 'Frontend developer'
            },{
                date: '2013 - 2015',
                name: 'Kelnik Studios',
                link: {title: 'www.kelnik.ru', go: 'http://www.kelnik.ru/'},
                unit: 'Frontend developer'
            },{
                date: '2008 - 2013',
                name: 'NEVSKY ENGINEERING COMPANY LLC',
                unit: 'Project manager'
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
    }

}

