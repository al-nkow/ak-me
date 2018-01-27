import angular from 'angular';

class ProjectService {

    constructor($http) {
        this.$http = $http;
    }

    getProjects() {
        return this.$http.get('api/dictionary/projects');
    }

    createProject(data) {
        return this.$http.post('api/project', data);
    }

    getProjectById(id) {
        return this.$http.get('api/project/' + id);
    }

    updateProject(data) {
        return this.$http.put('api/project/' + data._id, data);
    }

    deleteProject(id) {
        return this.$http.delete('api/project/' + id);
    }

}

export default angular.module('services.project-service', [])
    .service('ProjectService', ProjectService)
    .name;