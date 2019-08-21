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
    case 'POST':
     //auth($connect);
    $search = $_POST['search'];
    if(isset($_POST['search'])){
      $result1 = mysqli_query($connect, "SELECT * FROM service WHERE title LIKE '%$search%' OR description LIKE '%$search%'");
      $result2 = mysqli_query($connect, "SELECT * FROM tariff WHERE title LIKE '%$search%' OR tariff LIKE '%$search%' OR subtitle LIKE '%$search%'");
    }
    break;
  }

  if($result1 == '' && $result2 == ''){
    die('403 Bad Request');
  }

  $data1 = mysqli_fetch_all($result1, MYSQLI_ASSOC);
  $data2 = mysqli_fetch_all($result2, MYSQLI_ASSOC);

  for($i=0; $i < count($data1); $i++){
    $data1[$i]['table'] = 'service';
  }

  for($i=0; $i < count($data2); $i++){
    $data2[$i]['table'] = 'tariff';
  }

  for($i=0; $i < count($data2); $i++){
    array_push($data1, $data2[$i]);
  }
  $data = json_encode($data1);
  echo $data;
}

?>

