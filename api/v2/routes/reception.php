<?php
// Запись на прием и получить список заявок
header('Access-Control-Allow-Origin: *');

require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/sql/auth.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
      if(isset($_POST['date']) && isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['mail'])){
        $result = mysqli_query($connect, 'CALL func_api_v1_post_reception(
          '.$_POST['date'].', '.$_POST['name'].', '.$_POST['phone'].', '.$_POST['mail'].')');
      }
    break;
    case 'GET':
      auth($connect);
      $result = mysqli_query($connect, 'CALL func_api_v1_get_reception()');
  }

  if($result == ''){
    die('403 Bad Request');
  }

  $data = json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));
  echo $data;
}

?>

