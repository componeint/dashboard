/**
 * show.controller.js
 * Created by anonymous on 16/12/15 14:38.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('UsersShowController', UsersShowController);

    UsersShowController.$inject = ['$stateParams'];

    /* @ngInject */
    function UsersShowController($stateParams) {

        var vm  = this;
        vm.data = {id: $stateParams.id};


        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

