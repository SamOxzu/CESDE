<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Credentials: true");
 header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
 header('Access-Control-Max-Age: 1000');
 header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Connecting to MySQL Database.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate Student ID from JSON $obj array and store into $S_Name.
 $S_ID = $obj['student_id'];
 
 // Populate Student name from JSON $obj array and store into $S_Name.
 $S_Name = $obj['student_name'];
 
 // Populate Student Class from JSON $obj array and store into $S_Class.
 $S_Class = $obj['student_class'];
 
 // Populate Student Phone Number from JSON $obj array and store into $S_Phone_Number.
 $S_Phone_Number = $obj['student_phone_number'];
 
 // Populate Email from JSON $obj array and store into $S_Email.
 $S_Email = $obj['student_email'];
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "UPDATE StudentDetailsTable SET student_name= '$S_Name', student_class = '$S_Class', student_phone_number = '$S_Phone_Number', student_email = '$S_Email' WHERE student_id = $S_ID";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'El estudiante ha sido actualizado correctamente ...' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Inténtelo de nuevo';
 
 }
 mysqli_close($con);
?>