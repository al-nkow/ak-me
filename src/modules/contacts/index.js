import './contacts.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './contacts.routes';
import ContactsController from './contacts.controller';

import ToastService from '../../services/toast-service';

export default angular.module('hrBase.contacts', [
    uirouter,
    ToastService
])
    .config(routing)
    .controller('ContactsController', ContactsController)
    .name;