<?php
require_once 'bd.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $comprobacion = comprobarUsuario($_POST["usuario"], $_POST["clave"]);
    if(!$comprobacion){
        $error = true;
        $usuario = $_POST["usuario"];
    }else{
        session_start();
        $_SESSION["usuario"] = $comprobacion;
        $_SESSION["carrito"] = array();
        header("Location: categorias.php");
        return;
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de sesión</title>
</head>
<body>
    <?php
    if(isset($_GET["redireccion"])){
        echo "<p>Inicia sesión para continuar</p>";
    }
    ?>
</body>
</html>