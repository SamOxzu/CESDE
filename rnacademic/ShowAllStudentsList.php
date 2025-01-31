<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


include 'DBConfig.php';
// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
if ($conn->connect_error) {
 die("Conexión fallida: " . $conn->connect_error);
} 
// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM StudentDetailsTable";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row[] = $result->fetch_assoc()) {
        $item = $row;
        $json = json_encode($item);
    }
}
else
{
 echo "No hay estudiantes para mostrar";
}
echo $json;
$conn->close();
?>