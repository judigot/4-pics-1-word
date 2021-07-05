<?php

/* Provide table name ($TableName).
 * Store column names ($Column) and field values ($Data) in an array.
 * Provide database connection ($Server, $playerName, $Password, $DatabaseName)
 * */
session_start();
$Connection = new mysqli('localhost', 'root', '', 'appjudigot_4pics1word');
if ($Connection->connect_error) {
    die('Could not connect: ' . $Connection->connect_error);
}
$TableName = "scores";
$Column = array("playerName", "score");
$Data = array($_POST["playerName"], $_POST["score"]);

$SQL = "INSERT INTO `" . $TableName . "` (";
// Retrieve Column Names
foreach ($Column as $Value) {
    $SQL = $SQL . "`" . $Value . "`, ";
}
$SQL = substr($SQL, 0, -2) . ") VALUES ('";
// Retrieve Data Input
foreach ($Data as $Value) {
    // Escape User Input
    $SQL = $SQL . mysqli_real_escape_string($Connection, $Value) . "', '";
}
$SQL = substr($SQL, 0, -3) . ");";
$PS = $Connection->prepare($SQL);
$PS->execute();
$Connection->close();
