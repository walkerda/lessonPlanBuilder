'use strict';

function LessonInfoCtrl($scope, LessonInfoService) {

  //var emptyLessonInfo = angular.copy(LessonInfoService.lessonInfo);

  $scope.lessonInfo = LessonInfoService.lessonInfo;

  $scope.clearContents = LessonInfoService.clear;

  //$scope.clearContents = function() {
  //  $scope.lessonInfoData = angular.copy(emptyLessonInfo);
  //  if ($scope.lessonInfo) {
  //    $scope.lessonInfoForm.$setPristine();
  //  }
  //};
}

angular
  .module('lessonPlanBuilderApp')
  .controller('LessonInfoCtrl', ['$scope', 'LessonInfoService', LessonInfoCtrl]);

