<?php
	require 'config.php';
	
	$query = mysql_query("SELECT user,email,message,date FROM message ORDER BY date DESC") or die('SQL 错误！');
	$result=array();
	while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
		$result[]=$row;
	}
	mysql_close();
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>huahua_commend</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/message.css">
</head>
<body>
<?php 
foreach ($result as $key => $value) {
?>

<!-- <h3><?php echo $value['message']; ?></h3>
<?php }; ?> -->

<!-- Header -->
	<header id="header">
		<div class="top">
		<!-- Logo -->
			<h1 id="logo"><img src="images/logo.png" alt=""></h1>	
		<!-- Nav -->
			<nav id="nav">
				<ul>
					<li><a href="index.html" target="_blank">Home</a></li>
					<li><a href="http://blog.ihuahua.cc" target="_blank">Blog</a></li>
					<li class="focus"><a href="javascript:;" target="_blank">Message</a></li>
				</ul>
			</nav>
		</div>
	</header>
<!-- commend -->
	<div id="main">
		<div class="commend">
			<h2>留言信息</h2>
			<span class="message_down"></span>
		</div>
		<div class="content">
			<ul>
			<?php 
				foreach($result as $key=>$value){ ?>
			
				<li>
					<div class="theme">
						<div class="img">
							<img src="images/small_face.jpg" alt="">
						</div>
						<div class="ico"></div>
						<div class="article">
							<div class="title">
								<i class="left_arrow"></i>
								<h4><?php echo $value['user'] ?></h4>
								<span>[ <?php echo $value['date'] ?> ]</span>
							</div>
							<hr>
							<p>
								<?php echo $value['message'] ?>
							</p>
							<div class="replay">
								来自 <?php echo $value['email'] ?> 留言
							</div>

						</div>
					</div>
				</li>
				<?php }; ?>
			</ul>
		</div>

	</div>

    
</body>
</html>