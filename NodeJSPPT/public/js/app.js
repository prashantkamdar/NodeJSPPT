//public/js/app.js
(function () {
    
    var app = angular.module("NodeJSPPT", ["ngRoute", "cfp.hotkeys"]);
    
    app.config(function ($routeProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);
        
        $routeProvider
            .when("/", {
            templateUrl: "partials/main",
            controller: "Controller"
        }).when("/contents", {
            templateUrl: "partials/contents",
            controller: "Controller"
        }).when("/1", {
            templateUrl: "partials/1",
            controller: "Controller"
        }).when("/2", {
            templateUrl: "partials/2",
            controller: "Controller"
        }).when("/3", {
            templateUrl: "partials/3",
            controller: "Controller"
        }).when("/4", {
            templateUrl: "partials/4",
            controller: "Controller"
        }).when("/5", {
            templateUrl: "partials/5",
            controller: "Controller"
        }).when("/6", {
            templateUrl: "partials/6",
            controller: "Controller"
        }).when("/7", {
            templateUrl: "partials/7",
            controller: "Controller"
        }).when("/8", {
            templateUrl: "partials/8",
            controller: "Controller"
        }).when("/9", {
            templateUrl: "partials/9",
            controller: "Controller"
        }).when("/10", {
            templateUrl: "partials/10",
            controller: "Controller"
        }).when("/11", {
            templateUrl: "partials/11",
            controller: "Controller"
        }).when("/12", {
            templateUrl: "partials/12",
            controller: "Controller"
        }).when("/13", {
            templateUrl: "partials/13",
            controller: "Controller"
        }).when("/14", {
            templateUrl: "partials/14",
            controller: "Controller"
        }).when("/15", {
            templateUrl: "partials/15",
            controller: "Controller"
        }).when("/16", {
            templateUrl: "partials/16",
            controller: "Controller"
        }).when("/17", {
            templateUrl: "partials/17",
            controller: "Controller"
        }).when("/18", {
            templateUrl: "partials/18",
            controller: "Controller"
        }).
        otherwise({
            redirectTo: '/'
        });   

    });


}());