/**
 * Created by Coco on 14/03/2017.
 */
angular.module("App").config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'templates/main.html',
            controller: 'mainController',
            controllerAs:'rtCtrl'
        }).
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'mainController',
            controllerAs: 'rtCtrl'
        }).when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'mainController',
            controllerAs: 'rtCtrl'
        }).otherwise({
            redirectTo: '/'
        });
        if(window.history && window.history.pushState){
            $locationProvider.html5Mode(true);
        }
    }]);


