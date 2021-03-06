// not required on the version above 1.2 - code inside an IIFE to avoid Global declarations

// creating a module formApp
var formApp = angular.module('formApp', []);

// controller for fetching countries
formApp.controller('countryCtrl', function ($scope, $http) {
  
  $http.get("https://api3-pegasi.uat.crowdstaffing.com/countries?dropdown=true")
        .then(function(res) {
            console.log("Fetching countries...");
            $scope.countries = res.data;
            console.log("Fetched countries.");
        })
        .catch(function(err) {
            console.log(err);
        });
      
});

// controller for posting form data
formApp.controller('postServiceCtrl', function ($scope, $http) {

  $scope.submitForm = function () {
    // creating an object that will pass to the service

    // var data = $scope.user;

    // calling api
    // $http.post("https://api3-pegasi.uat.crowdstaffing.com/talents", JSON.stringify(data))
    //         .then(function(res) {
    //             console.log(res);
    //         })
    //         .then(function(res){
    //                 console.log(res);
    //             })
    //             .catch(function(err){
    //                 console.log(err);
    //             });

    $http({
      method: 'POST',
      url: 'https://api3-pegasi.uat.crowdstaffing.com/talents',
      data: $scope.user,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

});