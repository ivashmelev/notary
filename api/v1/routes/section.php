<?php
// Получить все разделы и получить тарифы этого раздела по id раздела
header('Access-Control-Allow-Origin: *');

require_once ('../../../modules/sql/config.php');

$connect = pg_connect("host=".$HOST." options='--client_encoding=UTF8' port=".$PORT." dbname=".$DATABASE." user=".$USERNAME." password=".$PASSWORD."");

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      if(isset($_GET['id'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_get_section_id($1)', [$_GET['id']]);
      } else {
        $result = pg_query($connect, 'SELECT * FROM func_api_v1_get_section()');
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

