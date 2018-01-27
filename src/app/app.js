import angular    from 'angular';
import uirouter   from '@uirouter/angularjs';

import '@uirouter/angularjs/lib/legacy/stateEvents.js';

// 3rd party libraries
import 'moment';

import ngMaterial   from 'angular-material';
import ngMessages   from 'angular-messages';
import ngAnimate    from 'angular-animate';
import ngAria       from 'angular-aria';
import ngclipboard  from 'ngclipboard';
import ngFileUpload from 'ng-file-upload';

import routing from './app.config';
import run     from './app.run';

// Styles
import 'angular-material/angular-material.css';
// import '../style/variables.less';
// import '../style/main.less';
// import '../style/candidate.less';
// import '../style/dashboard.less';
// import '../style/layout.less';
// import '../style/material.less';

// Services
// import ConfigService    from '../services/config-service';
// import SpinnerService   from '../services/spinner-service';
// import CandidateService from '../services/candidate-service';
// import SampleService    from '../services/sample-service';
// import InsertAtCaret    from '../services/insert-at-caret-service';
// import HhService        from '../services/hh-service';

// Components
// import resumeFilter     from '../components/resume-filter';
// import rangePicker      from '../components/range-picker';
// import profileCell      from '../components/profile-cell';
// import stateSelect      from '../components/state-select';
// import interviewSelect  from '../components/interview-select';
// import pagination       from '../components/pagination';
// import prioritySelect   from '../components/priority-select';
// import langSelect       from '../components/lang-select';
// import currentUser      from '../components/current-user';
// import tagsList         from '../components/tags-list';
// import resume           from '../components/resume';
// import blockEdit        from '../components/block-edit';
// import keepBreaks       from '../components/keep-breaks-textarea';
// import intHead          from '../components/int-head';
// import devTabs          from '../components/int-tabs';
// import intRowHead       from '../components/int-row-head';
// import intRowText       from '../components/int-row-text';
// import intRowMark       from '../components/int-row-mark';
// import editBut          from '../components/edit-but';
// import projectSelect    from '../components/project-select';

import icons            from '../directives/icons';
// import filters          from '../filters';

// Modules
// import sidebar          from '../modules/sidebar';
// import dashboard        from '../modules/dashboard';
// import login            from '../modules/login';
// import card             from '../modules/card';
// import interview        from '../modules/interview';
// import projects         from '../modules/company-projects';
// import technologies     from '../modules/technologies';
// import users            from '../modules/users';
// import userPage         from '../modules/user-page'
// import mailTemplates    from '../modules/mail-templates'
// import createResume     from '../modules/create-resume'
// import importResume     from '../modules/import-resume'
// import setPassword      from '../modules/set-password'
// import resetPassword    from '../modules/reset-password'

let hrBase = angular.module('hrBase', [
    // App
    uirouter,
    'ui.router.state.events', // legacy state events
    ngMaterial,
    ngMessages,
    ngAnimate,
    ngAria,
    ngclipboard,
    ngFileUpload,

    // Services
    // SpinnerService,
    // ConfigService,
    // CandidateService,
    // SampleService,
    // InsertAtCaret,
    // HhService,

    // Components
    // resumeFilter,
    // rangePicker,
    // profileCell,
    // stateSelect,
    // interviewSelect,
    // pagination,
    // prioritySelect,
    // langSelect,
    // currentUser,
    // tagsList,
    // resume,
    // blockEdit,
    // keepBreaks,
    // intHead,
    // devTabs,
    // intRowHead,
    // intRowText,
    // intRowMark,
    // editBut,
    // projectSelect,

    // Modules
    // sidebar,
    // dashboard,
    // icons,
    // filters,
    // login,
    // card,
    // interview,
    // projects,
    // technologies,
    // users,
    // userPage,
    // mailTemplates,
    // createResume,
    // importResume,
    // setPassword,
    // resetPassword
]);

hrBase.config(routing);
// hrBase.config(['$qProvider', ($qProvider) => {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);
hrBase.run(run);
export default hrBase;