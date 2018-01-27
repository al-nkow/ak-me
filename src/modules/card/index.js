import './card.styles.less';

import angular  from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './card.routes';
import CardController from './card.controller';

import CallPrint                 from '../../services/call-print';
import UserService               from '../../services/user-service';
import ToastService              from '../../services/toast-service';
import CandidateService          from '../../services/candidate-service';
import EmailTemplateService      from '../../services/email-template-service';
import LetterInterviewInvitation from '../../services/letter-interview-invitation';

export default angular.module('hrBase.card', [
    uirouter,
    UserService,
    ToastService,
    CandidateService,
    CallPrint,
    EmailTemplateService,
    LetterInterviewInvitation
])
    .config(routing)
    .controller('CardController', CardController)
    .name;