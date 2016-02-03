/**
 * Created by anonymous on 09/12/15 15:40.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardFooterController', DashboardFooterController);

    DashboardFooterController.$inject = [];

    /* @ngInject */
    function DashboardFooterController() {
        var vm   = this;
        vm.title = 'DashboardFooterController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

