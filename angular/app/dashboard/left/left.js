/**
 * Created by anonymous on 09/12/15 15:59.
 */


(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardLeftController', DashboardLeftController);

    DashboardLeftController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function DashboardLeftController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'DashboardLeftController';

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

