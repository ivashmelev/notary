<?php
// Получить тариф по id и изменить тариф
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
      if(isset($_GET['id'])){
        $result = mysqli_query($connect, 'CALL func_api_v1_get_tariff_id('.$_GET['id'].')');
      }
    break;
    case 'POST':
     //auth($connect);
      $id = $_POST['id'];
      $title = $_POST['title'];
      $subtitle = $_POST['subtitle'];
      $tariff = $_POST['tariff'];
      $price = $_POST['price'];

      if(isset($_POST['id']) && isset($_POST['title']) && isset($_POST['subtitle']) && isset($_POST['tariff']) && isset($_POST['price'])){
        $result = mysqli_query($connect, "CALL func_api_v1_patch_tariff_id($id, '$title', '$subtitle', '$tariff', '$price')");
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

