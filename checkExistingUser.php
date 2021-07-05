<?php

$playerName = $_POST['playerName'];
$con = new mysqli('localhost', 'root', '', 'appjudigot_4pics1word');
if ($con->connect_error) {
    die('Could not connect: ' . $con->connect_error);
}
$sql = "SELECT `playerName` FROM `scores` WHERE `playerName` = '$playerName'";
//$sql = "SELECT `playerName` FROM `scores` WHERE `playerName` = '$playerName'";
$result = $con->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "1";
    }
} else {
    echo '0';
}