<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


include("db_info.php");
$cd_name=$_GET['name'];
// echo $cd_name;
$query =$mysqli->prepare("SELECT * FROM cds WHERE name=?");
$query->bind_param("s",$cd_name);
$query->execute();

$array = $query->get_result();

$response = [];

if($single = $array->fetch_assoc()){
    $response[] = $single;

}
$json_response = json_encode($response);
echo $json_response;
?>
