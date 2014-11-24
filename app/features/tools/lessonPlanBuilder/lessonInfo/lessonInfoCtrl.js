'use strict';

function LessonInfoCtrl($scope, LessonInfoService) {
  //var emptyLessonInfo = angular.copy(LessonInfoService.lessonInfo);

  $scope.lessonInfoData = LessonInfoService.lessonInfo;

  //$scope.clearContents = function() {
  //  $scope.lessonInfoData = angular.copy(emptyLessonInfo);
  //  if ($scope.lessonInfo) {
  //    $scope.lessonInfo.$setPristine();
  //  }
  //}

  $scope.clearContents = LessonInfoService.clear();
}

angular
  .module('lessonPlanBuilderApp')
  .controller('LessonInfoCtrl', ['$scope', 'LessonInfoService', LessonInfoCtrl]);

