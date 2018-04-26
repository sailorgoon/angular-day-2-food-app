console.log('client.js has been loaded');

var app = angular.module('FoodApp', []);

app.controller('FoodController', ['$http', function ($http) {  //putting in brackets added a dependency
    console.log('FoodController has been loaded');
    var self = this;
    self.message = 'Konnichiwa';


    self.newFood = {};
getAllFoods();

    // self.createFood = function () {
    //     }    console.log(self.newFood);
    
        self.addFood = function(){
            $http({
                method: 'POST',
                url: '/food',
                data: self.newFood
            })
            .then(function(response){
                console.log(response);
                getAllFoods();
                // self.food.push(angular.copy(self.newFood));
        // console.log(self.food);
            })
            .catch(function(error){
                console.log('error on /food POST', error);
            })
        
    };

    function getAllFoods(){
        $http({
            method: 'GET',
            url: '/food'
    
        })
            .then(function (response) {
                console.log(response.data);
                self.allFood = response.data;
            })
            .catch(function (error) {
                console.log('error on /food GET', error);
            })
    }
}]);

