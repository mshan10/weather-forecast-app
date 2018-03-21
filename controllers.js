// CONTROLLERS      

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city; 
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '1';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?appid=9e793af7aa6232015a344b43aed48fa0", {callback: "JSON_CALLBACK" }, { get: {method: "JSONP" }});

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days});
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK -273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000);
        
    }
}]);           