<?php
// Получить контакты и изменить контакт по id
header('Access-Control-Allow-Origin: *');

require_once ('../../../config.php');
require_once ('../../../modules/auth.php');

$connect = pg_connect("host=".$HOST." options='--client_encoding=UTF8' port=".$PORT." dbname=".$DATABASE." user=".$USERNAME." password=".$PASSWORD."");

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      $result = pg_query($connect, 'SELECT * FROM func_api_v1_get_contact()');
    break;
    case 'PATCH':
      auth($connect);
      parse_str(file_get_contents('php://input'), $_PATCH);
      if(isset($_PATCH['id']) && isset($_PATCH['address']) && isset($_PATCH['phone']) && isset($_PATCH['mail'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_patch_contact_id($1, $2, $3, $4)', [
          $_PATCH['id'],
          $_PATCH['address'], 
          $_PATCH['phone'], 
          $_PATCH['mail']
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

