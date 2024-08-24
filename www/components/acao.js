// This is a JavaScript file

$(document).on("click", "#Somar", function(){
    var valor1 = $("#valor1").val();
    var valor2 = $("#valor2").val();

    var resultado = parseFloat(valor1) + parseFloat(valor2);
    
    $("#resultado").val(resultado);
} ) ;
$(document).on("click", "#Subtrair", function(){
    var valor1 = $("#valor1").val();
    var valor2 = $("#valor2").val();

    var resultado = parseFloat(valor1) - parseFloat(valor2);
    
    $("#resultado").val(resultado);
} ) ;
$(document).on("click", "#Multiplicar", function(){
    var valor1 = $("#valor1").val();
    var valor2 = $("#valor2").val();

    var resultado = parseFloat(valor1) * parseFloat(valor2);
    
    $("#resultado").val(resultado);
} ) ;
$(document).on("click", "#Dividir", function(){
    var valor1 = $("#valor1").val();
    var valor2 = $("#valor2").val();

    var resultado = parseFloat(valor1) / parseFloat(valor2);
    
    $("#resultado").val(resultado);
} ) ;
