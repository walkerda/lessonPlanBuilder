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

  function clearActivityContents(index) {
    activities[index] = angular.copy(emptyActivity);
  }

  function deleteActivity(index) {
    activities.splice(index, 1);
  }

  return {
    activities: activities,
    add: addActivity,
    clear: clearActivityContents,
    delete: deleteActivity
  };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('ActivityService', [ActivityService]);
