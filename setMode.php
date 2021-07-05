<?php

session_start();
$_SESSION["mode"] = $_POST["mode"];
echo $_SESSION["mode"];
