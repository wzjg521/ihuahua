<?php
	header("Content-type:text/html;charset:utf-8");
	$mysql=@mysql_connect('localhost','root','123456') or die('数据库连接失败'.mysql_error());
	mysql_query('set names utf8',$mysql) or die ('字符集设置错误'.mysql_error());
	mysql_select_db('personal_web',$mysql) or die ('数据库连接错误'.mysql_error());
	$page=isset($_GET['page']) ? (int)$_GET['page'] : 0;
	$num=isset($_GET['requestNum']) ? (int)$_GET['requestNum'] : 5;
	$startNum=$num*$page;
	if(isset($_GET['action']) && $_GET['action']=='count'){
		$sql='SELECT COUNT(1) AS count FROM WATERFALL';
		$result=mysql_query($sql) or die ('数据库执行错误'.mysql_error());
		echo mysql_fetch_assoc($result)['count'];
	}else{
		$sql='select src,id  from waterfall limit '.$startNum.','.$num.'';
		$result=mysql_query($sql) or die ('数据库执行错误'.mysql_error());
		$pic=array();
		while ($row=mysql_fetch_assoc($result)){
			$pic[]=$row;
		}
		echo json_encode($pic);
	}
	
	mysql_close();
?>