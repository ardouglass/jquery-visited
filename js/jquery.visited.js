/**
 * jquery.visited.js
 *
 * Inspired by: http://joelcalifa.com/blog/revisiting-visited
 *
 * @version 1.0.0
 */

(function($) {

  // Track the current page even if you aren't checking on this page
  localStorage.setItem('visited:' + window.location.pathname, true);


  /**
	 * Sets data-visited='true' as a data attribute on all selected anchor tags for pages visited by the user.
	 */
  $.fn.visited = function() {
    $(this).each(function(index, element) {
      console.log(element);
      // Checks that it's an internal link, then checks localStorage for item's existence
      if ( element.host == window.location.host
      &&   localStorage.getItem('visited:' + element.pathname)
      ||   localStorage.getItem('visited:' + element.pathname + '/') ) {
        $(element).attr('data-visited', true);
      }
    });
  };


})(jQuery);
