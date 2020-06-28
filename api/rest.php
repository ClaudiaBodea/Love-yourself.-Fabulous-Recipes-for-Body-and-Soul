<?php 
require 'connect.php'; 
function executeGET($cnx) {
    
    if(isset($_GET['receipe_id'])) {          
        $id = $_GET['receipe_id'];  
        $cda = "SELECT receipes.receipe_id, receipes.name, receipes.slug, receipes.cooktime, difficulty.difficulty, receipes.featured, 
        receipes.images, receipes.gluten, receipes.lowcarb, receipes.description        
        FROM receipes        
        INNER JOIN difficulty 
        on receipes.difficulty_id = difficulty.difficulty_id 
        where receipes.receipe_id = $id";
    
        if ($result = mysqli_query($cnx,$cda)) {        
        
        $line = mysqli_fetch_assoc($result);        
               
                $cdaing = "SELECT ingredients.ingred_name,  receipeingred.quantity, unitsofmeasure.unit_name, 
                (receipeingred.quantity * ingredients.calories)/100 as calories
                FROM ingredients INNER JOIN receipeingred on ingredients.ingred_id = receipeingred.ingred_id INNER JOIN unitsofmeasure
                on ingredients.unit_id=unitsofmeasure.unit_id 
                where receipeingred.receipe_id = $id";

                $ingred = []; 
                if($resing = mysqli_query($cnx,$cdaing)) {                
                   
                    while($line1 = mysqli_fetch_assoc($resing))
                        $ingred[] = $line1;
                    mysqli_free_result($resing);
                    }
        
        $line['ingredients'] = $ingred;

        mysqli_free_result($result);
      }
      echo json_encode($line);
  }
    else {      
        $receipes =  [];
        $cda = "SELECT receipes.receipe_id, receipes.name, receipes.slug, receipes.cooktime, difficulty.difficulty, receipes.featured, 
        receipes.images, receipes.gluten, receipes.lowcarb, receipes.description             
        FROM receipes 
        INNER JOIN difficulty on receipes.difficulty_id = difficulty.difficulty_id
        ORDER BY receipes.receipe_id ASC "; 

        if ($result = mysqli_query($cnx,$cda)) {                
           
            while ($line = mysqli_fetch_assoc($result)){       
                    
                    $recid = $line['receipe_id']; 
                    $cdaing = "SELECT ingredients.ingred_name,  receipeingred.quantity, unitsofmeasure.unit_name, 
                    (receipeingred.quantity * ingredients.calories)/100 as calories
                    FROM ingredients INNER JOIN receipeingred on ingredients.ingred_id = receipeingred.ingred_id 
                    INNER JOIN unitsofmeasure on ingredients.unit_id=unitsofmeasure.unit_id 
                    WHERE receipeingred.receipe_id = $recid";

                    $ingred = []; 
                    if($resing = mysqli_query($cnx,$cdaing)) {                                            
                         
                        while($line1 = mysqli_fetch_assoc($resing))
                        $ingred[] = $line1;
                        mysqli_free_result($resing);
                    }           
            
                $line['ingredients'] = $ingred;
                $articles[] = $line;
            }
        mysqli_free_result($result);  
    }                                    
    
            echo json_encode($articles);
    }    
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
