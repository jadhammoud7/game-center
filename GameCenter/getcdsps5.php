<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


include("db_info.php");

$query =$mysqli->prepare("SELECT * FROM cds WHERE type='PS5'");
$query->execute();

$array = $query->get_result();

$response = [];

while($cdps5 = $array->fetch_assoc()){
    $response[] = $cdps5;
}

$json_response = json_encode($response);
echo $json_response;
?>
