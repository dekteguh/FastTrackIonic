angular.module('chart.controller', [])

.controller('ChartController', function($scope, ChartServices){//, $splashscreen){

  $scope.title = "CHART WORLDBANK";
  ChartServices.getData().then(function(response){
      var list = [];
      for(i=0;i<response.length;i++){
        var arr = [];
        if(response[i].date == null || response[i].value == null){
          arr['tahun'] = 0;
          arr['gni'] = 0;
        }else{
          arr['tahun'] = response[i].date;
          arr['gni'] = response[i].value;
        }
        list.push(arr);
        //console.log(arr);
      }

      $scope.charts = list;
  })

})
