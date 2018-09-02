var app = angular.module('myApp', ['ngRoute','BerandaController','LoginController']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when("/beranda", {
            templateUrl: "templates/beranda.html",
            controller:"BerandaController"
        })
        .when("/login", {
            templateUrl: "templates/login.html",
            controller:"LoginController"
        })

        .otherwise({
            redirectTo:"/beranda",
        });
}])
