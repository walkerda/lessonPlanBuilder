'use strict';

function ActivitiesCtrl($scope, activityData, lessonInfoData) {
  var emptyActivityEntry = angular.copy(activityData);

  $scope.activities = [activityData];
  $scope.lessonInfoData = lessonInfoData;

  $scope.addActivity = function(){
    $scope.activities.push(angular.copy(emptyActivityEntry));
  };

  $scope.clearContents = function(index) {
    $scope.activities[index] = angular.copy(emptyActivityEntry);
  };
}

angular
  .module('lessonPlanBuilderApp')
  .controller('ActivitiesCtrl', ['$scope', 'activityData', 'lessonInfoData', ActivitiesCtrl]);

