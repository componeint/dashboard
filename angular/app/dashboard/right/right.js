/**
 * Created by anonymous on 09/12/15 16:08.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardRightController', DashboardRightController);

    DashboardRightController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function DashboardRightController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'DashboardRightController';

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

