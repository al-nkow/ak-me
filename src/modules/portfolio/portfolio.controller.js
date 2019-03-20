export default class PortfolioController {
    constructor() {
        this.projects = [
            {
                order: 6,
                sref: 'root.portfolio.sota',
                imgUrl: '/images/bgsota.jpg',
                desc: {
                    logo: '/images/sota-logo.png',
                    head: 'SOTA',
                    title: 'Интерактивный контроль строительства',
                }
            },
            {
                order: 4,
                sref: 'root.portfolio.fitness',
                imgUrl: '/images/bgfitness.jpg',
            },
            {
                order: 5,
                sref: 'root.portfolio.utmc',
                imgUrl: '/images/bgutmc2.jpg',
                desc: {
                    head: 'UTMC',
                    title: 'Unemployment Tax Management Corporation',
                }
            },
            {
                order: 3,
                sref: 'root.portfolio.hrportal',
                imgUrl: '/images/bghr.jpg',
            },
            {
                order: 7,
                sref: 'root.portfolio.gali',
                imgUrl: '/images/bggali.jpg',
            },
            {
                order: 8,
                sref: 'root.portfolio.fundsource',
                imgUrl: '/images/bgfundsource.jpg',
                desc: {
                    head: 'FundSource',
                    title: 'Crowdfunding platform',
                }
            },
            {
                order: 1,
                sref: 'root.portfolio.zypmedia',
                imgUrl: '/images/bgzypmedia.jpg',
                desc: {
                    head: 'ZypMedia',
                    title: 'The first local-focused, full-stack, omnichannel platform',
                }
            },
            {
                order: 9,
                sref: 'root.portfolio.potolok',
                imgUrl: '/images/bgpotolok.jpg',
            },
            {
                order: 2,
                sref: 'root.portfolio.prokach',
                imgUrl: '/images/bgprokach.jpg',
            },
            {
                order: 10,
                sref: 'root.portfolio.trafficstars',
                imgUrl: '/images/bgtrafficstars.jpg',
            },
            {
                order: 11,
                sref: 'root.portfolio.runative',
                imgUrl: '/images/bgrunative.jpg',
            },
        ];
    }
}

