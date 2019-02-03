import angular    from 'angular';
import uirouter   from '@uirouter/angularjs';

import '@uirouter/angularjs/lib/legacy/stateEvents.js';

// 3rd party libraries
import 'moment';

import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate  from 'angular-animate';
import ngAria     from 'angular-aria';

import routing    from './app.config';
import run        from './app.run';

// Styles
import 'angular-material/angular-material.css';
import '../style/animations.styl';
import '../style/config.styl';
import '../style/fonts.styl';
import '../style/main.styl';

// Services
import amToast   from '../services/toast-service';

// Components
import scrollTop from '../components/scroll-top';

import icons     from '../directives/icons';
import fixTop    from '../directives/fix-top';

// Modules
import home      from '../modules/home';
import main      from '../modules/main';
import menu      from '../modules/menu';
import about     from '../modules/about';
import contacts  from '../modules/contacts';
import fitness   from '../modules/fitness';
import portfolio from '../modules/portfolio';
import sota      from '../modules/sota';
import utmc      from '../modules/utmc';
import hrportal  from '../modules/hrportal';
import gali      from '../modules/gali';
import funds     from '../modules/fundsource';
import zypmedia  from '../modules/zypmedia';
import potolok   from '../modules/potolok';

let hrBase = angular.module('hrBase', [
    // App
    uirouter,
    'ui.router.state.events', // legacy state events
    ngMaterial,
    ngMessages,
    ngAnimate,
    ngAria,
    // Services
    amToast,
    // Components
    scrollTop,
    // Directives
    icons,
    fixTop,
    // ngDirective,
    // Modules
    main,
    home,
    menu,
    about,
    contacts,
    fitness,
    portfolio,
    sota,
    utmc,
    hrportal,
    gali,
    funds,
    zypmedia,
    potolok
]);

hrBase.config(routing);
hrBase.run(run);
export default hrBase;