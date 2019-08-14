<?php
// Регистрация нового админа и изменение текущих
header('Access-Control-Allow-Origin: *');

require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/sql/auth.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {
  
  auth($connect);

  switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
      if(isset($_POST['login']) && isset($_POST['password'])){
        $result = mysqli_query($connect, 'CALL func_api_v1_post_admin('.$_POST['login'].', '.md5($_POST['password']).')');
      }
    break;
    case 'PATCH':
      parse_str(file_get_contents('php://input'), $_PATCH);
      if(isset($_PATCH['login']) && isset($_PATCH['new_login']) && isset($_PATCH['password'])){
        $result = mysqli_query($connect, 'CALL func_api_v1_patch_admin_login('.$_PATCH['login'].', '.$_PATCH['new_login'].', '.md5($_PATCH['password']).')');
      }
    break;
  }

  if($result == ''){
    die('403 Bad Request');
  }

  $data = json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));
  echo $data;
}

?>

