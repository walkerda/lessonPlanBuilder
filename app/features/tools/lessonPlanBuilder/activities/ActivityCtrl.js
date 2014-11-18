'use strict';

function ActivityCtrl($scope, activityData, lessonInfoData) {
  $scope.activityData = activityData;
  $scope.lessonInfoData = lessonInfoData;

  var emptyActivityEntry = angular.copy($scope.activityData);

  $scope.clearContents = function() {
    $scope.activityData = angular.copy(emptyActivityEntry);
    $scope.activityEntry.$setPristine();
  }
}

angular
  .module('lessonPlanBuilderApp')
  .controller('ActivityCtrl', ['$scope', 'activityData', 'lessonInfoData', ActivityCtrl]);
