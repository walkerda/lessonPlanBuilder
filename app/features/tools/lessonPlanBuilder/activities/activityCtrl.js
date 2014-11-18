'use strict';

function ActivityCtrl($scope, activityData, lessonInfoData) {
  var emptyActivityEntry = angular.copy(activityData);

  $scope.activities = [activityData];
  $scope.lessonInfoData = lessonInfoData;

  $scope.addActivity = function(){
    //emptyActivityEntry = angular.copy(activityData);
    $scope.activities.push(angular.copy(emptyActivityEntry));
  };
  
  $scope.clearContents = function(index) {
    $scope.activities[index] = angular.copy(emptyActivityEntry);
    //$scope.activityEntry.$setPristine();
  }
}

angular
  .module('lessonPlanBuilderApp')
  .controller('ActivityCtrl', ['$scope', 'activityData', 'lessonInfoData', ActivityCtrl]);
