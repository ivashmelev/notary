<?php
// Получить тариф по id и изменить тариф
header('Access-Control-Allow-Origin: *');

require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/pgsql/auth.php');

$connect = pg_connect("host=".$HOST." options='--client_encoding=UTF8' port=".$PORT." dbname=".$DATABASE." user=".$USERNAME." password=".$PASSWORD."");

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      if(isset($_GET['id'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_get_tariff_id($1)', [$_GET['id']]);
      }
    break;
    case 'POST':
      // auth($connect);
     
      if(isset($_POST['id']) && isset($_POST['title']) && isset($_POST['subtitle']) && isset($_POST['tariff']) && isset($_POST['price'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_patch_tariff_id($1, $2, $3, $4, $5)', [
          $_POST['id'],
          $_POST['title'], 
          $_POST['subtitle'], 
          $_POST['tariff'], 
          $_POST['price']
        ]);
      }
    break;
  }

  if($result == ''){
    die('403 Bad Request');
  }

  $data = json_encode(pg_fetch_all($result));
  echo $data;
}

?>

