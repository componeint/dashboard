/**
 * states.js
 * Created by anonymous on 09/12/15 13:11.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .config(dashboardRouter);

    dashboardRouter.$inject = ['$stateProvider', '$urlRouterProvider', 'layoutProvider'];

    /* @ngInject */
    function dashboardRouter($stateProvider, $urlRouterProvider, layoutProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                abstract: true,
                url     : '/dashboard',
                views   : {
                    'layout@'          : {
                        templateUrl : layoutProvider.layout('minimalist.theme'),
                        controller  : 'DashboardController',
                        controllerAs: 'dashboard'
                    },
                    'header@dashboard' : {
                        templateUrl : layoutProvider.layout('minimalist.header'),
                        controller  : 'HeaderController',
                        controllerAs: 'header'
                    },
                    'sidenav@dashboard': {
                        templateUrl : layoutProvider.view('dashboard.sidenav'),
                        controller  : 'DashboardSidenavController',
                        controllerAs: 'sidenav'
                    },
                    'aside@dashboard'  : {
                        templateUrl : layoutProvider.layout('minimalist.aside'),
                        controller  : 'AsideController',
                        controllerAs: 'aside'
                    },
                    'footer@dashboard' : {
                        templateUrl : layoutProvider.layout('minimalist.footer'),
                        controller  : 'FooterController',
                        controllerAs: 'footer'
                    },
                    'main@dashboard'   : {}
                }
            })
            .state('dashboard.home', {
                url  : '/',
                data : {pageName: 'Overview'},
                views: {
                    'main@dashboard'   : {
                        templateUrl : layoutProvider.view('dashboard.home'),
                        controller  : 'DashboardHomeController',
                        controllerAs: 'home'
                    }
                }
            });

    }

})();

