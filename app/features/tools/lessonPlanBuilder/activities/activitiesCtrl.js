'use strict';

function ActivitiesCtrl($scope, ActivityService, LessonInfoService, ObjectivesService) {

  $scope.activities = ActivityService.activities;
  $scope.lessonInfo = LessonInfoService.lessonInfo;
  $scope.objectives = ObjectivesService.objectives;

  $scope.addActivity = ActivityService.add;
  $scope.clearContents = ActivityService.clear;
  $scope.deleteActivity = ActivityService.delete;
  
  $scope.activityDuration = function(activity) {
    
    console.log($scope.activities.length);
    
    var totalActivityDuration = function(index) {
      var totalDuration = 0;
      for (var i = 0; i < $scope.activities.length; i++) {
        totalDuration += activity.activityDuration;
      }
      return totalDuration;
    }
    
    var possibleActivityDuration = $scope.lessonInfo.lessonDuration - totalActivityDuration();
    
    return possibleActivityDuration;
  };


}

angular
  .module('lessonPlanBuilderApp')
  .controller('ActivitiesCtrl', ['$scope', 'ActivityService', 'LessonInfoService', 'ObjectivesService', ActivitiesCtrl]);

