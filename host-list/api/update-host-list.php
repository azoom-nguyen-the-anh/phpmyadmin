<?php
$body = json_decode(file_get_contents('php://input'));

$hosts = json_encode($body->hosts);

$file = fopen("../../host-list.json", "w");

if (fwrite($file, $hosts) === false) {
  echo "Không thể ghi vào file.";
} else {
  echo "Ghi dữ liệu thành công.";
}

fclose($file);