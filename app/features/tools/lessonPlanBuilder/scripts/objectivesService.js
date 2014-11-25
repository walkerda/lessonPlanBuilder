'use strict';

function ObjectivesService() {

  var emptyObjective = {
    objDesc: ""
  };

  var objectives = [angular.copy(emptyObjective)];

  function addObjective() {
    objectives.push(angular.copy(emptyObjective));
  }

  return {
    objectives: objectives,
    add: addObjective
  };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('ObjectivesService', ObjectivesService);
