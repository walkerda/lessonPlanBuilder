'use strict';

function LessonInfoCtrl($scope, lessonInfoData) {
  $scope.lessonInfoData = lessonInfoData;
}

angular
  .module('lessonPlanBuilderApp')
  .controller('LessonInfoCtrl', ['$scope', 'lessonInfoData', LessonInfoCtrl]);

