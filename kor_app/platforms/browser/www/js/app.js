document.addEventListener('deviceready', function() {
    navigator.splashscreen.hide();
}, false);

var app = angular.module('app', []);

app.factory('GeolocationService', function($window, $q, $rootScope) {
    var geolocation = $window.navigator.geolocation;
    return {
        getCurrentPosition: function(onSuccess, onError) {
            geolocation.getCurrentPosition(function(position) {
                $rootScope.$apply(function() {
                    onSuccess(position);
                })
            }, function() {
                $rootScope.$apply(function() {
                    onError();
                })
            })
        }
    }
})

//var current_state = new CurrentState(quest_list[0]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'partials/home.html' })
        .when('/about', { templateUrl: 'partials/about.html' })
        .when('/game', { templateUrl: 'partials/game.html' })
        .when('/credits', { templateUrl: 'partials/credits.html' })
        .otherwise({ redirectTo: '/home' })
})