import angular from 'angular';

class SkillsService {

    constructor($http) {
        this.$http = $http;
    }

    getSkillsByResumeId(type, id) {
        return this.$http.get(`/api/skills/${type}/${id}`);
        // return Utils.createPromise('/api/skills/' + type + "/" + id, 'GET');
    }

    createSkills(type, id, model) {
        return this.$http.post(`/api/skills/${type}/${id}`, model);
        // return Utils.createPromise('/api/skills/' + type + "/" + id, 'POST', model);
    }

}

export default angular.module('services.skills-service', [])
    .service('SkillsService', SkillsService)
    .name;