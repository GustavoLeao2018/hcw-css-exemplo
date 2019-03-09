$(document).ready(
    function(){
       var cortexto = $("nav").css("color");
       
       if ($("nav").css("color") == 'rgb(0, 0, 0)'){ var corhover = "#fff"; }
       else if ($("nav").css("color") == 'rgb(255, 255, 255)'){ var corhover = "#000"; }
 
       $("nav ul li a").mouseenter(function(){ $(this).css("color", corhover); } )
                       .mouseleave( function(){ $(this).css("color", cortexto); } )
                       .css("color", cortexto);
    
    $(document).on("click", ".titulo", function(){ 
        $(".corpo").append("<input type=\"text\" class=\"titulo-entrada\" placeholder=\"Digite seu texto\"/>");
        $(".corpo").append("<select class=\"titulo-alinhamento\">"+
                                "<option value=\"center\">Centralizado</option>"+
                                "<option value=\"left\">Esquerda</option>"+
                                "<option value=\"right\">Direita</option>"+
                           "</select>");
        $(".corpo").append("<select class=\"titulo-tamanho\">"+
                                "<option value=\"1\">Tamanho 1</option>"+
                                "<option value=\"2\">Tamanho 2</option>"+
                                "<option value=\"3\">Tamanho 3</option>"+
                                "<option value=\"4\">Tamanho 4</option>"+
                                "<option value=\"5\">Tamanho 5</option>"+
                                "<option value=\"6\">Tamanho 6</option>"+
                        "</select>");
        $(".corpo").append("<button class=\"titulo-botao\">Salvar</button>");
        $(".titulo").prop("disabled", true);
    });
    $(document).on("click", ".titulo-botao",function(){
        var texto = $(".titulo-entrada").val();
        var alinhamento = $(".titulo-alinhamento").val();
        var tamanho = $(".titulo-tamanho").val();
        $(".titulo-entrada").remove();
        $(".titulo-botao").remove();
        $(".titulo-alinhamento").remove();
        $(".titulo-tamanho").remove();
        $(".corpo").append("<h"+tamanho+" class=\"hcw-text-"+alinhamento+"\">"+texto+"</h"+tamanho+">");
        $(".titulo").prop("disabled", false);
        
    });
    
});
