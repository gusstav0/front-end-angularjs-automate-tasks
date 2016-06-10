(function () {
    'use strict'

    angular.module('cinqApp').controller('PeopleController', PeopleController);

    angular.$inject = ['PeopleService', '$log'];
    function PeopleController(PeopleService, $log) {
        var self = this;
        self.people = [];

        PeopleService.verify().success(function (response) {
            $log.info("data retrieved", response);
            self.people = response;
        }).error(function (response) {
            $log.error("handle")
        });

    }
})();