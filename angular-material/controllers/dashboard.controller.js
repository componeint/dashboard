/**
 * Created by anonymous on 10/12/15 11:09.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = [];

    /* @ngInject */
    function DashboardController() {
        var vm   = this;
        vm.title = 'DashboardController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

