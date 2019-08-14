<?php

function auth($connect) {
  $auth = false;

  if(!isset($_SERVER['PHP_AUTH_USER'])){

    header('WWW-Authenticate: Basic');
    header('HTTP/1.0 401 Unauthorized');
    die('401 Unauthorized');
    exit;

  } else {
    $phpAuthUser = $_SERVER['PHP_AUTH_USER'];
    $result = mysqli_query($connect, 'CALL func_api_v1_admin_auth('."$phpAuthUser".')');
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    print_r($data);
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