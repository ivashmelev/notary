<?php
header('Access-Control-Allow-Origin: *');
session_start();

require_once ('../../../modules/sql/config.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);
mysqli_set_charset($connect, 'utf8');


if(!isset($_SESSION['auth'])){
  $phpAuthUser = $_POST['login'];
  $result = mysqli_query($connect, 'CALL func_api_v1_admin_auth('.'"'.$phpAuthUser.'"'.')');
  $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
  $password = $data[0]['password'];

  if(md5($_POST['password']) != $password){
    header('HTTP/1.0 401 Unauthorized');

    die(false);

  } else {
    $_SESSION['auth'] = true;
    echo json_encode($data[0]['name']);
  }
} 
?>