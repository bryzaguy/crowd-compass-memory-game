/*!
 * crowd-compass-memory-game v1.0.0 (https://github.com/ResponseCapture/crowd-compass-memory-game#readme)
 * Copyright 2015 
 * Licensed under the ISC
 */
$.components.register("editableTable", {
  mode: "init",
  init: function(context) {
    if (!$.fn.editableTableWidget) return;

    var defaults = $.components.getDefaults("editableTable");

    $('[data-plugin="editableTable"]', context).each(function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      $(this).editableTableWidget(options);
    });
  }
});
