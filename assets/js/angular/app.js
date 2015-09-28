/*!
 * crowd-compass-memory-game v1.0.0 (https://github.com/ResponseCapture/crowd-compass-memory-game#readme)
 * Copyright 2015 
 * Licensed under the ISC
 */
(function(window, document, $, angular) {
  'use strict';

  var AngularApp = angular.module('AngularApp', ['ngSanitize', 'ui.router', "oc.lazyLoad"]);

  AngularApp.controller('AngularUIController', ['$scope', 'resoucre', function($scope, resoucre) {
    $scope.model = resoucre.data;
  }]);

})(window, document, jQuery, angular);
