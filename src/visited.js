/**
 * jquery.visited.js
 *
 * Inspired by: http://joelcalifa.com/blog/revisiting-visited
 * @version 1.1.0
 * @author Andrew Douglass <andrew@dou.glass>
 * @license MIT
 */

(function($) {

  // Track the current page even if you aren't checking on this page
  localStorage.setItem('visited:' + window.location.pathname, true);


  /**
	 * Attaches an attribute to anchor tags in order to style visited pages.
   *
   * By default, data-visited='true' is added to the anchor tags. If a CSS class
	 * is passed in as an argument, that will be applied to the anchor tag instead.
	 *
	 * @param {string} [className] - A css class to apply to visited links.
	 */
  $.fn.visited = function(className) {
    className = className || false;

    $(this).each(function(index, element) {
      // Checks that it's an internal link, then checks localStorage for item's existence
      if ( element.host == window.location.host
      &&   localStorage.getItem('visited:' + element.pathname)
      ||   localStorage.getItem('visited:' + element.pathname + '/') ) {

        if ( className ) {
          $(element).addClass(className);
        } else {
          // can't use $().data, because it doesn't actually update the html
          $(element).attr('data-visited', true);
        }

      }
    });
  };


})(jQuery);
