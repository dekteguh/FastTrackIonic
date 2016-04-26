angular.module('area.controller', [])

.controller('PropinsiController', function($scope, $stateParams, AreaServices, $http, $ionicModal){
  $scope.title = "Daftar Propinsi";
  $scope.propinsi = AreaServices.listProp();
  $scope.prop = AreaServices.findPropById($stateParams.prop_id);

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.simpanPropinsi = function(u) {
    $scope.propinsi.push({ name: u.nama + ' ' + u.latitude + ' ' + u.longitude });
    $scope.modal.hide();
  };

  /*
  var url = "http://localhost:8000/propinsi";
  $http.get(url).then(function(response){
      $scope.propinsi = response.data.geonames;
  });
  */
})

.controller('KabKotaController', function($scope,$stateParams, AreaServices){
  $scope.title = "Kabupaten/Kota";
  $scope.listkabkota = AreaServices.listKabById($stateParams.prop_id);
  $scope.kako = AreaServices.findKabKotaId($stateParams.kako_id);
})
