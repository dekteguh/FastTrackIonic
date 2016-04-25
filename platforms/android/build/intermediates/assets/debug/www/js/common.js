angular.module('common.controller', [])
// membuat controller
.controller('IdentityController', function($scope){
  $scope.welcome = "SELAMAT DATANG";
  $scope.app = "APLIKASI SENSUS 2020"
  $scope.team = "TEAM IT BPS @2016"
})

.controller('MenuController', function($scope, $ionicPopup, $timeout){//, $splashscreen){
  
  $scope.title = "Menu Utama";
  
  $scope.menus = [
    {id:"usia",nama:'SP2020 - Usia'},
    {id:"pekerjaan",nama:'SP2020 - Pekerjaan'},
    {id:"pendidikan",nama:'SP2020 - Pendidikan'},
    {id:"pendapatan",nama:'SP2020 - Pendapatan'},
    {id:"usaha",nama:'SP2020 - Skala Usaha'},
  ]

})