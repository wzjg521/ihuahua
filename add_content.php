<?php
	require 'config.php';
	sleep(2);
	$query = "INSERT INTO message (user, email, message, date) VALUES ('{$_POST['user']}', '{$_POST['email']}', '{$_POST['message']}', NOW())";
	
	mysql_query($query) or die('新增失败！'.mysql_error());
	
	echo mysql_affected_rows();
	
	mysql_close();
?>