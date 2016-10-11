(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.listFoods = "";

  $scope.checkList = function () {

    var comma = ',';
    var messageGood = "Enjoy!";
    var messageMuch = "Too Much!";
    var messageEmpty = "Please enter data first";
    var enough = 3;

    var foodList = $scope.listFoods;
    var arrayFoods = foodList.split(comma);
    var quatity = arrayFoods.length;

    if (foodList == "") {
      $scope.messageCheck = messageEmpty;
    } else if (quatity <= 3) {
      $scope.messageCheck = messageGood;
    } else {
      $scope.messageCheck = messageMuch;
    }
  };
}

})();
