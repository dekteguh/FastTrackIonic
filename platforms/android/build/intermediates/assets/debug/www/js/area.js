angular.module('area.controller', [])

.controller('PropinsiController', function($scope, $stateParams, AreaServices){ 
  $scope.title = "Daftar Propinsi";
  $scope.propinsi = AreaServices.listProp();
  $scope.prop = AreaServices.findPropById($stateParams.prop_id);
})

.controller('KabKotaController', function($scope,$stateParams, AreaServices){  
  $scope.title = "Kabupaten/Kota";
  $scope.listkabkota = AreaServices.listKabById($stateParams.prop_id);
  $scope.kako = AreaServices.findKabKotaId($stateParams.kako_id);
})