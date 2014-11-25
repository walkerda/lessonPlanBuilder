'use strict';

function LessonInfoCtrl($scope, LessonInfoService) {

  $scope.lessonInfoData = LessonInfoService.lessonInfo;

  $scope.clearContents = function() {
    LessonInfoService.clear();
  };
}

angular
  .module('lessonPlanBuilderApp')
  .controller('LessonInfoCtrl', ['$scope', 'LessonInfoService', LessonInfoCtrl]);

