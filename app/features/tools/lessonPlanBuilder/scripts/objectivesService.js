'use strict';

function ObjectivesService() {

  var emptyObjective = {
    objDesc: ""
  };

  function addObjective() {
    ObjectivesService.objectives.push(angular.copy(ObjectivesService.emptyObjective));
    //return;
  }

  return {
    objectives: [angular.copy(emptyObjective)],
    emptyObjective: emptyObjective,
    add: addObjective
  };
}



angular
  .module('lessonPlanBuilderApp')
  .factory('ObjectivesService', ObjectivesService);
