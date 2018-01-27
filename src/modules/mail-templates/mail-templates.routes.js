export default function routes($stateProvider) {

    $stateProvider.state('app.mail-templates', {
        url: '/mail-templates',
        views: {
            'content@': {
                controller: 'MailTemplatesController',
                controllerAs: 'vc',
                template: require('./mail-templates.template.pug')
            }
        },
        resolve: {
            Templates: function (EmailTemplateService) {
                return EmailTemplateService.getList().then(function (res) {
                    if (res.status === 200) {
                        return res.data;
                    } else { console.log('GET EMAIL TEMPLATES ERROR: ', res); }
                }).catch(function(err) { console.log('GET EMAIL TEMPLATES ERROR: ', err); });
            }
        }
    })

}