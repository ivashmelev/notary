<?php
// Получить тариф по id и изменить тариф
header('Access-Control-Allow-Headers: Content-Type');
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS,PATCH");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/sql/auth.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);
mysqli_set_charset($connect, 'utf8');

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  $id = $_GET['id'];

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      if(isset($_GET['id'])){
        $result = mysqli_query($connect, "SELECT 'tariff.id', 'tariff.title', 'tariff.subtitle', 'tariff.tariff', 'tariff.price' 
        FROM tariff WHERE 'tariff.id' = '$id'");
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
        mysqli_query($connect, 
        "UPDATE tariff SET title='$title', subtitle='$subtitle', tariff='$tariff', price='$price' WHERE 'tariff.id' = '$id'");
        
        $result = mysqli_query($connect, 
        "SELECT 'tariff.id', 'tariff.title', 'tariff.subtitle', 'tariff.tariff', 'tariff.price'
        FROM tariff
        WHERE 'tariff.id' = '$id'")
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

