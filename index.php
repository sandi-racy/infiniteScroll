<!DOCTYPE HTML>
<html>
	<head>
		<title>jQuery Infinite Scroll</title>
		<link href='http://fonts.googleapis.com/css?family=Fauna+One' rel='stylesheet' type='text/css' />
		<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css' />		
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>
	<body>
		<div class="download">
			To try it in your localhost, just follow readme.txt in the zip file you will have been downloaded<br>
			<a href="https://github.com/sandi-racy/infiniteScroll" target="_blank">Download</a>
		</div>
		<div class="container">
			<h1>jQuery Infinite Scroll</h1>
			<div id="wrapper">
				<?php
					require_once('php/conn.php');
					$mysqli = new mysqli($host, $username, $password, $db);
					$datas = $mysqli->query("SELECT content FROM data LIMIT 0,6");
					while($data = $datas->fetch_object()){
						echo '<p>'.$data->content.'</p>';
					}
					$datas->close();
				?>
				<a class="url" data-href="php/infiniteScroll.php?page=1"></a>			
			</div>
		</div>
		<script type="text/javascript" src="http://code.jquery.com/jquery-2.0.2.min.js"></script>
		<script type="text/javascript" src="js/infiniteScroll.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				$("#wrapper").infiniteScroll({
					loading: '<div class="loading"><img src="loading.gif"> Loading...</div>'
				});
			});
		</script>
	</body>
</html>