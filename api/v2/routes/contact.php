<?php
// Получить контакты и изменить контакт по id
header('Access-Control-Allow-Origin: *');
require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/sql/auth.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);
mysqli_set_charset($connect, 'utf8');

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      $result = mysqli_query($connect, 'CALL func_api_v1_get_contact()');
    break;
    case 'POST':
      // auth($connect);
     $id = $_POST['id'];
     $address = $_POST['address'];
     $phone = $_POST['phone'];
     $mail = $_POST['mail'];
      if(isset($_POST['id']) && isset($_POST['address']) && isset($_POST['phone']) && isset($_POST['mail'])){
        $result = mysqli_query($connect, "CALL func_api_v1_patch_contact_id($id, '$address', '$phone', '$mail')");
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

