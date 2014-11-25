'use strict';

function ActivitiesCtrl($scope, ActivityService, LessonInfoService, ObjectivesService) {

  $scope.activities = ActivityService.activities;
  $scope.lessonInfoData = LessonInfoService.lessonInfo;
  $scope.objectives = ObjectivesService.objectives;

  $scope.addActivity = function() {
    ActivityService.add();
  };

  $scope.clearContents = function() {
    ActivityService.clear();
  };
}

angular
  .module('lessonPlanBuilderApp')
  .controller('ActivitiesCtrl', ['$scope', 'ActivityService', 'LessonInfoService', 'ObjectivesService', ActivitiesCtrl]);

