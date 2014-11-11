'use strict';

/**
 * @ngdoc overview
 * @name lessonPlanBuilderApp
 * @description
 * # lessonPlanBuilderApp
 *
 * Main module of the application.
 */

function LessonInfoCtrl($scope, lessonInfoData) {
  $scope.lessonInfoData = lessonInfoData;
}



function PrintCtrl($scope, lessonInfoData) {
  $scope.lessonInfoData = lessonInfoData;

  function print() {

  }
}

function DatePickerCtrl($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

}


angular
  .module('lessonPlanBuilderApp', ['ui.router', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/esl-teacher-tools');

      $stateProvider
        .state('home', {
          url: '/esl-teacher-tools',
          templateUrl: 'views/partials/home.html'
        })
        .state('contact', {
          url: '/contact-us',
          templateUrl: '/views/partials/contact.html'
        })
        .state('lpb-home', {
          url: '/lesson-plan-builder',
          templateUrl: 'views/partials/lpb-partials/lpb-home.html'
        })
        .state('lpb-home.lesson-info', {
          url: '/lesson-info',
          templateUrl: 'views/partials/lpb-partials/lpb-lessonInfo.html',
          controller: 'LessonInfoCtrl'
        })
        .state('lpb-home.activities', {
          url: '/activities',
          templateUrl: 'views/partials/lpb-partials/lpb-activities.html'
        })
        .state('lpb-home.print', {
          url: '/print',
          templateUrl: 'views/partials/lpb-partials/lpb-print.html',
          controller: 'PrintCtrl'
        })
        .state('blog', {
          url: '/esl-teacher-tools-blog',
          templateUrl: '/views/partials/blog.html'
        })

  })
  .factory('lessonInfoData', function() {
    return {};
  })
  .factory('activityData', function() {
    return {};
  })
  .directive("mydatepicker", function(){
    return {
      restrict: "E",
      scope:{
        ngModel: "=",
        dateOptions: "=",
        opened: "="
      },
      link: function($scope, element, attrs) {
        $scope.open = function(event){
          console.log("open");
          event.preventDefault();
          event.stopPropagation();
          $scope.opened = true;
        };

        $scope.clear = function () {
          $scope.ngModel = null;
        };
      },
      templateUrl: '/views/partials/lpb-partials/datepicker.html'
    }
  });
