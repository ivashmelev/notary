<?php

function auth($connect) {
  $auth = false;

  if(!isset($_SERVER['PHP_AUTH_USER'])){

    header('WWW-Authenticate: Basic');
    header('HTTP/1.0 401 Unauthorized');
    die('401 Unauthorized');
    exit;

  } else {

    $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_admin_auth($1)', [$_SERVER['PHP_AUTH_USER']]);
    $data = pg_fetch_all($result);
    $password = $data[0]['password'];

    if(md5($_SERVER['PHP_AUTH_PW']) != $password){
      header('HTTP/1.0 401 Unauthorized');
      die('401 Unauthorized');

    } else {

      $auth = true;

    }
  }
  return $auth; 
}


?>