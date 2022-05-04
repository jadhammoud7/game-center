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


    $response = [];
    $response["first_name"] = $first_name;
    $response["last_name"] = $last_name;
    $response["address"] = $address;
    $response["email"] = $email;
    $response["phone_number"] = $phone_number;
    $response["username"] = $username;
    $response["password"] = $password;


    $query = $mysqli->prepare("INSERT INTO users (first_name,last_name,address,email,phone_number,username,password) 
    VALUES (?,?,?,?,?,?,?)");

    $query->bind_param("ssssiss", $first_name, $last_name, $address, $email, $phone_number, $username, $password);
    $query->execute();
    $json_response = json_encode($username);
    echo $json_response;


?>
