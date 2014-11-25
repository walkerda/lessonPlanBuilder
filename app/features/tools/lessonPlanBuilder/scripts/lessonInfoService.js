'use strict';

function LessonInfoService() {

  var emptyLesson = {
    lessonName: "",
    lessonDesc: "",
    teacherName: "",
    lessonDuration: "",
    lessonDate: ""
  };

  var ls = LessonInfoService;

  function clearLessonInfo() {
    ls.lessonInfo = angular.copy(emptyLesson);
    if (ls.lessonInfo) {
      ls.lessonInfo.$setPristine();
    }
  }

  //var emptyLessonInfo = angular.copy(LessonInfoService.lessonInfo);

  //$scope.clearContents = function() {
  //  $scope.lessonInfoData = angular.copy(emptyLessonInfo);
  //  if ($scope.lessonInfo) {
  //    $scope.lessonInfo.$setPristine();
  //  }
  //}

    return {
      lessonInfo: emptyLesson,
      clear: clearLessonInfo
    };
}

angular
  .module('lessonPlanBuilderApp')
  .factory('LessonInfoService', LessonInfoService);
