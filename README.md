# TD Angular I.U.T

[![N|Solid](https://dynamicimagesfr-v2b.netdna-ssl.com/product_class_external_product/angular_js_2_128_n.png)](https://angularjs.org/)


> "Comprenez bien que Shyam Seshadri, lorsqu'il créa Angular, n'a rien inventé.
>Il n'a fait qu'utiliser à bon escient des concepts et des bonnes pratiques
>incontournables dans le monde du développement web actuel."



## Statistiques Principales

| | |
| ------ | ------ |
| Nombre de commits réels | 16 |
| Commits à la maison | 7 |
| Ratio ajout/suprression code | 99.04% |
| Nb TD finis | 3,5 |
| Nb commits extra | 2 |

* Commit réel : commit sur du code portant sur les TD
* Ratio ajout/supression : pourcentage code ajouté par rapport code supprimé sur tout les commits
* Commit extra : commit sur cours (browserify, routage)

## TD1 : Bases de l'Angular JS

### TD1_EX1 : Application note

```sh
Avancé de TD1_EX1 : 100%
```
#### Objectifs : 

- Créer un module et un contrôleur
```sh
angular.module('TD1', []);
myApp.controller('controllerTD1', [{}]);
```
- Utiliser des directives Angular
```sh
data-ng-change, data-ng-model, etc
```
- Mettre en oeuvre le Data-binding
```sh
data-ng-model="tdCtrl.message"
```
- Utiliser un service ($cookies)
```sh
var myApp = angular.module('TD1', ['ngCookies']);
myApp.controller('controllerTD1', ["$cookies",function($cookies){
    // Retrieving a cookie
    var favoriteCookie = $cookies.get('Message');
}]);
```

#### Fonctionnalités :

- Saisir une note (message textuel) et afficher le nombre de caractères restants (le message est limité à 100 caractères saisis)
```sh
<textarea style="" data-ng-change="tdCtrl.count()" name="message" id="message" data-ng-model="tdCtrl.message"></textarea>

this.count = function(){
    self.info="Note modifiée";
    self.caract = 100 - self.message.length ;
}
```
- Enregistrer (côté client en JS ou avec les cookies)
```sh
this.save = function(){
  if(self.message.length>0) {
     self.info = 'Note sauvegardée';
     $cookies.put('Message', self.message);
   }
}
```
- Effacer le contenu
```sh
<button data-ng-click="tdCtrl.clear()" class="btn btn-primary">Effacer</button>
this.clear = function(){
    self.message = "";
};
```
- Afficher les messages d'info (sauvegarde, modification…)
```sh
<div ng-class="{	'alert-warning':tdCtrl.caract<50 ,
					'alert-danger':tdCtrl.caract<20 }" 
            class="alert alert-info alert-dismissible" role="alert">Nombre de caractères restant : {{tdCtrl.caract}}</div>
```
- Gérer les changements de classe CSS sur l'affichage d'info
```sh
<div ng-class="{	'alert-warning':tdCtrl.caract<50 ,
					'alert-danger':tdCtrl.caract<20 }" 
            class="alert alert-info alert-dismissible" role="alert">Nombre de caractères restant : {{tdCtrl.caract}}</div>
```

#### Interface de l'application :

[![N|Solid](http://slamwiki.kobject.net/_media/slam4/richclient/angularjs/ex1-note.png?cache=)](http://slamwiki.kobject.net/slam4/richclient/angularjs/td1)

#### Difficultés rencontrées :

Après un petit temps d'adaptation à ce nouveau langage, cette première application a été plutôt facile à réaliser. Mon premier blocage a été lors de l'inclusion du service $cookies. Mais maintenant que je sais comment faire cela est clair.

### TD1_EX2 : Choix de services

```sh
Avancé de TD1_EX2 : 100%
```
#### Objectifs : 

- Créer un module et un contrôleur
```sh
Voir TD1_EX1
```
- Utiliser des directives Angular
```sh
Voir TD1_EX1
```
- Mettre en oeuvre le Data-binding
```sh
Voir TD1_EX1
```
- Utiliser un service ($http)
```sh
var myApp = angular.module('TD1');
myApp.controller('controllerTD1', function($http){
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
});
```

#### Fonctionnalités :

- Sélectionner/désélectionner des services
```sh
<li  ng-repeat="service in tdCtrl.services" ng-click=" tdCtrl.toggleActive(service)></li>
this.toggleActive = function(service){
        this.service = service;
        if(this.service.active == true){
            this.service.active = false;
        }else{
            this.service.active = true;
        }
    };
```
- Calculer le montant dû
```sh
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
```
- Afficher le nombre de services sélectionnés
```sh
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
```

#### Interface de l'application :

[![N|Solid](http://slamwiki.kobject.net/_media/slam4/richclient/angularjs/td1-ex2-services.png?w=350&tok=2bd648)](http://slamwiki.kobject.net/slam4/richclient/angularjs/td1)

#### Difficultés rencontrées :

Après m'être renseigné sur les nouvelles différentes directives (ng-pluralize, etc..) le projet fut un peu plus compliqué que l'EX1. En effet ma première difficulté fut d'importer un JSON via le service $http. Après avoir réussi à l'importer et utiliser les directives nécessaires pour tout afficher, ma seconde difficulté n'était pas sur de l'Angular directement mais plus sur de la syntaxe JavaScript. En effet ayant peu fait de JS le simple fait de push dans un tableau ou d'utiliser des objets fut une totale découverte. 

## TD2 : Directives, Services et Filtres

### TD2_EX1 : Choix multiples

```sh
Avancé de TD2_EX1 : 100%
```
#### Objectifs : 

- Créer un module et un contrôleur
```sh
Voir TD1_EX1
```
- Utiliser des directives Angular
```sh
Voir TD1_EX1
```
- Mettre en oeuvre le Data-binding
```sh
Voir TD1_EX1
```

#### Fonctionnalités :

- Lister les produits disponibles
```sh
$http.get("./app/dispoItems.json").then(
    function (response) {
    self.dispoItems = response.data;
});
<select ng-options="item.title for item in tdCtrl.dispoItems" ></select>
```
- Ajouter un ou plusieurs produits disponibles aux produits sélectionnés
```sh
this.selectItem = function(){
    self.includedItems.push(this.selectedDispoItems[0]);
    nb = self.dispoItems.indexOf(this.selectedDispoItems[0]);
    self.dispoItems.splice(nb, 1);
};

<select ng-model="tdCtrl.selectedDispoItems" ng-dblclick="tdCtrl.selectItem()" ></select>
```
- Ajouter tous les produits disponibles aux produits sélectionnés
```sh
this.addAllToIncluded = function(){
    self.dispoItems.forEach(function(element) {
        self.includedItems.push(element);
    });
    self.dispoItems = [];
};

<div title="Ajouter tous" class="btn btn-primary list-btn" ng-click="tdCtrl.addAllToIncluded()" ng-disabled="tdCtrl.dispoItems.length<1"><span aria-hidden="true" class="glyphicon glyphicon-fast-forward"></span></div>
```
- Retirer un ou plusieurs produits sélectionnés
```sh
this.removeFromIncluded = function(){
    this.selectedIncludedItems.forEach(function(element) {
        self.dispoItems.push(element);
        nb = self.includedItems.indexOf(element);
        self.includedItems.splice(nb, 1);
    });
};
```
- Retirer tous les produits sélectionnés
```sh
this.removeAllFromIncluded = function(){
    self.includedItems.forEach(function(element) {
        self.dispoItems.push(element);
    });
    self.includedItems = [];
};
```
- Valider le choix de produits sélectionnés
```sh
<div class="btn btn-primary" style="width:98%;text-align: right" ng-click="tdCtrl.step=2" ng-disabled="tdCtrl.includedItems.length<1" disabled="disabled">
```
- Revenir au choix des produits
```sh
<div class="btn btn-primary" style="width:98%;text-align: right;margin-top:5px" ng-click="tdCtrl.step=1">
```

#### Interface de l'application :

[![N|Solid](http://slamwiki.kobject.net/_media/slam4/richclient/angularjs/td1-ex3.png?w=700&tok=9b1ee6)](http://slamwiki.kobject.net/slam4/richclient/angularjs/td2)
[![N|Solid](http://slamwiki.kobject.net/_media/slam4/richclient/angularjs/td1-ex3-2.png?w=700&tok=b922cc)](http://slamwiki.kobject.net/slam4/richclient/angularjs/td2)

#### Difficultés rencontrées :

Cet exercice m'a parut assez facile. En effet grâce à l'exercice précédent mon niveau en JavaScript c'est amélioré et comme il n'y avait pas grand chose de nouveau sur cet exercice cela m'a parut plus simple.

### TD2_EX2 : Gestion des contacts

```sh
Avancé de TD2_EX2 : 100%
```
#### Objectifs : 

- Créer un module et un contrôleur
```sh
Voir TD1_EX1
```
- Utiliser des directives Angular
```sh
Voir TD1_EX1
```
- Mettre en oeuvre le Data-binding
```sh
Voir TD1_EX1
```
- Utiliser un service ($http)
```sh
```

#### Fonctionnalités :

- Sélectionner/désélectionner des services
```sh
```
- Calculer le montant dû
```sh
```
- Afficher le nombre de services sélectionnés
```sh
```

#### Interface de l'application :

[![N|Solid](http://slamwiki.kobject.net/_media/slam4/richclient/angularjs/td1-ex2-services.png?w=350&tok=2bd648)](http://slamwiki.kobject.net/slam4/richclient/angularjs/td1)

#### Difficultés rencontrées :

Après m'être renseigné sur les nouvelles différentes directives (ng-pluralize, etc..) le projet fut un peu plus compliqué que l'EX1. En effet ma première difficulté fut d'importer un JSON via le service $http. Après avoir réussi à l'importer et utiliser les directives nécessaires pour tout afficher, ma seconde difficulté n'était pas sur de l'Angular directement mais plus sur de la syntaxe JavaScript. En effet ayant peu fait de JS le simple fait de push dans un tableau ou d'utiliser des objets fut une totale découverte.
## TD3 : Service http et API

### TD3_EX1 : Convertisseur de devises

```sh
Avancé de TD3_EX1 : 65%
```
#### Objectifs : 

- Créer un module et un contrôleur
```sh
Voir TD1_EX1
```
- Utiliser des directives Angular
```sh
Voir TD1_EX1
```
- Mettre en oeuvre le Data-binding
```sh
Voir TD1_EX1
```
- Utiliser un service ($http)
```sh
```

#### Fonctionnalités :

- Sélectionner/désélectionner des services
```sh
```
- Calculer le montant dû
```sh
```
- Afficher le nombre de services sélectionnés
```sh
```

#### Interface de l'application :

[![N|Solid](http://slamwiki.kobject.net/_media/slam4/richclient/angularjs/td1-ex2-services.png?w=350&tok=2bd648)](http://slamwiki.kobject.net/slam4/richclient/angularjs/td1)

#### Difficultés rencontrées :

Après m'être renseigné sur les nouvelles différentes directives (ng-pluralize, etc..) le projet fut un peu plus compliqué que l'EX1. En effet ma première difficulté fut d'importer un JSON via le service $http. Après avoir réussi à l'importer et utiliser les directives nécessaires pour tout afficher, ma seconde difficulté n'était pas sur de l'Angular directement mais plus sur de la syntaxe JavaScript. En effet ayant peu fait de JS le simple fait de push dans un tableau ou d'utiliser des objets fut une totale découverte.
## TD5 : Routage et multi-modules

### TD5_EX1 

```sh
Avancé de TD5_EX1 : 35%
```
#### Objectifs : 

- Créer un module et un contrôleur
```sh
Voir TD1_EX1
```
- Utiliser des directives Angular
```sh
Voir TD1_EX1
```
- Mettre en oeuvre le Data-binding
```sh
Voir TD1_EX1
```
- Utiliser un service ($http)
```sh
```

#### Fonctionnalités :

- Sélectionner/désélectionner des services
```sh
```
- Calculer le montant dû
```sh
```
- Afficher le nombre de services sélectionnés
```sh
```

#### Interface de l'application :

[![N|Solid](http://slamwiki.kobject.net/_media/slam4/richclient/angularjs/td1-ex2-services.png?w=350&tok=2bd648)](http://slamwiki.kobject.net/slam4/richclient/angularjs/td1)

#### Difficultés rencontrées :

Après m'être renseigné sur les nouvelles différentes directives (ng-pluralize, etc..) le projet fut un peu plus compliqué que l'EX1. En effet ma première difficulté fut d'importer un JSON via le service $http. Après avoir réussi à l'importer et utiliser les directives nécessaires pour tout afficher, ma seconde difficulté n'était pas sur de l'Angular directement mais plus sur de la syntaxe JavaScript. En effet ayant peu fait de JS le simple fait de push dans un tableau ou d'utiliser des objets fut une totale découverte.
