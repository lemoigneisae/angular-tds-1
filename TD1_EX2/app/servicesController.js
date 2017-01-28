/**
 * Created by DurpoixQuentin on 28/01/2017.
 */

var myApp = angular.module('TD1');

myApp.controller('controllerTD1', function(){

    this.services=Services;
    this.promo = promo;
    this.codePromo="";
    this.count=1;
    this.toto = 300;
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

    }


    this.toggleActive = function(service){
        this.service = service;
        if(this.service.active == true){
            this.service.active = false;
        }else{
            this.service.active = true;
        }
    };

    this.applyCode = function(){

        for(var i = 0 ; i < promo.length ; i++){
            this.temp=promo[i];
        }
    };
});

promo =
    {
        "B22":0.05,
        "AZ":0.01,
        "UBOAT":0.02
    }


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