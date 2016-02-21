/**
 * Created by anonymous on 03/01/16 5:33.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardAsideController', DashboardAsideController);

    DashboardAsideController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function DashboardAsideController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'DashboardAsideController';

        vm.close = function() {
            $mdSidenav('right').close().then(function() {
                // $log.debug("close RIGHT is done");
            });
        };

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

