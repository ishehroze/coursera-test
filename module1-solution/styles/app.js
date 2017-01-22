(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = [$scope];

function LunchCheckController($scope) {
    $scope.message = "Dummy";
    $scope.printMessage = function (comma_sep_list) {
        return checkList(comma_sep_list);
    }
}

function checkList(comma_sep_list) {
    if (comma_sep_list === "") {
        return "Please enter data first";
    } else {
        return "Enjoy or Too Much";
    }

}

})();