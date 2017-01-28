var myApp = angular.module('TD1', ['ngCookies']);

myApp.controller('controllerTD1', ["$cookies",function($cookies){

    // Retrieving a cookie
    var favoriteCookie = $cookies.get('Message');
    this.info="Note modifiée";
	this.caract=100;
    this.message = "";
    this.cook = false;

	var self = this;


	this.clear = function(){
		self.message = "";
        self.info="Note modifiée";
	};
	
	this.count = function(){
        self.info="Note modifiée";
		self.caract = 100 - self.message.length ;
	};

    this.save = function(){
        if(self.message.length>0){
            $cookies.put('Message', self.message);
            self.info = "Note sauvegardée" ;
        }

    };

    if($cookies.get('Message')!= null){
     self.cook = true ;
     self.message = favoriteCookie;
     }

}]);