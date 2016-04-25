// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ui.router'])

// membuat controller
.controller('identity', function($scope){
  //menampilkan console
  //console.log("Menjalankan Controller");
  //definisi judul yang nanti akan ditampilkan di view
  $scope.title = "FastTrackIonic";
  //$scope.header = "Aplikasi FastTrackIonic pertama";
})

.controller('menu', function($scope){
  
  $scope.kota = {
    nama:'',luas:0,populasi:0
  };
  
  $scope.simpanWilayah = function(data){
    console.log("Kota = " + data.nama);
    console.log("Luas = " + data.luas);
    console.log("Populasi = " + data.populasi);
    $scope.kota = data;
  }
  
  $scope.menus = [
    {id:1,nama:'SP2020 - Usia'},
    {id:2,nama:'SP2020 - Pekerjaan'},
    {id:3,nama:'SP2020 - Pendidikan'},
    {id:4,nama:'SP2020 - Pendapatan'},
    {id:5,nama:'SP2020 - Skala Usaha'},
  ]
  
  $scope.item_pilih = function(id_pilih){
    switch(id_pilih){
      case 1: alert("Maaf, menu belum bisa berjalan"); break;
      case 2: alert("Maaf, menu belum bisa berjalan");break;
      case 3: break;
      case 4: alert("Maaf, menu belum bisa berjalan");break;
      case 5: alert("Maaf, menu belum bisa berjalan");break;
    }
  }
})

.controller('propinsi', function($scope){ 
  $scope.propinsi = [
    {id:1,nama:'DKI Jakarta',lat:-6.180736,lon:106.828474},
    {id:2,nama:'Jawa Barat',lat:-6.901846,lon:107.618054},
    {id:3,nama:'Jawa Tengah',lat:-6.993472,lon:110.419993},
    {id:4,nama:'DI Yogyakarta',lat:-7.794751,lon:110.367318},
    {id:5,nama:'Jawa Timur',lat:-7.245552,lon:112.73914},
  ]
})

.controller('kabkota', function($scope){  
  $scope.kabkota = [
    {id:1,nama:'Jakarta Timur',prop:1, lat:-6.213791,lon:106.944126},
    {id:2,nama:'Jakarta Barat',prop:1, lat:-6.176107, lon:106.737813},
    {id:3,nama:'Jakarta Pusat',prop:1, lat:-6.172548, lon:106.818995},
    {id:4,nama:'Jakarta Selatan',prop:1, lat:-6.247733, lon:106.807319},
    {id:5,nama:'Cianjur',prop:2, lat:-6.820992, lon:107.140234},
    {id:6,nama:'Bandung',prop:2, lat:-6.910559, lon:107.610262},
    {id:7,nama:'Sukabumi',prop:2, lat:-6.917859, lon:106.931718},
    {id:8,nama:'Ciamis',prop:2, lat:-7.316076, lon:108.353863},
    {id:9,nama:'Semarang',prop:3, lat:-6.977781, lon:110.409943},
    {id:10,nama:'Salatiga',prop:3, lat:-7.327605, lon:110.500647},
    {id:11,nama:'Pemalang',prop:3},
    {id:12,nama:'Kebumen',prop:3},
    {id:13,nama:'Sleman',prop:4},
    {id:14,nama:'Kulon Progo',prop:4},
    {id:15,nama:'Gunung Kidul',prop:4},
    {id:16,nama:'Wates',prop:4},
    {id:17,nama:'Surabaya',prop:5},
    {id:18,nama:'Gresik',prop:5},
    {id:19,nama:'Sumenep',prop:5},
    {id:20,nama:'Banyuwangi',prop:5},
  ]
})

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


