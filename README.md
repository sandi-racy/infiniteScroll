jQuery Infinite Scroll

How to use

/* client side */
<div id="wrapper">
  <p>Line 1</p>
  <p>Line 2</p>
  <p>Line 3</p>
  <a class="url" data-href="http://yourweb/yourfile.php">
</div>

/* yourfile.php */
if(allDataHaveBeenLoaded()){
  echo 'done';
}
else{
  //whatever you want to display
}
