'use strict';

function LessonInfoService() {

  var emptyLesson = {
    lessonName: "",
    lessonDesc: "",
    teacherName: "",
    lessonDuration: "",
    lessonDate: ""
  };

  function clearLessonInfo() {
    console.log('it works');
  }

    return {
      lessonInfo: emptyLesson,
      clear: clearLessonInfo
    };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('LessonInfoService', LessonInfoService);
