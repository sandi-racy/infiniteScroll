<?php
	require_once('conn.php');
	$page = $_GET['page'];
	$perPage = 6;
	$offset = $page * $perPage;
	$mysqli = new mysqli($host, $username, $password, $db);
	$jumlahs = $mysqli->query("SELECT content FROM data");
	$jumlah = $jumlahs->num_rows;
	if($offset >= $jumlah){
		echo 'done';
	}
	else{
		$datas = $mysqli->query("SELECT content FROM data LIMIT $offset, $perPage");
		while($data = $datas->fetch_object()){
			echo '<p>'.$data->content.'</p>';
		}
		$datas->close();
?>
		<a class="url" data-href="php/infiniteScroll.php?page=<?php echo ++$page; ?>"></a>
<?php
	}
	$jumlahs->close();	
?>