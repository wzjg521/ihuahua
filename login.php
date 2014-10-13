<?php
require dirname(__FILE__).'/config.php';
$user_addr= $_SERVER['REMOTE_ADDR'];
$user_agent= $_SERVER['HTTP_USER_AGENT'];

$sql_insert="INSERT INTO loginer (ip,date,agent) VALUES ('{$user_addr}',NOW(),'{$user_agent}')";
$sql_select="SELECT COUNT(1) AS count FROM loginer";
$sql_seluser="SELECT ip FROM loginer where ip='{$user_addr}'";
$sql_update="UPDATE loginer SET count=count+1 ";
if(!mysql_fetch_array(mysql_query($sql_seluser), MYSQL_ASSOC)){
	mysql_query($sql_insert) or die('SQL 错误！');

}else{
	mysql_query($sql_update) or die('SQL 错误！ ');

}
$query=mysql_query($sql_select);
$row = mysql_fetch_array($query, MYSQL_ASSOC);
$json='{"addr":"'.$user_addr.'","agent":"'.$user_agent.'","count":"'.$row['count'].'"}';
echo $json;
mysql_close();
?>