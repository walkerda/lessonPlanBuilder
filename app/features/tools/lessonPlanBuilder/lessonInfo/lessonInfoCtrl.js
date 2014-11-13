'use strict';

function LessonInfoCtrl($scope, lessonInfoData) {
  $scope.lessonInfoData = lessonInfoData;

}

angular
  .module('lessonPlanBuilderApp')
  .controller('LessonInfoCtrl', LessonInfoCtrl)
  .factory("lessonInfoData", function() {
    return {};
  });


