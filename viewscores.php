<?php

$con = new mysqli('localhost', 'root', '', 'appjudigot_4pics1word');
if ($con->connect_error) {
    die('Could not connect: ' . $con->connect_error);
}
$sql = "SELECT * FROM `scores` ORDER BY score DESC";
$result = $con->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo $row['playerName'] . "----------------------------------------" . $row['score'] . "<br>";
    }
} else {
    echo "<h1 id='notopscore'>No one topped yet!</h1>";
}