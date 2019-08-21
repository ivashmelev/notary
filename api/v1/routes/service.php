<?php
header('Access-Control-Allow-Origin: *');
//Получить все услуги и услуги по id и изменить услугу


require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/pgsql/auth.php');

$connect = pg_connect("host=".$HOST." options='--client_encoding=UTF8' port=".$PORT." dbname=".$DATABASE." user=".$USERNAME." password=".$PASSWORD."");

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      
      if(isset($_GET['id'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_get_service_id($1)', [$_GET['id']]);
      } else {
        $result = pg_query($connect, 'SELECT * FROM func_api_v1_get_service()');
      }
    break;
    case 'POST':
     //auth($connect);
     
      if(isset($_POST['id']) && isset($_POST['title']) && isset($_POST['description'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_patch_service_id($1, $2, $3)', [
          $_POST['id'], 
          $_POST['title'], 
          $_POST['description']
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

