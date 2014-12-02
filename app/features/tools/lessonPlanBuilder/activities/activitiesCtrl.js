'use strict';

function ActivitiesCtrl($scope, ActivityService, LessonInfoService, ObjectivesService) {

  $scope.activities = ActivityService.activities;
  $scope.lessonInfo = LessonInfoService.lessonInfo;
  $scope.objectives = ObjectivesService.objectives;

  $scope.addActivity = ActivityService.add;
  $scope.clearContents = ActivityService.clear;
  $scope.deleteActivity = ActivityService.delete;
  
  $scope.activityDuration = function(activity) {
    return $scope.lessonInfo.lessonDuration;
  };


}

angular
  .module('lessonPlanBuilderApp')
  .controller('ActivitiesCtrl', ['$scope', 'ActivityService', 'LessonInfoService', 'ObjectivesService', ActivitiesCtrl]);

