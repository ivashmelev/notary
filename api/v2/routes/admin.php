<?php
header('Access-Control-Allow-Origin: *');
// Регистрация нового админа и изменение текущих

require_once ('../../../modules/sql/config.php');
require_once ('../../../modules/sql/auth.php');

$connect = mysqli_connect($HOST, $USERNAME, $PASSWORD ,$DATABASE);
mysqli_set_charset($connect, 'utf8');

if (!$connect) {
  die("Ошибка: Невозможно установить соединение с MySQL.");
} else {
  
  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      $result = mysqli_query($connect, "SELECT * FROM admin ");
    break;
    case 'POST':
      $id = $_POST['id'];
      $name = $_POST['name'];
      $mail = $_POST['mail'];
      $login = $_POST['login'];
      $password = md5($_POST['password']);
      if(isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['login']) && isset($_POST['password']) && isset($_POST['create'])){
        mysqli_query($connect, "INSERT INTO admin VALUES (NULL, '$login', '$password', '$name', '$mail')");
        $result = mysqli_query($connect, "SELECT * FROM admin order by id desc limit 1");
      }
      if(isset($_POST['id']) && isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['login']) && isset($_POST['password']) && isset($_POST['edit'])){
        mysqli_query($connect, "UPDATE admin SET name='$name', mail='$mail', login='$login', password='$password' WHERE id='$id'");
        $result = mysqli_query($connect, "SELECT * FROM admin WHERE id='$id'");
      }
      if(isset($_POST['id']) && isset($_POST['delete'])){
        $result = mysqli_query($connect, "SELECT * FROM admin WHERE id='$id'");
        mysqli_query($connect, "DELETE FROM admin WHERE id='$id'");
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

