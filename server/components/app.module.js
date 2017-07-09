var app = angular.module('app',["ngRoute"])

app.controller('buybaskets',function($scope){
  $scope.title = 'Click any basket to add it to your cart'
  $scope.yourcart = 0
  $scope.atc_one = function(){
    $scope.yourcart += 16.99
  }
  $scope.atc_two = function(){
    $scope.yourcart += 22.99
  }
  $scope.atc_three = function(){
    $scope.yourcart += 12.99
  }
  $scope.atc_four = function(){
    $scope.yourcart += 10.99
  }
})

app.config(["$routeProvider",function($routeProvider){
  $routeProvider
   .when('/gallery',{

     templateUrl: '/templates/gallery.hbs',
     controller: 'buybaskets'
   })
   .when('/about',{
     templateUrl: '/templates/about.hbs',
     controller: 'londonCtrl'
   })
   .when('/contact',{
     templateUrl: '/templates/contact.hbs'
   })
   .when('/postpurchase',{
     templateUrl: '/templates/postpurchase.hbs'
   })
   .otherwise({
     redirectTo: '/gallery'
   })
}])

app.component('gallery',{
    controller: function(){
      const vm = this
      vm.title = 'Hello'
    },
    templateUrl: '/templates/gallery.html'
  })
