import angular from 'angular';

class CandidateService {

    constructor($http, Upload) {
        this.Upload = Upload;
        this.$http = $http;
        // this.UtilsService = UtilsService;
    }

    create(model) {
        return this.$http.post('/api/candidate/create', model);
        // return UtilsService.createPromise('/api/candidate/create', 'POST', model);
    }

    all() {
        return this.$http.get('/api/candidate/all');
        // return UtilsService.createPromise('/api/candidate/all', 'GET');
    }

    getById(id) {
        return this.$http.get(`/api/candidate/byid/${id}`);
        // return UtilsService.createPromise('/api/candidate/byid/' + id, 'GET');
    }

    createResume(model) {
        return this.$http.post('/api/candidate/createresume', model);
        // return UtilsService.createPromise('/api/candidate/createresume', 'POST', model);
    }

    updateResume(id, model) {
        return this.$http.post(`/api/candidate/updateresume/${id}`, model);
        // return UtilsService.createPromise('/api/candidate/updateresume/' + id, 'POST', model);
    }

    /**
     *
     * @param {object} file
     * @param {string} id
     */
    attachFile(file, id) {
        return this.Upload.upload({
            method: 'POST',
            url: 'api/candidate/attach',
            data: {id: id, file: file},
        });
    };

    /**
     *
     * @param {array} files
     * @param {string} id
     */
    attachFiles(files, id) {
        return this.Upload.upload({
            method: 'POST',
            url: 'api/candidate/resume/' + id + '/attachment',
            arrayKey: '',
            data: {
                files: files,
            },
        });
    }

    deleteAttachedFile(url) {
        return this.$http({
            method: 'DELETE',
            url: url
        });
    }

    /**
     * delete resume
     * @param {string} id - resume id
     */
    deleteResume(id) {
        return this.$http({
            method: 'DELETE',
            url: '/api/candidate/resume/' + id
        });
    }

    /**
     * advanced resume search
     * @param {object} params - search params
     * @returns {*|Promise}
     */
    search(params) {
        return this.$http({
            method: 'GET',
            url: 'api/candidate/search',
            params: params
        });
    }

    searchForGuest(params, token) {
        return this.$http({
            method: 'GET',
            url: `api/candidate/search/${token}`,
            params: params
        });
    }

    getResumeById(id) {
        return this.$http.get(`/api/candidate/resume/${id}`);
        // return this.UtilsService.createPromise('/api/candidate/resume/' + id, 'GET');
    }

    getCandidateInfoById(id) {
        return this.$http.get(`/api/candidate/candidateinfo/${id}`);
        // return this.UtilsService.createPromise('/api/candidate/candidateinfo/' + id, 'GET');
    }

    resumeList() {
        return this.$http.get('/api/candidate/resumelist');
        // return this.UtilsService.createPromise('/api/candidate/resumelist', 'GET');
    }

    updatePhoto(file, id) {
        return this.Upload.upload({
            method: 'PUT',
            url: '/api/candidate/resume/' + id + '/photo',
            data: {
                // TODO: handle upload for small photos
                medium: file
            },
        });
    }

}

export default angular.module('services.candidate-service', [])
    .service('CandidateService', CandidateService)
    .name;