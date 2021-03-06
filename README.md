jquery-visited
===



A jQuery plugin that allows you to do more interesting :visited styling for hyperlinks. [Because bad apples blew it for us](https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector).

Inspired by and reimplemented in jQuery from Joel Califa's blog post here: http://joelcalifa.com/blog/revisiting-visited/.

### Just Show Me The Demo
Here you go, buddy: https://ardouglass.github.io/jquery-visited/

## Download
Run one of these commands in your bash according to your needs.

`git clone https://github.com/ardouglass/jquery-visited.git`

`bower install jquery-visited`

`npm install jquery-visited`

## Getting Started
The code below is a before/after example.

```html
<!-- Before running -->
<div class="items">
  <a href="/stuff">Stuff</a>
  <a href="/more-stuff">More Stuff</a>
  <a href="/the-best-stuff">The Best Stuff</a>
</div>

<!-- Example call to .visited() -->
<script type="text/javascript" src="jquery.visited.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $('.items a').visited('visited-link');
    // with no args, it will apply data-visited='true' instead of adding a css class
  });
</script>

<!-- After running, assuming you've visited /stuff since jquery.visited.js was included -->
<div class="items">
  <a href="/stuff" class="visited-link">Stuff</a>
  <a href="/more-stuff">More Stuff</a>
  <a href="/the-best-stuff">The Best Stuff</a>
</div>

<!-- Why this is useful: modify things not allowed by :visited -->
<style type="text/css">
  a.visited-link {
    background-image: url('some-image.png');
  }

  a.visited-link:after {
    content: 'You already saw this one';
  }
</style>
```
