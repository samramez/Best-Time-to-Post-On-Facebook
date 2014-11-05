<?php
require 'php-sdk/facebook.php';
$facebook = new Facebook(array(
	'appId' 	=> '480740078725724',
	'appSecret' => '6d096dc5a5dc26e02fdc2a1ef57407d7',
	));


?>
<html>
<title> Sam's App</title>

<body>
	<?php
	$user = $facebook->getUser();
	echo '<h1>', $user , '</h1>';

	if ($user):
		echo '<h1> LOGGED IN </h1>';
		echo "<p>User id : ",$user, "</p>";
		$user_graph = $facebook->api('/me');
		echo '<pre>', print_r($user_graph) , '</pre>';
	else://get user id
		$loginurl = $facebook->getLoginUrl(
			array(
			'display'		=>	'popup',
			'redirect_uri'	=>	'http://apps.facebook.com/dbproject',
			'scope'			=>	'email'
			));
		
		echo '<p><a href="', $loginurl , '" target="_top" >login</a></p>'; 
	endif;

	?>


<h1> Welcome </h1>
</body>


</html>