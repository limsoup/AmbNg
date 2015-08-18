ambApp.controller("rootController", function($scope, $http, $stateParams){
    $scope.data = {};

    $http.get('js/amb/data/links.json').success(function(data) {
        //TODO: Connect to Rest Service or data source
        $scope.data.links = data;
    });

    $scope.viewData = {
        linkName : '',
        linkClicks: 0,
    };

    $scope.viewData.landingLinkName = $stateParams.linkName;

    $scope.addLink = function () {
        $scope.data.links.push( {
            "name" :  $scope.viewData.linkName ,
            "clicks" : $scope.viewData.linkClicks
        });
        $scope.viewData.linkName = '';
        $scope.viewData.linkClicks = 0;
    };

    $scope.editLink = function (link) {
        $scope.viewData.linkName = link.name;
        $scope.viewData.linkClicks = link.clicks;
        $scope.deleteLink(link);
    };

    $scope.deleteLink = function (link) {
        var i = $scope.data.links.indexOf(link);
        if(i != -1) {
            $scope.data.links.splice(i, 1);
        }
    };
});