'use strict';

function PrintCtrl($scope, lessonInfoData) {
  $scope.lessonInfoData = lessonInfoData;

  $scope.print = function() {
    window.print();
  }
}

angular
  .module('lessonPlanBuilderApp')
  .controller('PrintCtrl', PrintCtrl)

