/**
 * Created by DurpoixQuentin on 28/01/2017.
 */

var myApp = angular.module('TD2');

myApp.controller('controllerTD2',['$http', function($http){
    var self = this;
    self.results = [];
    self.contacts = [];
    self.tmpContact = new Object();
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
        if(self.edit!="upd") {
            self.tmpContact = new Object();
            self.edit = "add";
        }
    };


    this.Add = function(value){
    if(value) {
        if (self.edit == "add") {
            self.contacts.push(self.tmpContact);
            self.tmpContact = new Object();
        } else {
            self.tmpContact = new Object();
            self.edit = "";
        }
    }
    };



    this.deleter = function(contact){
        self.results.push(contact);
        contact.deleted = true;
    };

    this.toUpdate = function(contact){
        self.edit="upd";
        console.log(contact);
        self.tmpContact = contact;
        console.log(self.tmpContact);
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