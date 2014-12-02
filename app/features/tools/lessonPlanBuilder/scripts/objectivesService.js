'use strict';

function ObjectivesService() {

  var emptyObjective = {
    objTitle: "",
    objDesc: ""
  };

  var objectives = [angular.copy(emptyObjective)];

  function addObjective() {
    objectives.push(angular.copy(emptyObjective));
  }
  
  function clearObjectiveContents(index) {
    objectives[index] = angular.copy(emptyObjective);
  }

  function deleteObjective(index) {
    objectives.splice(index, 1);
  }

  return {
    objectives: objectives,
    add: addObjective,
    clear: clearObjectiveContents,
    delete: deleteObjective
  };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('ObjectivesService', [ObjectivesService]);
