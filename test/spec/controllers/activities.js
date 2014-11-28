'use strict';

describe('Controller: ActivitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('lessonPlanBuilderApp'));

  var ActivitiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivitiesCtrl = $controller('ActivitiesCtrl', {
      $scope: scope
    });
  }));

  it('should have functions attached to it', function () {

    expect(typeof scope.addActivity).toBe('function');
  });
});
