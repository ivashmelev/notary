<?php
// Запись на прием и получить список заявок
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
      $date = $_POST['date'];
      $name = $_POST['name'];
      $phone = $_POST['phone'];
      $mail = $_POST['mail'];

      if(isset($_POST['date']) && isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['mail'])){
        mysqli_query($connect, "INSERT INTO reception VALUES(NULL, '$date', '$name', '$phone', '$mail')");
        $result = mysqli_query($connect, "SELECT * FROM reception order by id desc limit 1");
      }
    break;
    case 'GET':
     //auth($connect);
      $result = mysqli_query($connect, "SELECT * FROM reception");
  }

  if($result == ''){
    die('403 Bad Request');
  }

  $data = json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));
  echo $data;
}

?>

