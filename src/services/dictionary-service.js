import angular from 'angular';

class DictionaryService {

    constructor($http) {
        this.$http = $http;
    }

    states() {
        return this.$http.get('/api/dictionary/candidatestates');
    }

    englishLevels() {
        return this.$http.get('/api/dictionary/englishLevels');
    }

    priorities() {
        return this.$http.get('/api/dictionary/priorities');
    }

    technologies() {
        return this.$http.get('/api/dictionary/technologies');
    }

    roles() {
        return this.$http.get('/api/dictionary/roles');
    }

    levels() {
        return this.$http.get('/api/dictionary/levels');
    }

    subLevels() {
        return this.$http.get('/api/dictionary/subLevels');
    }

    projects() {
        return this.$http.get('/api/dictionary/projects');
    }

}

export default angular.module('services.dictionary-service', [])
    .service('DictionaryService', DictionaryService)
    .name;