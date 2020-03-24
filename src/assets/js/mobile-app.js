!function (o) {
  "use strict";
  o(window).on("load", function () {
  }), o(function () {
    o(document).off("click.bs.tab.data-api",
      '[data-hover="tab"]'),
      o(document).on("mouseenter.bs.tab.data-api",
        '[data-toggle="tab"], [data-hover="tab"]',
        function () {
          $(document).ready(function(){
            $("#vtab1").removeClass("show");
          });

      o(this).tab("show")
    })
  })
}(jQuery);

$(document).ready(function(){
  $("#vtab1").addClass("show");
  });

