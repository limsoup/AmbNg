var ambApp = angular.module('ambApp', ['ui.router']);

angular.module("ambApp").run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

ambApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/links');
    
    $stateProvider
        .state('links', {
            url: '/links',
            templateUrl: 'js/amb/views/links-partial.html'
        })
        .state('landing', {
            url: '/landing/:linkName',
            views:{
				'': {templateUrl: 'js/amb/views/landing-partial.html',  controller: 'landingController'}
			}
        })
        
});