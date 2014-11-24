'use strict';

function ObjectivesCtrl($scope, ObjectivesService) {

  $scope.ObjectivesService = ObjectivesService;
  $scope.objectives = ObjectivesService.objectives;
  //$scope.addObjective = function() {
  //  $scope.objectives.push(angular.copy(ObjectivesService.emptyObjective));
  //};
  $scope.addObjective = ObjectivesService.add();

}

angular
  .module('lessonPlanBuilderApp')
  .controller('ObjectivesCtrl', ['$scope', 'ObjectivesService', ObjectivesCtrl]);
