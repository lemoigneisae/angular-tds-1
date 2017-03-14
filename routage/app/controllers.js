angular.module("sampleApp").controller("RouteController",["$routeParams","code",function($routeParams,code){
    this.content1="Contenu du template de route1";
    this.params=$routeParams;
    this.code=code;
}]);