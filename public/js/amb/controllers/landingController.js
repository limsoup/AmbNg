ambApp.controller("landingController", function($scope, $http, $stateParams){
    $scope.data = {};

    $scope.viewData = {
        landingLinkName: $stateParams.linkName
    };

    var data = $scope.$parent.data.links;
    for (key in data) {
            if($stateParams.linkName == data[key].name){
                $scope.data.matchedLink = data[key];
                data[key].clicks = data[key].clicks + 1;
            }
    }

});