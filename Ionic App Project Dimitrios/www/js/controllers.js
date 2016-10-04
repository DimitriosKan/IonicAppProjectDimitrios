angular.module('someklone.controllers', [])

.controller('HomeCtrl', function ($scope, Posts, $ionicPopup, $http) {
    $http.get('https://mobile-internet-program.herokuapp.com/phase2').then(function (response) {
        Posts.replacepost(response.data);
        $scope.posts = response.data;
    })
    //Posts.following().then(function (data)
    //    {
    //        $scope.posts = data;
    //    }
    //);

    $scope.like = function (postId) {
        Posts.like(postId).then(function () {});
    }

    $scope.showCustom = function(postId) {
        $scope.data = {};

        var customPopup = $ionicPopup.show({
            template: '<input type="text" ng-model="data.comment">',
            title: "Comment the post",
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }, {
                text: '<b>Write</b>',
                type: 'button-balanced',
                onTap: function (e) {
                  if (!$scope.data.comment) {
                    e.preventDefault();
                  } else {
                    Posts.comment(postId, $scope.data.comment).then(function () { });
                  }
                }
              }]
        });
    };
})

//.controller('CommentCtrl', function () {
//    $state.go('tab-comment');
//})

.controller('BrowseCtrl', function($scope, $state) {

    $scope.activateSearch = function()
    {
        $state.go('tab.browse-search');
    }
  
    $scope.browseDetail = function(id)
    {
        $state.go('tab.browse-detail', { id: id });
    }

})

.controller('BrowseDetailCtrl', function($scope, $stateParams) {
    console.log($stateParams);
})

.controller('SearchCtrl', function($scope, $state, $ionicHistory, Users) {

    $scope.input = {
        searchText: ""
    };

    $scope.searchResults = {
        people: [],
        tags: []
    }

    $scope.tabs = {
        people: true,
        tags: false
    }

    $scope.goBack = function()
    {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });

        $state.go('tab.browse');
    }

    $scope.emptySearch = function()
    {
        $scope.input.searchText = "";
    }

    $scope.tabActivate = function(tab)
    {
        for (var k in $scope.tabs) {
            if ($scope.tabs.hasOwnProperty(k)) 
            {
                $scope.tabs[k] = false;
            }
        }
        $scope.tabs[tab] = true;
    }

    $scope.updateSearch = function()
    {
        if($scope.tabs.people == true)
        {
            Users.searchUser($scope.input.searchText).then(function(result) {
                $scope.searchResults.people = result;
            });
        }
        else // search for posts with tags
        {

        }
    }
})

.controller('PostCtrl', function($scope, $state, $ionicHistory) {

    $scope.tabs = {
        gallery: true,
        photo: false
    }

    $scope.goBack = function()
    {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('tab.home');
    }

    $scope.photo = function()
    {
        $scope.tabs.photo = true;
        $scope.tabs.gallery = false;

        // activate camera
    }

    $scope.gallery = function()
    {
        $scope.tabs.photo = false;
        $scope.tabs.gallery = true;

        // fetch photos
    }

    $scope.confimPost = function()
    {
        $state.go('post-confirm');
    }

})

.controller('PostConfirmCtrl', function($scope, $state, $ionicHistory){
    $scope.goBack = function()
    {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('post');
    }

    $scope.sharePost = function()
    {
        console.log("not implemented yet");
    }
}) 

.controller('ActivityCtrl', function($scope, Users) {
    $scope.activity = Users.getActiveUserActivity();
})

.controller('AccountCtrl', function($scope, Users, Posts) {
    $scope.userData = Users.getActiveUser();

    Posts.getUserPosts($scope.userData.id).then(function(results){
        $scope.posts = results;
    });
});
