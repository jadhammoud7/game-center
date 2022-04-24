<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


include("db_info.php");

$data=json_decode(file_get_contents("php://input"));
$username=$data->username;
$password=hash("sha256",$data->password);




//username w pass
$query = $mysqli->prepare("SELECT username FROM users WHERE username=?  AND password=?");
$query->bind_param("ss",$username,$password);
$query->execute();

$array = $query->get_result();


$userss = $array->fetch_assoc();
if(empty($userss)){//username not found se3eta byaamel encode lal $username la2ano manna empty fa akid btetla3=$username elle hatayneha bel frontend
echo null;
}else{
    $json_response = json_encode($username);
    echo $json_response;
}
