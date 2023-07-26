<?php
$body = json_decode(file_get_contents('php://input'));

$hosts = json_encode($body->hosts);

$file = fopen("../../host-list.json", "w") or die("Unable to open file!");

fwrite($file, $hosts);
fclose($file);