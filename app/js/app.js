angular.module('CompBrowser', ['ui.router', 'CompBrowser.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "templates/home.html",
        controller: 'MainCtrl'
    })
    .state('about', {
        url: "/about",
        templateUrl: "templates/about.html"
    })
    .state('skills', {
        url: "/skills",
        templateUrl: "templates/skills.html"
    })

    $urlRouterProvider.otherwise('/');
});
