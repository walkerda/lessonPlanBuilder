'use strict';

function ObjectivesService() {

  var emptyObjective = {
    objDesc: ""
    //objValue: 1
  };

  var objectives = [angular.copy(emptyObjective)];

  function addObjective() {
    var newObjective = angular.copy(emptyObjective);
    //newObjective.objValue = (objectives.length - 1) + 1;
    //newObjective.objValue = objectives.length + 1;
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
