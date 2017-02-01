(function($){
  "use strict";

//hide all list items on page load
  $("h3").siblings().hide();

//add h3 click event
  $("h3").on("click", function() {
    //if list items are visible
      if ($(this).siblings().is(":visible")) {
    //hide list items;
  $(this).siblings().slideUp("slow");
}else{
  //show list items
$(this).siblings().slideDown("slow");
//hide all other list items
$(this).parents().siblings().children('ul').slideUp('slow');
      }
  });

})(jQuery);
