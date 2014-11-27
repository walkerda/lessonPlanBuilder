'use strict';

function ObjectivesService() {

  var emptyObjective = {
    objDesc: ""
  };

  var objectives = [angular.copy(emptyObjective)];

  function addObjective() {
    var newObjective = angular.copy(emptyObjective);
    objectives.push(newObjective);
  }

  function deleteObjective(index) {
    objectives.splice(index, 1);
  }

  return {
    objectives: objectives,
    add: addObjective,
    delete: deleteObjective
  };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('ObjectivesService', [ObjectivesService]);
