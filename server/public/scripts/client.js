console.log('client.js has been loaded');

var app = angular.module('MyApp', []);

app.controller('FoodController', function() {  //give it a name
    var self = this;
    self.message = 'Konnichiwa';
});