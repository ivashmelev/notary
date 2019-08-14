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
    case 'PATCH':
      auth($connect);
      parse_str(file_get_contents('php://input'), $_PATCH);
      if(isset($_PATCH['id']) && isset($_PATCH['title']) && isset($_PATCH['description'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_patch_service_id($1, $2, $3)', [
          $_PATCH['id'], 
          $_PATCH['title'], 
          $_PATCH['description']
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

