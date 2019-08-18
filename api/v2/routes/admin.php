<?php
header('Access-Control-Allow-Origin: *');
// Регистрация нового админа и изменение текущих

require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/sql/auth.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);
mysqli_set_charset($connect, 'utf8');

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {
  
  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      $result = mysqli_query($connect, 'CALL func_api_v1_get_admin()');
    break;
    case 'POST':
      $id = $_POST['id'];
      $name = $_POST['name'];
      $mail = $_POST['mail'];
      $login = $_POST['login'];
      $password = md5($_POST['password']);
      if(isset($_POST['id']) && isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['login']) && isset($_POST['password']) && isset($_POST['create'])){
        $result = mysqli_query($connect, "CALL func_api_v1_post_admin('$login', '$password', '$name', '$mail')");
      }
      if(isset($_POST['id']) && isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['login']) && isset($_POST['password']) && isset($_POST['edit'])){
        $result = mysqli_query($connect, "CALL func_api_v1_patch_admin_id($id, '$name', '$mail', '$login', '$password')");
      }
      if(isset($_POST['id']) && isset($_POST['delete'])){
        $result = mysqli_query($connect, "CALL func_api_v1_post_admin_delete($id)");
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

