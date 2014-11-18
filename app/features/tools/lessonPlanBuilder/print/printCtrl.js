'use strict';

function PrintCtrl($scope, lessonInfoData, activityData) {
  $scope.lessonInfoData = lessonInfoData;
  $scope.activityData = activityData;

  $scope.print = function() {
    window.print();
  }
}

angular
  .module('lessonPlanBuilderApp')
  .controller('PrintCtrl', ['$scope', 'lessonInfoData', 'activityData', PrintCtrl]);

