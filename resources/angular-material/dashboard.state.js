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
            })
            .state('dashboard.groups', {
                url  : '/groups',
                data : {pageName: 'Groups'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('groups.index'),
                        controller  : 'GroupsIndexController',
                        controllerAs: 'index'
                    }
                }
            })
            .state('dashboard.groups.create', {
                url  : '/create',
                data : {pageName: 'Create'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('groups.create'),
                        controller  : 'GroupsCreateController',
                        controllerAs: 'create'
                    }
                }
            })
            .state('dashboard.groups.show', {
                url  : '/show/{id}',
                data : {pageName: 'Show'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('groups.show'),
                        controller  : 'GroupsShowController',
                        controllerAs: 'show'
                    }
                }
            })
            .state('dashboard.groups.edit', {
                url  : '/edit/{id}',
                data : {pageName: 'Edit'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('groups.edit'),
                        controller  : 'GroupsEditController',
                        controllerAs: 'edit'
                    }
                }
            })
            .state('dashboard.users', {
                url  : '/users',
                data : {pageName: 'Users'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('users.index'),
                        controller  : 'UsersIndexController',
                        controllerAs: 'index'
                    }
                }
            })
            .state('dashboard.users.create', {
                url  : '/create',
                data : {pageName: 'Create'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('users.create'),
                        controller  : 'UsersCreateController',
                        controllerAs: 'create'
                    }
                }
            })
            .state('dashboard.users.show', {
                url  : '/show/{id}',
                data : {pageName: 'Show'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('users.show'),
                        controller  : 'UsersShowController',
                        controllerAs: 'show'
                    }
                }
            })
            .state('dashboard.users.edit', {
                url  : '/edit/{id}',
                data : {pageName: 'Edit'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('users.edit'),
                        controller  : 'UsersEditController',
                        controllerAs: 'edit'
                    }
                }
            })
            .state('dashboard.users.edit-membership', {
                url  : '/edit-membership/{id}',
                data : {pageName: 'Edit Membership'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('users.edit-membership'),
                        controller  : 'UsersEditMembershipController',
                        controllerAs: 'edit'
                    }
                }
            })
            .state('dashboard.users.edit-password', {
                url  : '/edit-password/{id}',
                data : {pageName: 'Edit Password'},
                views: {
                    'main@dashboard': {
                        templateUrl : layoutProvider.dashboard('users.edit-password'),
                        controller  : 'UsersEditPasswordController',
                        controllerAs: 'edit'
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

