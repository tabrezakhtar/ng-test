'use strict';
describe('Http Service', function() {

  var $httpBackend, requestHandler, httpService, 
    mockPostMessage = {
      songId: 5
    };

  beforeEach(module('musicApp.services'));

  beforeEach(inject(function($injector) {
   $httpBackend = $injector.get('$httpBackend');
   httpService = $injector.get('httpService');
  }));

  describe('when getting data', function() {
    it("should have a get method defined", function () {
        expect(httpService.get).toBeDefined();  
    });

    it("should return a response", function () {
      requestHandler = $httpBackend.when('GET', 'http://localhost:8080/api/songs/1').respond({mockResponse: 'get response'});
      httpService.get("http://localhost:8080/api/songs/1").then(function(response) {
        expect(response).not.toBe(null);
        expect(response.mockResponse).toEqual('get response');
      });
      $httpBackend.flush();
    });
  });

  describe('when posting data', function() {
    it("should have a post method defined", function () {
        expect(httpService.post).toBeDefined();  
    });

    it("should return a response", function () {
      requestHandler = $httpBackend.when('POST', 'http://localhost:8080/api/songs', mockPostMessage).respond({mockResponse: 'post response'});
      httpService.post("http://localhost:8080/api/songs", mockPostMessage).then(function(response) {
        expect(response).not.toBe(null);
        expect(response.mockResponse).toEqual('post response');
      });
      $httpBackend.flush();
    });
  });

  describe('when deleting data', function() {
    it("should have a delete method defined", function () {
        expect(httpService.delete).toBeDefined();  
    });

    it("should return a response", function () {
      requestHandler = $httpBackend.when('DELETE', 'http://localhost:8080/api/songs/1').respond({mockResponse: 'delete response'});
      httpService.delete("http://localhost:8080/api/songs/1").then(function(response) {
        expect(response).not.toBe(null);
        expect(response.mockResponse).toEqual('delete response');
      });
      $httpBackend.flush();
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

});