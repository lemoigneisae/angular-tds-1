var myApp = angular.module('TD1', ['ngCookies']);

myApp.controller('controllerTD1', ["$cookies",function($cookies){

    // Retrieving a cookie
    var favoriteCookie = $cookies.get('Message');
    this.info="";
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
        if(self.message.length>0) {
            self.info = 'Note sauvegardée';
            $cookies.put('Message', self.message);
        }

    };

    if($cookies.get('Message')!= null){
     self.message = favoriteCookie;
     }

}]);