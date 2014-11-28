'use strict';

describe('Service: ActivitiyService', function () {
  beforeEach(module('lessonPlanBuilderApp'));

  var service;

  beforeEach(inject(function (ActivityService) {
    service = ActivityService
  }));

  it('should have functions attached to it', function () {
    expect(typeof service.add).toBe('function');
  });
});
