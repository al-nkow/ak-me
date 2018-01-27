// import './mail-templates.styles.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './mail-templates.routes';
import MailTemplatesController from './mail-templates.controller';

import EmailTemplateService from '../../services/email-template-service';
import ToastService         from '../../services/toast-service';

export default angular.module('hrBase.mail-templates', [
    uirouter,
    EmailTemplateService,
    ToastService
])
    .config(routing)
    .controller('MailTemplatesController', MailTemplatesController)
    .name;