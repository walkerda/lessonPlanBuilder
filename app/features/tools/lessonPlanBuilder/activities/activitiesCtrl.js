'use strict';

function ActivitiesCtrl($scope, ActivityService, LessonInfoService) {

  $scope.activities = ActivityService.activities;
  $scope.lessonInfoData = LessonInfoService.lessonInfo;

  //$scope.addActivity = ActivityService.add();
  //$scope.clearContents = ActivityService.clear();
}

angular
  .module('lessonPlanBuilderApp')
  .controller('ActivitiesCtrl', ['$scope', 'ActivityService', 'LessonInfoService', ActivitiesCtrl]);

