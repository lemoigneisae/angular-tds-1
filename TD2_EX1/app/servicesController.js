/**
 * Created by DurpoixQuentin on 28/01/2017.
 */

var myApp = angular.module('TD2');

myApp.controller('controllerTD2',['$http', function($http){

    this.includedItems=[];
    this.step=1;
    this.dispoItems=[];
    var self = this;

    $http.get("./app/dispoItems.json").then(
        function (response) {
            self.dispoItems = response.data;
        });

    this.selectItem = function(){

    self.includedItems.push(this.selectedDispoItems[0]);
    nb = self.dispoItems.indexOf(this.selectedDispoItems[0]);
    self.dispoItems.splice(nb, 1);
    };

    this.deselectItem = function(){

        self.dispoItems.push(this.selectedIncludedItems[0]);
        nb = self.includedItems.indexOf(this.selectedIncludedItems[0]);
        self.includedItems.splice(nb, 1);
    };

    this.addToIncluded = function(){

        this.selectedDispoItems.forEach(function(element) {

            self.includedItems.push(element);
            nb = self.dispoItems.indexOf(element);
            self.dispoItems.splice(nb, 1);

        });
    };

    this.removeFromIncluded = function(){

        this.selectedIncludedItems.forEach(function(element) {

            self.dispoItems.push(element);
            nb = self.includedItems.indexOf(element);
            self.includedItems.splice(nb, 1);

        });
    };

    this.addAllToIncluded = function(){


        self.dispoItems.forEach(function(element) {

            self.includedItems.push(element);

        });
        self.dispoItems = [];
    };



    this.removeAllFromIncluded = function(){


        self.includedItems.forEach(function(element) {

            self.dispoItems.push(element);

        });
        self.includedItems = [];
    };
}]);

