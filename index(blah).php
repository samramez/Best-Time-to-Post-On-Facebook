<?php

FacebookSession::setDefaultApplication('480740078725724', '6d096dc5a5dc26e02fdc2a1ef57407d7');

$helper = new FacebookRedirectLoginHelper('your redirect URL here');
$loginUrl = $helper->getLoginUrl();
// Use the login url on a link or button to redirect to Facebook for authent


?>