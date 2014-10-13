<?php

$conn = @mysql_connect('localhost','root','123456') or die('数据库执行错误'.mysql_error());

@mysql_select_db('personal_web',$conn) or die('数据库连接错误'.mysql_error());


for($i=1;$i<=100;$i++){
	$src='photo/p'.$i.'.jpg';
	mysql_query("INSERT INTO waterfall(src) VALUES('$src')") or die('数据库执行错误'.mysql_error());
}
mysql_close();




?>