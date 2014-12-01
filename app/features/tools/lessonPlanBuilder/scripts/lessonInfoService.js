'use strict';

function LessonInfoService() {

  var emptyLesson = {
    lessonName: "",
    lessonDesc: "",
    teacherName: "",
    lessonDuration: "",
    lessonDate: ""
  };

  var lessonInfo = angular.copy(emptyLesson);

  return {
    lessonInfo: lessonInfo
  };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('LessonInfoService', [LessonInfoService]);
