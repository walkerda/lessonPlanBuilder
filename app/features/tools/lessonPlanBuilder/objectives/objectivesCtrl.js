'use strict';

function ObjectivesCtrl($scope, ObjectivesService) {

  $scope.objectives = ObjectivesService.objectives;
  $scope.addObjective = ObjectivesService.add;
  $scope.deleteObjective = ObjectivesService.delete;

}

angular
  .module('lessonPlanBuilderApp')
  .controller('ObjectivesCtrl', ['$scope', 'ObjectivesService', ObjectivesCtrl]);
