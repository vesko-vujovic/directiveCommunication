
var app = angular.module('app', []);

// Index Controller
app.controller('MyCtrl', ['$scope', function($scope, sharedService) {


}]);

/**
 * Communication over controller
 */


// Parent directive
app.directive("parent", function() {
  return {
    controller: function() {
      this.log = function(message) {
        console.log(message);
      };
    }
  };
});

// Child directive
app.directive("child", function() {
  return {
    require: "parent",
    link: function($scope, $elem, $attrs, parentCtrl) {
      parentCtrl.log("Hello, this is the Child speaking trough parent directive!!!");
    }
  };
});

/**
 *  Communication with events
 */

// Parent two directive
app.directive("parentTwo", function() {
  return {
   link: function($scope, $elem, $attrs) {
      $scope.$on("message", function (e, msg) {
        console.log(msg);
      });
    }
  };
});  

// Child two directive
app.directive("childTwo", function() {
  return {
    link: function($scope, $elem, $attrs) {
      $scope.$broadcast("message", "Hello, this is the child directive over the event!!!");
    }
  };
});

/**
 * Communication over $attrs
 */

app.directive("parentThree", function() {
  return {
    link: function($scope, $elem, $attrs) {
      $attrs.$observe("message", function(message) {
        if (message) {
          console.log(message);
        }
      });
    }
  };
});

app.directive("childThree", function() {
  return {
    link: function($scope, $elem, $attrs) {
      $attrs.message = "Hello, this is the child directive over the $attrs!";
    }
  };
});






