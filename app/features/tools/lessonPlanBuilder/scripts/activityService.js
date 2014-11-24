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

  //function addActivity() {
  //  return ActivityService.activities.push(angular.copy(ActivityService.emptyActivity));
  //}

  //function clearActivityContents(index) {
  //  ActivityService.activities[index] = angular.copy(ActivityService.emptyActivity);
  //  return ActivityService.activities[index];
  //}

  return {
    activities: [angular.copy(emptyActivity)],
    emptyActivity: emptyActivity
    //add: addActivity,
    //clear: clearActivityContents
  };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('ActivityService', ActivityService);
