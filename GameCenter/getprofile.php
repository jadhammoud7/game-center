<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


include("db_info.php");

$data=json_decode(file_get_contents("php://input"));

$first_name=$data->first_name;
$last_name=$data->last_name;
$address=$data->address;
$email=$data->email;
$phone_number=$data->phone_number;
$username=$data->username;
$password=hash("sha256",$data->password);




$query =$mysqli->prepare("UPDATE users SET first_name=?,last_name=?, address=?,email=?, phone_number=?
, password=?  WHERE username=?;");
$query->bind_param("ssssiss",$first_name,$last_name,$address,$email,$phone_number,$password,$username);
$query->execute();

// $array = $query->get_result();

// $response = [];

// $profile = $array->fetch_assoc();
// $response[] = $profile;


// $json_response = json_encode($response);
// echo $json_response;
?>
