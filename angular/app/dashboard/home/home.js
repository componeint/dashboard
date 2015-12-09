/**
 * Created by anonymous on 09/12/15 15:42.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardHomeController', DashboardHomeController);

    DashboardHomeController.$inject = [];

    /* @ngInject */
    function DashboardHomeController() {
        var vm   = this;
        vm.title = 'DashboardHomeController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

