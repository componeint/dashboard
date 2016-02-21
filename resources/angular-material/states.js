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
                    'layout@'         : {
                        templateUrl : layoutProvider.layout('themes.minimalist'),
                        controller  : 'DashboardController',
                        controllerAs: 'dashboard'
                    },
                    'header@dashboard': {
                        templateUrl : layoutProvider.view('dashboard.header'),
                        controller  : 'DashboardHeaderController',
                        controllerAs: 'header'
                    },
                    'sidenav@dashboard'  : {
                        templateUrl : layoutProvider.view('dashboard.sidenav'),
                        controller  : 'DashboardSidenavController',
                        controllerAs: 'sidenav'
                    },
                    'aside@dashboard' : {
                        templateUrl : layoutProvider.view('dashboard.aside'),
                        controller  : 'DashboardAsideController',
                        controllerAs: 'aside'
                    },
                    'footer@dashboard': {
                        templateUrl : layoutProvider.view('dashboard.footer'),
                        controller  : 'DashboardFooterController',
                        controllerAs: 'footer'
                    },
                    'main@dashboard'  : {}
                }
            })
            .state('dashboard.home', {
                url  : '/',
                data : {pageName: 'Overview'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.view('dashboard.home'),
                        controller  : 'DashboardHomeController',
                        controllerAs: 'home'
                    }
                }
            });

    }

})();

