<?php
// Регистрация нового админа и изменение текущих
header('Access-Control-Allow-Origin: *');

require_once ('../../../config.php');
require_once ('../../../modules/auth.php');

$connect = pg_connect("host=".$HOST." options='--client_encoding=UTF8' port=".$PORT." dbname=".$DATABASE." user=".$USERNAME." password=".$PASSWORD."");

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {
  
  auth($connect);

  switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
      if(isset($_POST['login']) && isset($_POST['password'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_post_admin($1, $2)', [
          $_POST['login'],
          md5($_POST['password'])
        ]);
      }
    break;
    case 'PATCH':
      parse_str(file_get_contents('php://input'), $_PATCH);
      if(isset($_PATCH['login']) && isset($_PATCH['new_login']) && isset($_PATCH['password'])){
        $result = pg_query_params($connect, 'SELECT * FROM func_api_v1_patch_admin_login($1, $2, $3)', [
          $_PATCH['login'], 
          $_PATCH['new_login'], 
          md5($_PATCH['password'])
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

