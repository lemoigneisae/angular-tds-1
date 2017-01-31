/**
 * Created by DurpoixQuentin on 28/01/2017.
 */

var myApp = angular.module('TD1');

myApp.controller('controllerTD1', function($http){

    this.services=Services;
    this.promotion="promotion";
    this.count=1;
    this.reduc="";
    this.toto = 300;
    this.go = true;
    this.temp="";
    this.remise = "0.15";

    var self = this;


    this.total = function () {
        self.count = 0;
        self.toto = 0;
        Services.forEach(function(element) {

            if(element.active == true){
                self.count = self.count + 1;
                self.toto = self.toto + element.price;
            }

        });

    };


    this.toggleActive = function(service){
        this.applyCode();
        this.service = service;
        if(this.service.active == true){
            this.service.active = false;
        }else{
            this.service.active = true;
        }
    };


    this.promoExiste = function (promo) {
        $http.get("./app/promo.json").then(function (response) {
            angular.forEach(response.data, function (value, key) {
                if (promo == key) {
                    self.reduc = value*self.toto;
                    self.go = false;
                }
            });
        });
    };


    this.applyCode = function(){

        self.reduc = "Remise non valide";
        self.go = true;
        this.promoExiste(this.codePromo);

    };





});



Services=[
    {
        "name": "Web Development",
        "price": 300,
        "active":true
    },{
        "name": "Design",
        "price": 400,
        "active":false
    },{
        "name": "Integration",
        "price": 250,
        "active":false
    },{
        "name": "Formation",
        "price": 220,
        "active":false
    }
]