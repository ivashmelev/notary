<?php
// Получить все разделы и получить тарифы этого раздела по id раздела
header('Access-Control-Allow-Origin: *');

require_once ('../../../modules/sql/config.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      if(isset($_GET['id'])){
        $result = mysqli_query($connect, 'CALL func_api_v1_get_section_id('.$_GET['id'].')');
      } else {
        $result = mysqli_query($connect, 'CALL func_api_v1_get_section()');
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

