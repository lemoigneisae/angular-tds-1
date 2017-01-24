var myApp = angular.module('TD1');

myApp.controller('controllerTD1', function(){
	
	this.caract=100;
	var self = this;

	this.clear = function(){
		self.message = "";
	};
	
	this.count = function(){
		self.caract = 100 - self.message.length ;
	};
	
});