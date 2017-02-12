(function () {
    
    var navigator = function ($scope) {
        
        $scope.pages = [
            { page: "main", active: true, sequence: 0 }, 
            { page: "1", active: false, sequence: 1 }, 
            { page: "2", active: false, sequence: 2 }
        ];

        $scope.activePage = [];
        
        function getActivePage() {
            $scope.activePage = $scope.pages.filter(function (page) { return page.active == true; });
            console.log($scope.activePage);
        };
        
        var navigationcontroller = function () {
            
            var currSequence;
            var toNavigate = [];
            var index;
            var newIndex;
            
            var left = function () {
                alert("left");
            };
            var right = function () {
                
                index = $scope.pages.indexOf($scope.activePage[0]);
                $scope.pages[index].active = false;                
                currSequence = $scope.activePage[0].sequence;                
                toNavigate = $scope.pages.filter(function (page) { return page.sequence == currSequence + 1; });                
                newIndex = $scope.pages.indexOf(toNavigate[0]);                
                $scope.pages[index].active = true;                
                //$window.location.href = "/" + toNavigate[0].page;
                return toNavigate[0].page;
            };
            var home = function () {
                alert("home");
            };
            var end = function () {
                alert("end");
            };
            
            return {
                left: left, 
                right: right,
                home: home,
                end: end
            };
        };
        
        getActivePage();
       
            
        return {
            navigationcontroller: navigationcontroller
        };

    };
    
    
    
    var module = angular.module("NodeJSPPT");
    module.factory("navigator", navigator);

}());