/*!
 * crowd-compass-memory-game v1.0.0 (https://github.com/ResponseCapture/crowd-compass-memory-game#readme)
 * Copyright 2015 
 * Licensed under the ISC
 */
$.components.register("floatThead", {
  mode: "default",
  defaults: {
    scrollingTop: function() {
      return $('.site-navbar').outerHeight();
    },
    useAbsolutePositioning: true
  }
});
