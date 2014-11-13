'use strict';

function myDatePicker() {
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
    templateUrl: '/features/tools/lessonPlanBuilder/partials/datepicker.html'
  }
}

function DatePickerCtrl($scope, lessonInfoData) {
  $scope.lessonInfoData = lessonInfoData;
  $scope.opened = false;

  $scope.dateOptions = {
    'year-format': "'yy'",
    'show-weeks': false
  }
}

angular
.module('lessonPlanBuilderApp')
.directive('myDatePicker', myDatePicker)
.controller('DatePickerCtrl', DatePickerCtrl );

