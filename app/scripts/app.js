'use strict';

/**
 * @ngdoc overview
 * @name lessonPlanBuilderApp
 * @description
 * # lessonPlanBuilderApp
 *
 * Main module of the application.
 */


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
  .factory('activityData', function() {
    return {};
  });
