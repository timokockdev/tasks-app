<?php

    $connection = mysqli_connect(
        'localhost',
        'root',
        'password',
        'tasks-app'
    );

     if ($connection) {
        echo "Database connected";
    }
    
?>