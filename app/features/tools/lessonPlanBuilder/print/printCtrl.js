'use strict';

function PrintCtrl($scope, LessonInfoService, ActivityService, ObjectivesService) {
  $scope.lessonInfo = LessonInfoService.lessonInfo;
  $scope.activities = ActivityService.activities;
  $scope.objectives = ObjectivesService.objectives;

  $scope.print = function() {
    window.print();
  }
}

angular
  .module('lessonPlanBuilderApp')
  .controller('PrintCtrl', ['$scope', 'LessonInfoService', 'ActivityService', 'ObjectivesService', PrintCtrl]);

