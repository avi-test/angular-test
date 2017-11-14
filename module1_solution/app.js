(function(){
'use script';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function($scope) {
  $scope.menu = "";
  $scope.message = "";
  $scope.checkIfTooMuch = function () {
    var str = $scope.menu;
    if (str) {
      var arrStr = str.split(',');
      //console.log("arrStr length : " + arrStr.length);
      if (arrStr.length <= 3 && arrStr.length > 1)
        $scope.message = "Enjoy!";
      else if (arrStr.length > 3 )
        $scope.message = "Too much!";
    } else {
      $scope.message = "Please enter data first";
    }
  };
});
})();
