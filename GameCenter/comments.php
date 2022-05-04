<?php


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


include("db_info.php");
$data = json_decode(file_get_contents("php://input"));

$username=$data->username;
$comment=$data->comment;




    $response = [];

    $response["comment"] = $comment;
    $response["username"] = $username;

 

    $query = $mysqli->prepare("INSERT INTO comments (username,comment) 
    VALUES (?,?)");

    $query->bind_param("ss",$username, $comment);
    $query->execute();
    $json_response = json_encode($response);
    echo $json_response;


?>
