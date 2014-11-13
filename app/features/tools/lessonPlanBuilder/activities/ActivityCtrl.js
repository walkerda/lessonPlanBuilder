'use strict';

function ActivityCtrl($scope, activityData) {
  $scope.activityData = activityData;
}


angular
  .module('lessonPlanBuilderApp')
  .controller('ActivityCtrl', ActivityCtrl)
  .factory('activityData', function() {
    return {};
  });
