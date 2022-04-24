<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


include("db_info.php");

$query =$mysqli->prepare("SELECT * FROM cds WHERE type='PS3'");
$query->execute();

$array = $query->get_result();

$response = [];

while($cdps3 = $array->fetch_assoc()){
    $response[] = $cdps3;
}

$json_response = json_encode($response);
echo $json_response;
?>
