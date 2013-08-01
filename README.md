<h1>jQuery Infinite Scroll</h1>
<hr/>
<h3>How to use</h3>

HTML
<pre>
  &lt;div id="wrapper"&gt;
    &lt;p&gt;Line 1&lt;/p&gt;
    &lt;p&gt;Line 2&lt;/p&gt;
    &lt;p&gt;Line 3&lt;/p&gt;
    &lt;a class="url" data-href="http://yourweb/yourfile.php"&gt;
  &lt;/div&gt;
</pre>

Call jQuery Infinite Scroll
<pre>
  $('#wrapper').infiniteScroll();
</pre>

yourfile.php
<pre>
  if(allDataHaveBeenLoaded()){
    echo 'done';
  }
  else{
    //whatever you want to display
  }
</pre>
