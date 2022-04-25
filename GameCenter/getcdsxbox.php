<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


include("db_info.php");

$query =$mysqli->prepare("SELECT * FROM cds WHERE type='xbox'");
$query->execute();

$array = $query->get_result();

$response = [];

while($cdxbox = $array->fetch_assoc()){
    $response[] = $cdxbox;
}

$json_response = json_encode($response);
echo $json_response;
?>
