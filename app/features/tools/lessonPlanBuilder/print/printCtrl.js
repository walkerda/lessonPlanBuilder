'use strict';

function PrintCtrl($scope, lessonInfoData, activityData) {
  $scope.lessonInfoData = lessonInfoData;
  $scope.activities = activityData.activities;

  $scope.print = function() {
    window.print();
  }
}

angular
  .module('lessonPlanBuilderApp')
  .controller('PrintCtrl', ['$scope', 'lessonInfoData', 'activityData', PrintCtrl]);

