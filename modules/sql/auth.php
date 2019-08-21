<?php
function auth($connect) {
  print_r($_SESSION);
  if(!$_SESSION['auth']){
    header('HTTP/1.0 401 Unauthorized');
    die('401 Unauthorized');
  }
}


?>