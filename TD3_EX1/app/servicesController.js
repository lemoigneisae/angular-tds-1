/**
 * Created by DurpoixQuentin on 28/01/2017.
 */

var myApp = angular.module('TD2');

myApp.controller('controllerTD2',['$http','$sce',function($http,$sce){
    var self = this;
    self.what=1;
    self.from="EUR";
    self.to="USD";
    self.result=0;
    self.amount=0;
    self.histo = false;
    $http.get("./app/currencymap.json").then(
        function (response) {
            self.currencies = response.data;
        });
    $http.get("./app/histo.json").then(
        function (response) {
            self.historique = response.data;
        });

    this.getResult = function(){
        url = $sce.trustAsResourceUrl('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from+'_'+self.to);
        $http.jsonp(url, {jsonCallbackParam: 'callback'}).
        then(function(result){
            self.amount=result.data[""+self.from+"_"+self.to+""].val;
            self.result=self.amount*(self.what);
        });
        var conversion=
            { from : self.from ,
                to : self.to ,
                amount : self.result,
                initialAmount :  self.amount,
                delta : 0,
                rate : ,
                what : self.what,
                date : ,
                update: false,
                initialRate :
            };
    };

    this.swap = function(){
        var tmp = self.from;
        self.from=self.to;
        self.to=tmp;
    };

    this.histoNotEmpty = function(){
       if(!self.historique.count()==0){
           return true;
       }else{
           return false;
       };
    };

}]);
