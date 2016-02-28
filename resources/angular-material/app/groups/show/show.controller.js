/**
 * show.controller.js
 * Created by anonymous on 29/12/15 21:07.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('GroupsShowController', GroupsShowController);

    GroupsShowController.$inject = ['$stateParams'];

    /* @ngInject */
    function GroupsShowController($stateParams) {

        var vm  = this;
        vm.data = {id: $stateParams.id};


        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

