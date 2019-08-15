<?php

function auth($connect) {
  session_start();
  if(!$_SESSION['auth']){
    header('HTTP/1.0 401 Unauthorized');
    die('401 Unauthorized');
  }
}


?>