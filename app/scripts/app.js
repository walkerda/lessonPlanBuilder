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
  .module('lessonPlanBuilderApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'views/partials/home.html'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: '/views/partials/contact.html'
        })
        .state('tools-lpb', {
          url: '/tools-lpb',
          templateUrl: '/views/partials/tools-lpb.html'
        })
        .state('blog', {
          url: '/blog',
          templateUrl: '/views/partials/blog.html'
        })

  });
