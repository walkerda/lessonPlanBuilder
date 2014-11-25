'use strict';

function ObjectivesService() {

  var counter = 1;
  
  var emptyObjective = {
    objDesc: "",
    objValue: counter
  };

  var objectives = [angular.copy(emptyObjective)];
 

  function addObjective() {
    var newObjective = angular.copy(emptyObjective);
    objectives.push(newObjective);
  }

  return {
    objectives: objectives,
    add: addObjective
  };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('ObjectivesService', ObjectivesService);
