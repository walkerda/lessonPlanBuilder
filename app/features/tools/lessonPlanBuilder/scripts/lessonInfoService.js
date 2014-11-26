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

  function clearLessonInfo() {
    lessonInfo = angular.copy(emptyLesson);
    console.log("trying to clear contents");

  }

    return {
      lessonInfo: lessonInfo,
      clear: clearLessonInfo
    };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('LessonInfoService', [LessonInfoService]);
