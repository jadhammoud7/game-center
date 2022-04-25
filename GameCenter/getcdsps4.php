<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


include("db_info.php");

$query =$mysqli->prepare("SELECT * FROM cds WHERE type='PS4'");
$query->execute();

$array = $query->get_result();

$response = [];

while($cdps4 = $array->fetch_assoc()){
    $response[] = $cdps4;
}

$json_response = json_encode($response);
echo $json_response;
?>
