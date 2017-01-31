(function($){
  "use strict";

  $("h3").on("click", function() {
      if ($(this).siblings().hasClass('hidden')) {

        // make sure all other lists are hidden
        $(this).parents().siblings().children('ul').addClass('hidden');

        $(this).siblings().removeClass('hidden');
      } else {
        $(this).siblings().addClass('hidden');

      }
  });

})(jQuery);
