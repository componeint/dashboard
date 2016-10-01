/**
 * dashboard.state.js
 * Created by anonymous on 09/12/15 13:11.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .config(dashboardState);

    dashboardState.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$provide', 'layoutProvider'];

    /* @ngInject */
    function dashboardState($stateProvider, $urlRouterProvider, $httpProvider, $provide, layoutProvider) {
        $provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);
        $httpProvider.interceptors.push('redirectWhenLoggedOut');
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
                        templateUrl : layoutProvider.dashboard('app.sidenav'),
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
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('app.home'),
                        controller  : 'DashboardHomeController',
                        controllerAs: 'home'
                    }
                }
            });

        function redirectWhenLoggedOut($q, $injector) {

            var respError = {
                responseError: responseError
            };

            function responseError(rejection) {

                var
                    $state           = $injector.get('$state'),
                    rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];

                angular.forEach(rejectionReasons, function(value, key) {
                    if (rejection.data.error === value) {
                        localStorage.removeItem('user');
                        $state.go('jwtauth.signin');
                    }
                });

                return $q.reject(rejection);

            }

            return respError;
        }

        function skipIfLoggedIn($q, $auth) {

            var deferred = $q.defer();

            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }

            return deferred.promise;

        }

        function loginRequired($q, $state, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $state.go('jwtauth.signin');
            }

            return deferred.promise;
        }

    }

})();

