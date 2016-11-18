/**
 * edit.controller.js
 * Created by anonymous on 29/12/15 21:09.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('GroupsEditController', GroupsEditController);

    GroupsEditController.$inject = ['$stateParams'];

    /* @ngInject */
    function GroupsEditController($stateParams) {

        var vm  = this;
        vm.data = {id: $stateParams.id};


        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

