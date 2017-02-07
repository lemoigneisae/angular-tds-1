/**
 * Created by DurpoixQuentin on 28/01/2017.
 */

var myApp = angular.module('TD2');

myApp.controller('controllerTD2',['$http', function($http){

    $http.get("./app/contacts.json").then(
        function (response) {
            self.contacts = response.data;
        });

     this.edit=false;

     var self = this;

    this.toAdd = function(){
        self.edit ="add";
    };

}]);

myApp.directive('contactElem', function() {
    return {
        templateUrl: './template/contacts.html'
    };
});

myApp.directive('frmContactElem', function() {
    return {
        templateUrl: './template/frmContacts.html'
    };
});