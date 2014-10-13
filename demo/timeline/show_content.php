<?php
	require 'config.php';
	$query=mysql_query("SELECT user,email,message,date FROM content ORDER BY date DESC") or die('SQL 错误！'.mysql_error());
	
	$json='';
	while(!!$row=mysql_fetch_array($query,MYSQL_ASSOC)){
		$json.=json_encode($row).',';
	}
	
	echo '['.substr($json,0,strlen($json)-1).']';
	
	mysql_close();
?> 