'use strict';

describe('Service: ActivitiyService', function () {
  beforeEach(module('lessonPlanBuilderApp'));

  var service;

  beforeEach(inject(function (ActivityService) {
    service = ActivityService; 
  }));

  it('should delete an activity from the list', function () {
    // confirm that we have a list of activities with one activity
    expect(service.activities.length).toBe(1);
    
    // call delete
    service.delete(0);
    
    // confirm that the activity is gone from the list
    expect(service.activities.length).toBe(0);
  });
  
  it("shouldn't delete anything if the list is empty", function(){
    // 1. setup the world so that we have an empty list of activities
    service.delete(0);

    // 2. call delete
    service.delete(0);
    
    // 3. confirm that nothing happened
    expect(service.activities).toEqual([]);
  });
  
  // it
});
