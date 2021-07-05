<?php

session_start();
$con = new mysqli('localhost', 'root', '', 'appjudigot_4pics1word');
if ($con->connect_error) {
    die('Could not connect: ' . $con->connect_error);
}
$sql = "SELECT COUNT(*) FROM `levels`";
$result = $con->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $total = $row['COUNT(*)'];
    }
}

if (sizeof($_SESSION['done']) == $total) {
    echo "<span>No more words!</span>";
    echo "<br><button  type='button'>New Game</button>";
} else {
    // Generate unused word...
    do {
        $generated = rand(1, $total);
    } while (in_array($generated, $_SESSION['done']));
    // Store generated unused word
    array_push($_SESSION['done'], $generated);
    $sql = "SELECT * FROM levels WHERE id = '" . $generated . "'";
    $result = $con->query($sql);
    if ($result->num_rows > 0) {
        $picture;
        while ($row = $result->fetch_assoc()) {
            $original = $row['word'];
            $picture = $row['picture'];
            if (rand(1, 2) == 1) {
                $vowels = array("a", "e", "i", "o", "u");
            } else {
                $vowels = array("b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z");
            }
            $word = strtoupper(str_replace($vowels, "_", $original));
            $_SESSION['original'] = $original;
            echo $word;
        }
    }
    $con->close();
}