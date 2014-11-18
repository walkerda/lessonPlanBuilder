'use strict';

angular
  .module('lessonPlanBuilderApp')
  .factory('activityData', function() {
    return {
      activityName: "",
      activityDesc: "",
      activityDuration: "",
      activityMat: "",
      activityEquip: "",
      relatedObj: ""
    };
  });
