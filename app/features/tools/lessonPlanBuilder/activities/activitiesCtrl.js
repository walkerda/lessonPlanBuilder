'use strict';

function ActivitiesCtrl($scope, activityData, lessonInfoData) {

  $scope.activities = activityData.activities;
  
  $scope.lessonInfoData = lessonInfoData;

  // move this function to service
  $scope.addActivity = function(){
    $scope.activities.push(angular.copy(activityData.emptyActivity));
  };

  // move this function to service
  $scope.clearContents = function(index) {
    $scope.activities[index] = angular.copy(activityData.emptyActivity);
  };
}

angular
  .module('lessonPlanBuilderApp')
  .controller('ActivitiesCtrl', ['$scope', 'activityData', 'lessonInfoData', ActivitiesCtrl]);

