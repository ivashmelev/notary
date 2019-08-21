<?php
// Получить контакты и изменить контакт по id
header('Access-Control-Allow-Origin: *');

require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/pgsql/auth.php');

$connect = pg_connect("host=".$HOST." options='--client_encoding=UTF8' port=".$PORT." dbname=".$DATABASE." user=".$USERNAME." password=".$PASSWORD."");

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      $result = pg_query($connect, 'SELECT * FROM func_api_v1_get_contact()');
    break;
    case 'POST':
     //auth($connect);
     
      if(isset($_POST['id']) && isset($_POST['address']) && isset($_POST['phone']) && isset($_POST['mail'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_patch_contact_id($1, $2, $3, $4)', [
          $_POST['id'],
          $_POST['address'], 
          $_POST['phone'], 
          $_POST['mail']
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

