(function () {
    'use strict'

    angular.module('cinqApp').factory('PeopleService', PeopleService);

    angular.$inject = ['$http'];
    function PeopleService($http) {
        var service = {};

        service.verify = verify;
        return service;

        function verify() {
            return $http.get('rest/people/');
        }

    }
})();