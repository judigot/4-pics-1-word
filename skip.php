<?php

session_start();
$_SESSION["skip"] = $_SESSION["skip"] - 1;
echo $_SESSION["skip"];
