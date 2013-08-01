<h1>jQuery Infinite Scroll</h1>
<hr/>
<h3>Demo</h3>
<a href="http://www.21studio.p.ht" target="_blank">http://www.21studio.p.ht/infiniteScroll</a>
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

<h3>Available Options</h3>
<table>
  <thead>
    <tr>
      <th>Options</th>
      <th>Explanations</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>nextSelector</td>
      <td>Selector to fetch next data</td>
      <td>.url:last</td>
    </tr>  
    <tr>
      <td>dataNextSelector</td>
      <td>Data attribute that contain url to fetch next data</td>
      <td>href</td>
    </tr>  
    <tr>
      <td>resultWord</td>
      <td>The word that tell jQuery Infinite Scroll that all data have been loaded</td>
      <td>done</td>
    </tr>  
    <tr>
      <td>loading</td>
      <td>Something you want to display when jQuery Infinite Scroll fetch next data</td>
      <td>&lt;div class="loading" style="text-align:center;">Loading...&lt;/div&gt;</td>
    </tr>  
    <tr>
      <td>classLoading</td>
      <td>The class of something you want to display when jQuery Infinite Scroll fetch next data</td>
      <td>loading</td>
    </tr>  
    <tr>
      <td>done</td>
      <td>Something you want to display when all data have been loaded</td>
      <td>&lt;div style="text-align:center;">It\'s done.&lt;/div&gt;</td>
    </tr>  
 </tbody>
</table>
