<?php

session_start();
$_SESSION["skip"] = "3";
echo $_SESSION["skip"];
unset($_SESSION["done"]);
