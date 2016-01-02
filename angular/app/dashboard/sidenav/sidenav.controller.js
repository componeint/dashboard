/**
 * Created by anonymous on 03/01/16 4:38.
 */


(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardSidenavController', DashboardSidenavController);

    DashboardSidenavController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function DashboardSidenavController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'DashboardSidenavController';

        vm.close = function() {
            $mdSidenav('left').close().then(function() {
                // $log.debug("close LEFT is done");
            });
        };

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

