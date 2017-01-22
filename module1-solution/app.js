(function () { //iife
    angular.module('LunchCheck', [])
    .controller('LunchCheckMainController', LunchCheckMainController);

    LunchCheckMainController.$inject = ['$scope'];

    function LunchCheckMainController($scope) {
        $scope.message = "";
        $scope.printMessage = function () {
            $scope.message = lunchMenuCheckMessage($scope.lunchMenu);
        };
    }

    function lunchMenuCheckMessage(lunchMenu) {
        if (lunchMenu === "" | lunchMenu === undefined) {
            return "Please enter data first";
        }
        
        menuList = lunchMenu.split(',');
        menuListLength = menuList.length;

        if (menuListLength <= 3) {
            return "Enjoy!";
        } else {
            return "Too Much!";
        }
    };
})();