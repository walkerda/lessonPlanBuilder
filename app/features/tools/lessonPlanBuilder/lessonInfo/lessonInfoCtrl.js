'use strict';

function LessonInfoCtrl($scope, lessonInfoData) {
  var emptyLessonInfo = angular.copy(lessonInfoData);

  $scope.lessonInfoData = lessonInfoData;

  $scope.clearContents = function() {
    $scope.lessonInfoData = angular.copy(emptyLessonInfo);
    if ($scope.lessonInfo) {
      $scope.lessonInfo.$setPristine();
    }
  }
}

angular
  .module('lessonPlanBuilderApp')
  .controller('LessonInfoCtrl', ['$scope', 'lessonInfoData', LessonInfoCtrl]);

