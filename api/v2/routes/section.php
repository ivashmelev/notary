<?php
// Получить все разделы и получить тарифы этого раздела по id раздела
header('Access-Control-Allow-Origin: *');

require_once ('../../../modules/sql/config.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);
mysqli_set_charset($connect, 'utf8');

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      $id = $_GET['id'];

      if(isset($id)){
        $result = mysqli_query($connect, 
        "SELECT tariff.id, tariff.title, tariff.subtitle, tariff.tariff, tariff.price FROM tariff
        JOIN section
        ON tariff.section_id = section.id
        WHERE tariff.section_id='$id'");
      } else {
        $result = mysqli_query($connect, "SELECT * FROM section");
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

