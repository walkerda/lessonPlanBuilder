'use strict';

// rename service to ActivityService
angular
  .module('lessonPlanBuilderApp')
  .factory('activityData', function() {
    var emptyActivity = {
      activityName: "",
      activityDesc: "",
      activityDuration: "",
      activityMat: "",
      activityEquip: "",
      relatedObj: ""
    };
    
    return {
      activities: [angular.copy(emptyActivity)],
      emptyActivity: emptyActivity
    };
  });
