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
          templateUrl: '/features/homepage/home.html'
        })
        .state('contact', {
          url: '/contact-us',
          templateUrl: '/features/homepage/contact.html'
        })
        .state('lpb-home', {
          url: '/lesson-plan-builder',
          templateUrl: '/features/tools/lessonPlanBuilder/partials/lpb-home.html'
        })
        .state('lpb-home.lesson-info', {
          url: '/lesson-info',
          templateUrl: '/features/tools/lessonPlanBuilder/partials/lpb-lessonInfo.html',
          controller: 'LessonInfoCtrl'
        })
        .state('lpb-home.activities', {
          url: '/activities',
          templateUrl: '/features/tools/lessonPlanBuilder/partials/lpb-activities.html',
          controller: 'ActivityCtrl'
        })
        .state('lpb-home.print', {
          url: '/print',
          templateUrl: '/features/tools/lessonPlanBuilder/partials/lpb-print.html',
          controller: 'PrintCtrl'
        })
        .state('blog', {
          url: '/esl-teacher-tools-blog',
          templateUrl: '/features/blog/blog.html'
        })

  });
