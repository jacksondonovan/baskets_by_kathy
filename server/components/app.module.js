angular.module('app',["ngRoute"])
  .config(["$routeProvider",function($routeProvider){

    $routeProvider
     .when('/gallery',{
      //  component: 'gallery',
       templateUrl: '/templates/gallery.html',
       controller: 'buybaskets'
     })
     .when('/about',{
       templateUrl: '/templates/about.html'
     })
     .when('/contact',{
       templateUrl: '/templates/contact.html'
     }).otherwise({
       redirectTo: '/gallery'
     })

  }])
  .controller('buybaskets',function(){
    const vm = this
    vm.yourcart = 0
  })
  .component('gallery',{
    controller: function(){
      const vm = this
      vm.title = 'Hello'
    },
    templateUrl: '/templates/gallery.html'
  })
