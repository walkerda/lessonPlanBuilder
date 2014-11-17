'use strict';

function ActivityCtrl($scope, activityData, lessonInfoData) {
  $scope.activityData = activityData;
  $scope.lessonInfoData = lessonInfoData;
}

angular
  .module('lessonPlanBuilderApp')
  .controller('ActivityCtrl', ActivityCtrl);
