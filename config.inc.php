<?php
declare(strict_types=1);
$json = file_get_contents('./host-list.json');
$hosts = json_decode($json, true);
$cfg['blowfish_secret'] = '8acb120e574d5b679c9d9300955e744e';

$i = 0;
foreach ($hosts as $item){
  $i++;
  $cfg['Servers'][$i]['auth_type'] = 'cookie';
  $cfg['Servers'][$i]['host'] = $item["host"];
  $cfg['Servers'][$i]['compress'] = false;
  $cfg['Servers'][$i]['AllowNoPassword'] = true;
}

$cfg['UploadDir'] = '';
$cfg['SaveDir'] = '';