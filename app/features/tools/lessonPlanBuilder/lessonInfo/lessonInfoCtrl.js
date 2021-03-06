'use strict';

function LessonInfoCtrl($scope, LessonInfoService) {

  var emptyLessonInfo = angular.copy(LessonInfoService.lessonInfo);

  $scope.lessonInfo = LessonInfoService.lessonInfo;


  $scope.clearContents = function() {
    $scope.lessonInfo = angular.copy(emptyLessonInfo);
    $scope.lessonInfoForm.$setPristine();
  };
}

angular
  .module('lessonPlanBuilderApp')
  .controller('LessonInfoCtrl', ['$scope', 'LessonInfoService', LessonInfoCtrl]);

