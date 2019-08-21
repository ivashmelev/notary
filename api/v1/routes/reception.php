<?php
// Запись на прием и получить список заявок
header('Access-Control-Allow-Origin: *');

require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/pgsql/auth.php');

$connect = pg_connect("host=".$HOST." options='--client_encoding=UTF8' port=".$PORT." dbname=".$DATABASE." user=".$USERNAME." password=".$PASSWORD."");

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
      if(isset($_POST['date']) && isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['mail'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_post_reception($1, $2, $3, $4)', [
          $_POST['date'],
          $_POST['name'],
          $_POST['phone'],
          $_POST['mail']
        ]);
      }
    break;
    case 'GET':
     //auth($connect);
      $result = pg_query($connect, 'SELECT * FROM func_api_v1_get_reception()');
  }

  if($result == ''){
    die('403 Bad Request');
  }

  $data = json_encode(pg_fetch_all($result));
  echo $data;
}

?>

