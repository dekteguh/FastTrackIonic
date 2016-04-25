angular.module('form.controller', [])

.controller('FormController', function($scope, $stateParams, AreaServices){ 
  
  $scope.title = "Form Pendataan Pendidikan";
  $scope.kako = AreaServices.findKabKotaId($stateParams.id);
  $scope.simpanData = function(data){
      
  }
})