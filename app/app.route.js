(function () {
    'use strict';
    var Planner_App_Routes = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url:'/home',
                templateUrl:'app/views/home.html'
            })
            .state('organize', {
                url: '/organize',
                templateUrl: 'app/views/organise.html',
                controller : 'CategoryCtrl'
            })
            .state('prioritise', {
                url: '/prioritise',
                templateUrl: 'app/views/prioritise.html'
        });
    };
    angular.module('plannerApp')
        .config(Planner_App_Routes);
})();
