import angular from 'angular';

class EmailTemplateService {

    constructor($http) {
        this.$http = $http;
    }

    /**
     * Save email template
     */
    save(data) {
        return this.$http({method: 'POST', url: 'api/email/template', data: data});
    };

    /**
     * Update email template
     */
    update(data) {
        return this.$http({method: 'PUT', url: 'api/email/template/' + data._id, data: data});
    };

    /**
     * Delete email template
     */
    delete(id) {
        return this.$http({method: 'DELETE', url: 'api/email/template/' + id});
    };

    /**
     * Get list of email templates
     */
    getList() {
        return this.$http({method: 'GET', url: 'api/email/templates'});
    };

    /**
     * Send email
     */
    send(data) {
        return this.$http({method: 'POST', url: 'api/email', data: data});
    };

}

export default angular.module('services.email-template-service', [])
    .service('EmailTemplateService', EmailTemplateService)
    .name;