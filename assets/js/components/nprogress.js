/*!
 * crowd-compass-memory-game v1.0.0 (https://github.com/ResponseCapture/crowd-compass-memory-game#readme)
 * Copyright 2015 
 * Licensed under the ISC
 */
$.components.register("nprogress", {
  mode: "init",
  defaults: {
    minimum: 0.15,
    trickleRate: .07,
    trickleSpeed: 360,
    showSpinner: false,
    template: '<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  },
  init: function() {
    if (typeof NProgress === "undefined") return;
    var defaults = $.components.getDefaults('nprogress');
    NProgress.configure(defaults);
  }
});
