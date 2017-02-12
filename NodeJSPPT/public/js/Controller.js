(function () {
    
    
    var app = angular.module("NodeJSPPT");
    
    var Controller = function ($scope, $http, hotkeys, $window, $location, $rootScope) {
        
        if (!$rootScope.pages) {
            
            $rootScope.pages = [
                { page: "main", active: true, sequence: 0 }, 
                { page: "contents", active: false, sequence: 1 },
                { page: "1", active: false, sequence: 2 },
                { page: "2", active: false, sequence: 3 },
                { page: "3", active: false, sequence: 4 },
                { page: "4", active: false, sequence: 5 },
                { page: "5", active: false, sequence: 6 },
                { page: "6", active: false, sequence: 7 },
                { page: "7", active: false, sequence: 8 },
                { page: "8", active: false, sequence: 9 },
                { page: "9", active: false, sequence: 10 },
                { page: "10", active: false, sequence: 11 },
                { page: "11", active: false, sequence: 12 },
                { page: "12", active: false, sequence: 13 },
                { page: "13", active: false, sequence: 14 },
                { page: "14", active: false, sequence: 15 },
                { page: "15", active: false, sequence: 16 },
                { page: "16", active: false, sequence: 17 },
                { page: "17", active: false, sequence: 18 },
                { page: "18", active: false, sequence: 19 }
            ];
        }
        
        $scope.ShowFirstQ = false;
        $scope.ShowSecondQ = false;
        $scope.ShowThirdQ = false;
        $scope.ShowFourthQ = false;
        $scope.ShowFifthQ = false;
        
        $scope.ShowQ = function (Q) {
            switch (Q) {
                case "FirstQ":
                    $scope.ShowFirstQ = true;
                    break;
                case "SecondQ":
                    $scope.ShowSecondQ = true;
                    break;
                case "ThirdQ":
                    $scope.ShowThirdQ = true;
                    break;
                case "FourthQ":
                    $scope.ShowFourthQ = true;
                    break;
                case "FifthQ":
                    $scope.ShowFifthQ = true;
                    break;
            }
        };
        
        $scope.activePage = [];
        
        function getActivePage() {
            $scope.activePage = $scope.pages.filter(function (page) { return page.active == true; });
        };
        
        getActivePage();
        
        var navigationcontroller = function () {
            
            var currSequence;
            var toNavigate = [];
            var index;
            var newIndex;
            
            var left = function () {
                index = $scope.pages.indexOf($scope.activePage[0]);
                $rootScope.pages[index].active = false;
                currSequence = $scope.activePage[0].sequence;
                toNavigate = $rootScope.pages.filter(function (page) { return page.sequence == currSequence - 1; });
                newIndex = $rootScope.pages.indexOf(toNavigate[0]);
                $rootScope.pages[newIndex].active = true;
                getActivePage();
                $location.path("/" + toNavigate[0].page);
            };
            var right = function () {
                index = $scope.pages.indexOf($scope.activePage[0]);
                $rootScope.pages[index].active = false;
                currSequence = $scope.activePage[0].sequence;
                toNavigate = $rootScope.pages.filter(function (page) { return page.sequence == currSequence + 1; });
                newIndex = $rootScope.pages.indexOf(toNavigate[0]);
                $rootScope.pages[newIndex].active = true;
                getActivePage();
                $location.path("/" + toNavigate[0].page);
            };
            var home = function () {
                index = $scope.pages.indexOf($scope.activePage[0]);
                $rootScope.pages[index].active = false;
                currSequence = $scope.activePage[0].sequence;
                toNavigate = $rootScope.pages.filter(function (page) { return page.sequence == 0; });
                newIndex = $rootScope.pages.indexOf(toNavigate[0]);
                $rootScope.pages[newIndex].active = true;
                getActivePage();
                $location.path("/" + toNavigate[0].page);
            };
            var end = function () {
                index = $scope.pages.indexOf($scope.activePage[0]);
                $rootScope.pages[index].active = false;
                currSequence = $scope.activePage[0].sequence;
                toNavigate = $rootScope.pages.filter(function (page) { return page.page == "18"; });
                newIndex = $rootScope.pages.indexOf(toNavigate[0]);
                $rootScope.pages[newIndex].active = true;
                getActivePage();
                $location.path("/" + toNavigate[0].page);
            };
            
            return {
                left: left, 
                right: right,
                home: home,
                end: end
            };
        };
        
        hotkeys.bindTo($scope)
            .add({
            combo: "left",
            callback: navigatecallback
        })
        .add({
            combo: "right",
            callback: navigatecallback
        })
        .add({
            combo: "up",
            callback: navigatecallback
        })
        .add({
            combo: "down",
            callback: navigatecallback
        })
        .add({
            combo: "home",
            callback: navigatecallback
        })
        .add({
            combo: "end",
            callback: navigatecallback
        })
        .add({
            combo: "enter",
            callback: navigatecallback
        })
        .add({
            combo: "pageup",
            callback: navigatecallback
        })
        .add({
            combo: "pagedown",
            callback: navigatecallback
        });
        
        function navigatecallback(event, hotkey) {
            var navigate = navigationcontroller();
            event.preventDefault();
            
            switch (hotkey.combo[0]) {
                case "left":
                    navigate.left();
                    break;
                case "right":
                    navigate.right();
                    break;
                case "up":
                    navigate.left();
                    break;
                case "down":
                    navigate.right();
                    break;
                case "home":
                    navigate.home();
                    break;
                case "end":
                    navigate.end();
                    break;
                case "pageup":
                    navigate.left();
                    break;
                case "pagedown":
                    navigate.right();
                    break;
                case "enter":
                    navigate.right();
                    break;
            }
        };

    };
    
    app.controller("Controller", ["$scope", "$http", "hotkeys", "$window", "$location", "$rootScope", Controller]);

}());