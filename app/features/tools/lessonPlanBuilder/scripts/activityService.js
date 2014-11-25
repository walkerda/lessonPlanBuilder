'use strict';

function ActivityService() {
  var emptyActivity = {
    activityName: "",
    activityDesc: "",
    activityDuration: "",
    activityMat: "",
    activityEquip: "",
    relatedObj: ""
  };

  var activities = [angular.copy(emptyActivity)];

  function addActivity() {
    activities.push(angular.copy(emptyActivity));
  }

  //function clearActivityContents(index) {
  //  ActivityService.activities[index] = angular.copy(ActivityService.emptyActivity);
  //  return ActivityService.activities[index];
  //}

  return {
    activities: activities,
    add: addActivity
    //clear: clearActivityContents
  };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('ActivityService', ActivityService);
