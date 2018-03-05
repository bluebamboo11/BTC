angular.module('MyApp', ['ngMaterial'])
    .controller('AppCtrl', function ($scope, $http, $mdDialog, $mdToast) {
        $scope.lastPrice=0;
        $scope.bidPrice =0;
        GetMarket();
        function GetMarket() {
            $http({
                method: 'GET',
                url: 'https://www.cryptopia.co.nz/api/GetMarket/DOT_BTC'
            }).then(function successCallback(response) {
                GetMarket();
                $scope.lastPrice=response.data.Data.LastPrice;
                $scope.bidPrice=response.data.Data.BidPrice
                console.log(response.data.Data);
            }, function errorCallback(response) {

            });
        }
    });