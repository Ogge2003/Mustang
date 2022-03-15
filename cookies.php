<?php
/* Aktiverar cookies, utgår om 24h*/
setcookie("name", "Oskar", time() + 86400);

$_SESSION['name'] = "12";
?>
