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

### TD1 : Bases de l'Angular JS

#### TD1_EX1 : Application note

```sh
Avancé de TD1_EX1 : 100%
```
Objectifs : 

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

Fonctionnalités :

- Saisir une note (message textuel) et afficher le nombre de caractères restants (le message est limité à 100 caractères saisis)
- Enregistrer (côté client en JS)
- Effacer le contenu
- Afficher les messages d'info (sauvegarde, modification…)
- Gérer les changements de classe CSS sur l'affichage d'info

Interface de l'application :

[![N|Solid](http://slamwiki.kobject.net/_media/slam4/richclient/angularjs/ex1-note.png?cache=)](https://angularjs.org/)

Difficultés rencontrées :

Après un petit temps d'adaptation à ce nouveau language, cette première application a été plutôt facile à réaliser. Mon premier bloquage a été lors de l'inclusion du service $cookies. Mais maintenant que je sais comment faire cela est clair.

#### TD1_EX2 : Choix de services

```sh
Avancé de TD1_EX2 : 100%
```

### TD2 : Directives, Services et Filtres

#### TD2_EX1 : Choix multiples

```sh
Avancé de TD2_EX1 : 100%
```

#### TD2_EX2 : Gestion des contacts

```sh
Avancé de TD2_EX2 : 100%
```

### TD3 : Service http et API

#### TD3_EX1 : Convertisseur de devises

```sh
Avancé de TD3_EX1 : 65%
```

### TD5 : Routage et multi-modules

#### TD5_EX1 

```sh
Avancé de TD5_EX1 : 35%
```

