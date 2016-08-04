<?php
\Larakit\StaticFiles\Manager::package('larakit/sf-cropper')
    ->setSourceDir('public')
    ->cssPackage('cropper.css')
    ->jsPackage('cropper.js')
    ->jsPackage('init.js');
