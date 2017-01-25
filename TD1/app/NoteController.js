var myApp = angular.module('TD1',["$cookies",function($cookies){
    // Retrieving a cookie
    var favoriteCookie = $cookies.get('myFavorite');
    // Setting a cookie
    $cookies.put('myFavorite', 'oatmeal');
}]);

myApp.controller('controllerTD1', function(){

    this.info="Note modifiée";
	this.caract=100;
    this.message = "";
	var self = this;


	this.clear = function(){
		self.message = "";
        self.info="Note modifiée";
	};
	
	this.count = function(){

		self.caract = 100 - self.message.length ;
	};

    this.save = function(){
        if(self.message.length>0){
            self.info = "Note sauvegardée" ;
        }

    };
	
});