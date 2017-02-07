/**
 * Created by DurpoixQuentin on 28/01/2017.
 */

var myApp = angular.module('TD2');

myApp.controller('controllerTD2',['$http', function($http){
    var self = this;
    self.results = [];
    self.contacts = [];
    $http.get("./app/contacts.json").then(
        function (response) {
            self.contacts = response.data;
        });

     this.edit=false;


    this.cancelOne = function(){
        self.results.forEach(function(item, index, object) {
            self.contacts.push(item);
        });
        self.contacts.forEach(function(item, index, object) {
            if (item.deleted == true) {
                item.deleted=false;
            }
        });
        self.results=[];
    };

    this.toAdd = function(){
        self.edit ="add";
    };

    this.deleter = function(contact){
        self.results.push(contact);
        contact.deleted = true;
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

myApp.filter('NotDeletedFilter', function(){
    return function(input){

        input.forEach(function(item, index, object) {
                if (item.deleted == true) {
                    object.splice(index, 1);
                }
        });

    return input;
    };
});