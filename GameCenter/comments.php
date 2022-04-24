<?php


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


include("db_info.php");
$data = json_decode(file_get_contents("php://input"));

$username=$data->username;
$comment=$data->comment;


// if(isset($_POST["email"]) && $_POST["email"] != ""){
// 	$email = $_POST["email"];
// }else{
// 	die(" ALERT email");
// }
// if(isset($_POST["comment"]) && $_POST["comment"] != ""){
// 	$comment = $_POST["comment"];
// }else{
// 	die(" ALERT comment");
// }



    $response = [];

    $response["comment"] = $comment;
    $response["username"] = $username;

 

    $query = $mysqli->prepare("INSERT INTO comments (username,comment) 
    VALUES (?,?)");

    $query->bind_param("ss",$username, $comment);
    $query->execute();
    $json_response = json_encode($response);
    echo $json_response;
// }else{
//     echo "error";

// }

?>
