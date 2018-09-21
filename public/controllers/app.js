var app = angular.module('myApp', ['ui.bootstrap', 'ngRoute','BerandaController','LoginController']);
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
}]);

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 100) {
                element.addClass("header-scrolled");
            } else {
                element.removeClass("header-scrolled");
            }
        });
    };
});
