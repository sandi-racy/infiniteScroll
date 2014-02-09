<h1>jQuery Infinite Scroll</h1>
<hr/>

<h3>Demo</h3>
<a href="http://www.21studio.p.ht" target="_blank">http://www.21studio.p.ht/infiniteScroll</a>

<h3>What's new in version 1.2</h3>
<ol>
    <li>Now support bower, just type <strong>bower install infiniteScroll</strong></li>
</ol>

<h3>What's new in version 1.1</h3>
<ol>
  <li>Adding event hooks</li>
  <li>Adding property enable</li>
  <li>jQuery No Conflict Support</li>
</ol>

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

Calling jQuery Infinite Scroll
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

To disable it, just do
<pre>
  $("#wrapper").infiniteScroll({enable:false});
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
      <td>classNextSelector</td>
      <td>Class Selector to fetch next data</td>
      <td>.url:last</td>
    </tr>  
    <tr>
      <td>dataAttributeNextSelector</td>
      <td>Data attribute that containing url to fetch next data</td>
      <td>href</td>
    </tr>  
     <tr>
      <td>enable</td>
      <td>Enabling jQuery Infinite Scroll</td>
      <td>true</td>
    </tr>  
    <tr>
      <td>resultWord</td>
      <td>The word that telling jQuery Infinite Scroll that all data have been loaded</td>
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
      <td>startAt</td>
      <td>The position of scroll bar to start fetch next data (0 &lt;= startAt &lt;= 1)</td>
      <td>1</td>
    </tr>     
    <tr>
      <td>animation</td>
      <td>The animation of displaying next data (available animation : fade or slide)</td>
      <td>fade</td>
    </tr>
    <tr>
      <td>animationSpeed</td>
      <td>The speed of your animation, it can be slow, fast, or speed of millisecond</td>
      <td>slow</td>
    </tr>    
    <tr>
      <td>done</td>
      <td>Something you want to display when all data have been loaded</td>
      <td>&lt;div style="text-align:center;">It\'s done.&lt;/div&gt;</td>
    </tr>  
 </tbody>
</table>

<h3>Event Hooks</h3>
<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Explanations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>onLoad</td>
      <td>Doing something when loading next data</td>
    </tr>  
    <tr>
      <td>success</td>
      <td>Doing something when loading is success</td>
    </tr>  
     <tr>
      <td>onFinish</td>
      <td>Doing something when all data have been loaded</td>
    </tr>  
 </tbody>
</table>
