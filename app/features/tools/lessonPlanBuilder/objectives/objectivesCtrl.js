'use strict';

function ObjectivesCtrl($scope, ObjectivesService) {

  $scope.objectives = ObjectivesService.objectives;
  $scope.addObjective = ObjectivesService.add;
  $scope.deleteObjective = ObjectivesService.delete;
  
  $(function() {
    setTimeout(function(){$('[data-toggle="tooltip"]').tooltip({container: 'body'});}, 1000);
  });
  
}

angular
  .module('lessonPlanBuilderApp')
  .controller('ObjectivesCtrl', ['$scope', 'ObjectivesService', ObjectivesCtrl]);
