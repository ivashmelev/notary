<?php
header('Access-Control-Allow-Headers: Content-Type');
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS,PATCH");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//Получить все услуги и услуги по id и изменить услугу


require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/sql/auth.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);
mysqli_set_charset($connect, 'utf8');

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      
      $id = $_GET['id'];

      if(isset($_GET['id'])){
        $result = mysqli_query($connect, "SELECT * FROM service WHERE id = '$id'");
      } else {
        $result = mysqli_query($connect, "SELECT * FROM service order by id");
      }
    break;
    case 'POST':
     //auth($connect);
      $id = $_POST['id'];
      $title = $_POST['title'];
      $description = $_POST['description'];

      if(isset($_POST['id']) && isset($_POST['title']) && isset($_POST['description'])){
        $result = mysqli_query($connect, "UPDATE service SET title='$title', description='$description' WHERE id='$id'");
      }
    break;
  }

  if($result == ''){
    die('403 Bad Request');
  }

  $data = json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));
  echo $data;
}

?>

