<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS,PATCH");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//Получить все услуги и услуги по id и изменить услугу

require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/sql/auth.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);
mysqli_set_charset($connect, 'utf8');

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      
      if(isset($_GET['id'])){
        $result = mysqli_query($connect, 'CALL func_api_v1_get_service_id('.$_GET['id'].')');
      } else {
        $result = mysqli_query($connect, 'CALL func_api_v1_get_service()');
      }
    break;
    case 'PATCH':
      // auth($connect);
      parse_str(file_get_contents('php://input'), $_PATCH);
      if(isset($_PATCH['id']) && isset($_PATCH['title']) && isset($_PATCH['description'])){
        $result = mysqli_query($connect, 'CALL func_api_v1_patch_service_id('.$_PATCH['id'].', '.$_PATCH['title'].', '.$_PATCH['description'].')');
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

