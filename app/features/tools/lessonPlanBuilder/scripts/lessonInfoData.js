'use strict';

angular
  .module('lessonPlanBuilderApp')
  .service('lessonInfoData', function() {
    return {
      lessonName: "",
      lessonDesc: "",
      teacherName: "",
      lessonDuration: "",
      lessonDate: ""
    };
  });
