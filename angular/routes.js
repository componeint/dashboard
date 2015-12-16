/**
 * Created by anonymous on 09/12/15 13:11.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .config(dashboardRouter);

    dashboardRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function dashboardRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                abstract: true,
                url     : '/dashboard',
                views   : {
                    'layout@'         : {
                        templateUrl : layout('dashboard.simple'),
                        controller  : 'DashboardController',
                        controllerAs: 'dashboard'
                    },
                    'header@dashboard': {
                        templateUrl : view('dashboard.header'),
                        controller  : 'DashboardHeaderController',
                        controllerAs: 'header'
                    },
                    'left@dashboard'  : {
                        templateUrl : view('dashboard.left'),
                        controller  : 'DashboardLeftController',
                        controllerAs: 'left'
                    },
                    'right@dashboard' : {
                        templateUrl : view('dashboard.right'),
                        controller  : 'DashboardRightController',
                        controllerAs: 'right'
                    },
                    'footer@dashboard': {
                        templateUrl : view('dashboard.footer'),
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
                        templateUrl : view('dashboard.home'),
                        controller  : 'DashboardHomeController',
                        controllerAs: 'home'
                    }
                }
            });

        function dashboard(viewName) {
            if (viewName !== '') {
                return './views/dashboard/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/app/app/home/home.html';
            }
        }

        function view(viewName) {
            if (viewName !== '') {
                return './views/app/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/app/app/home/home.html';
            }
        }

        function layout(viewName) {
            if (viewName !== '') {
                return './views/layouts/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/app/app/home/home.html';
            }
        }

        function appName(v) {
            if (v.split('.')[0]) {
                return v.split('.')[0];
            } else {
                return 'app';
            }
        }

        function fileDir(v) {
            if (v.split('.')[1]) {
                return v.split('.')[1];
            } else if (!v.split('.')[0]) {
                return v;
            } else {
                return 'home';
            }
        }

        function fileName(v) {
            if (v.split('.')[2]) {
                return v.split('.')[2];
            } else if (!v.split('.')[2]) {
                if (v.split('.')[1]) {
                    return v.split('.')[1];
                }
            } else {
                return 'home';
            }
        }

    }

})();

