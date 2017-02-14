/**
 * Created by DurpoixQuentin on 28/01/2017.
 */

var myApp = angular.module('TD2');

myApp.controller('controllerTD2',['$http','$sce',function($http,$sce){
    var self = this;
    self.what=1;
    self.from="EUR";
    self.to="USD";
    self.result;
    $http.get("./app/currencymap.json").then(
        function (response) {
            self.currencies = response.data;
        });

    this.getResult = function(){
        url = $sce.trustAsResourceUrl('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from+'_'+self.to);
        $http.jsonp(url, {jsonCallbackParam: 'callback'}).
        then(function(result){
            self.result=result.data[""+self.from+"_"+self.to+""].val;
            self.result=self.result*(self.what);
        });
    };

    this.swap = function(){
        var tmp = self.from;
        self.from=self.to;
        self.to=tmp;
    };

}]);
