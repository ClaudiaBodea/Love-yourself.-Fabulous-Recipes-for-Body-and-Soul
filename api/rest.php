<?php 
require 'connect.php'; 

function executeGET($cnx) {
    
    if(isset($_GET['receipe_id'])) {   //  Verific daca am primit si un "receipe_id".
        //  Am primit un "receipe_id". Trimit doar o reteta.
        $id = $_GET['receipe_id']; 
        $cda = "SELECT receipes.receipe_id, receipes.name, receipes.slug, cooktime.cooktime, difficulty.difficulty, receipes.featured, 
        receipes.images, receipes.gluten, receipes.lowcarb, receipes.description        
        FROM receipes 
        INNER JOIN cooktime 
        on receipes.cook_id = cooktime.cook_id 
        INNER JOIN difficulty 
        on receipes.difficulty_id = difficulty.difficulty_id 
        where receipes.receipe_id = $id";
    
        if ($result = mysqli_query($cnx,$cda)) {
        
        // Get the record
        $line = mysqli_fetch_assoc($result);
        //  Mai creez un insert pentru componente:
        $cdaing = "SELECT ingredients.ingred_name,  receipeingred.quantity, unitsofmeasure.unit_name, 
        (receipeingred.quantity * ingredients.calories)/100 as calories, SUM(calories)

        FROM ingredients 
        INNER JOIN receipeingred 
        on ingredients.ingred_id = receipeingred.ingred_id 
        INNER JOIN unitsofmeasure
        on ingredients.unit_id=unitsofmeasure.unit_id 
        where receipeingred.receipe_id = $id";

        $ingred = [];  //  Un sir de valori gol
        if($resing = mysqli_query($cnx,$cdaing)) {
        
          // Get the records
          while($line1 = mysqli_fetch_assoc($resing)) //intr-un ciclu while extrag linie cu linie din multimea de selectie
             $ingred[] = $line1;
           mysqli_free_result($resing);
        }
        //  Adaug sirul de valori $ingred in $line
        $line['ingredients'] = $ingred;
        mysqli_free_result($result);
      }
      echo json_encode($line);
  }
    else {
        // Nu am primit un "receipe_id". Selectez toate retetele.
      $cda = "SELECT receipe_id, receipe_name FROM receipes"; // Putem adauga ce vrem sa recuperam
    
      if ($result = mysqli_query($cnx,$cda)) {
        
        // Get the records
        while ($line = mysqli_fetch_assoc($result)) {
            $articles[] = $line;
        }
        mysqli_free_result($result);
      }
      echo json_encode($articles);
    }
}



/*
function executePOST($cnx) {
    $sir = readInput();
    $nume = $sir['nume']; 
    $numePrenume = $sir['numePrenume']; 
    $email = $sir['email']; 
    $locatie = $sir['locatie'];

    $raspuns = [];
    $cda = "INSERT INTO listaoper (nume, numePrenume, email, locatie) VALUES ('$nume', '$numePrenume', '$email', '$locatie')";
    if (mysqli_query($cnx, $cda)) {
        $raspuns[] = ['rezultat' => "OK"];
        $raspuns[] = ['id' => mysqli_insert_id($cnx)];
    } else {
        $raspuns[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
    }
    echo json_encode($raspuns); 
}

function executePUT($cnx) {
    $sir = readInput();
    $id = $sir['id'];
    $nume = $sir['nume'];  
    $numePrenume = $sir['numePrenume']; 
    $email = $sir['email'];
    $locatie = $sir['locatie'];

    $raspuns = [];
    $cda = "UPDATE listaoper SET nume='$nume', numePrenume='$numePrenume', email='$email', locatie='$locatie' WHERE id=$id";
    if (mysqli_query($cnx, $cda)) {
        $raspuns[] = ['rezultat' => "OK"];
    } else {
        $raspuns[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
    }
    echo json_encode($raspuns);
}

function executeDELETE($cnx) {
    $sir = readInput();
    $id = $sir['id'];

    $cda = "DELETE FROM listaoper WHERE id = $id";
    $raspuns = [];

    if (mysqli_query($cnx, $cda)) {
        $raspuns[] = ['rezultat' => "OK"];
    } else {
        $raspuns[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
    }
    echo json_encode($raspuns);
    } 
*/

function readInput() {
    $json = file_get_contents('php://input');
    $sir = json_decode($json, true);
    // print_r($sir);
    return $sir;
}

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
    executeGET($cnx);  
    break;
 /*   
    case 'POST':
    executePOST($cnx);  
    break;
    
    case 'PUT':
    executePUT($cnx);  
    break;

    case 'DELETE':
    executeDELETE($cnx);  
    break;
*/
}

mysqli_close($cnx);
?>

// Comenzi GET în POSTMAN
// http://localhost/meal_plan/api/rest.php
// http://localhost/meal_plan/api/rest.php?receipe_id=3