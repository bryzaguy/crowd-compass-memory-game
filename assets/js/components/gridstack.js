/*!
 * crowd-compass-memory-game v1.0.0 (https://github.com/ResponseCapture/crowd-compass-memory-game#readme)
 * Copyright 2015 
 * Licensed under the ISC
 */
$.components.register("gridstack", {
  mode: "init",
  defaults: {
    cell_height: 80,
    vertical_margin: 20
  },
  init: function(context) {
    if (!$.fn.gridstack) return;

    var defaults = $.components.getDefaults("gridstack");

    $('[data-plugin="gridstack"]', context).each(function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      $(this).gridstack(options);
    });
  }
});
