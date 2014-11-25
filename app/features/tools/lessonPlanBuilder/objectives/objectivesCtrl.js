'use strict';

function ObjectivesCtrl($scope, ObjectivesService) {

  $scope.objectives = ObjectivesService.objectives;
  $scope.addObjective = function() {
    ObjectivesService.add();
  };

}

angular
  .module('lessonPlanBuilderApp')
  .controller('ObjectivesCtrl', ['$scope', 'ObjectivesService', ObjectivesCtrl]);
