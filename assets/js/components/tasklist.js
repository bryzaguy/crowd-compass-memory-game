/*!
 * crowd-compass-memory-game v1.0.0 (https://github.com/ResponseCapture/crowd-compass-memory-game#readme)
 * Copyright 2015 
 * Licensed under the ISC
 */
$.components.register("taskList", {
  mode: "api",
  api: function() {
    $(document).on('change.site.task', '[data-role="task"]', function() {
      var $list = $(this),
        $checkbox = $list.find('[type="checkbox"]');
      if ($checkbox.is(':checked')) {
        $list.addClass('task-done');
      } else {
        $list.removeClass('task-done');
      }
    });

    $('[data-role="task"]').trigger('change.site.task');
  }
});
