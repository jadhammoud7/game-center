<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


include("db_info.php");

$query =$mysqli->prepare("SELECT * FROM cds LIMIT 3;");
$query->execute();

$array = $query->get_result();

$response = [];

while($random = $array->fetch_assoc()){
    $response[] = $random;
}

$json_response = json_encode($response);
echo $json_response;
?>
