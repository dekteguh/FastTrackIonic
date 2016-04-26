// Ionic Starter App
angular.module('starter', ['ionic','ui.router','common.controller','area.controller','form.controller','all.services','worldbank.controller','chart.controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// Berpindah halaman
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

    .state('welcome',{
          url: '/welcome',
          templateUrl: 'index.html',
          controller: 'IdentityController'
    })

    .state('menu',{
          url: '/menu',
          templateUrl: 'templates/menu.html',
          controller: 'MenuController'
    })

    .state('prop',{
          url: '/prop',
          templateUrl: 'templates/prop.html',
          controller: 'PropinsiController'
    })

    .state('kabkota',{
          url: '/kabkota/:prop_id',
          templateUrl: 'templates/kabkota.html',
          controller: 'KabKotaController'
    })

    .state('form',{
          url: '/form/:kako_id',
          templateUrl: 'templates/form.html',
          controller: 'FormController'
    })

    .state('worldbank',{
          url: '/worldbank',
          templateUrl: 'templates/worldbank.html',
          controller: 'WorldBankController'
    })

    .state('chart',{
          url: '/chart',
          templateUrl: 'templates/chart.html',
          controller: 'ChartController'
    })
    $urlRouterProvider.otherwise('/welcome');
})
