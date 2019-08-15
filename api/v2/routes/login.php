<?php
header('Access-Control-Allow-Origin: *');
session_start();

require_once ('../../../modules/sql/config.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);


if(!isset($_SESSION['auth'])){
  $phpAuthUser = $_POST['login'];
  $result = mysqli_query($connect, 'CALL func_api_v1_admin_auth('.'"'.$phpAuthUser.'"'.')');
  $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
  $password = $data[0]['password'];
  print_r($phpAuthUser);
  print_r($data);

  if(md5($_POST['password']) != $password){
    header('HTTP/1.0 401 Unauthorized');

    die('401 Unauthorized');

  } else {
    $_SESSION['auth'] = true;
  }
} 
?>