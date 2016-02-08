<?php

$name= $_POST["name"];
$phone= $_POST["phone"];
$describe= $_POST["describe"];
 
$EmailTo= "webverstalshik@gmail.com";
$Subject= "Получен новый заказ !";
 
// Подготовка шапки сообщения
$Body.= "Имя: ";
$Body.= $name;
$Body.= "\n";
 
$Body.= "Телефон: ";
$Body.= $phone;
$Body.= "\n"; 

if ($describe!=null){
$Body.= "Краткое описание: ";
$Body.= $describe;
$Body.= "\n"; 
 };
// посылаем сообщение
$success= mail($EmailTo, $Subject, $Body, "From:".$email);
 
// редирект
if($success){
echo"success";
}else{
echo"invalid";
} 
?>