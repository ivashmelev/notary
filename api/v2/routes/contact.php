<?php
// Получить контакты и изменить контакт по id
header('Access-Control-Allow-Origin: *');

require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/sql/auth.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
    auth($connect);
      $result = mysqli_query($connect, 'CALL func_api_v1_get_contact()');
    break;
    case 'PATCH':
      auth($connect);
      parse_str(file_get_contents('php://input'), $_PATCH);
      if(isset($_PATCH['id']) && isset($_PATCH['address']) && isset($_PATCH['phone']) && isset($_PATCH['mail'])){
        $result = mysqli_query($connect, 'CALL func_api_v1_patch_contact_id('.$_PATCH['id'].', '.$_PATCH['address'].', '.$_PATCH['phone'].', '.$_PATCH['mail'].')');
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

