$(function(){
    $('#Azul').click(function(){
        $('p').css("color","blue");
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
    });

    $('#Vermelho').click(function(){
        $('p').css("color","red");
        $('#Mensagem')
        .text('Cor alterada com sucesso.')
        .css('color','green')
        .delay(1500)
        .fadeOut()
        .addClass('vermelho');
    });

    $('button').click(function(){
        $('h1').hide();
    });
// Carrosel de imagem nativo
    $('#aimg1').click(function(){
        $('#image1').show();
        $('#image2').hide();
        $('#image3').hide();
        $('#image4').hide();
    });

    $('#aimg2').click(function(){
        $('#image2').show();
        $('#image1').hide();
        $('#image3').hide();
        $('#image4').hide();
    });

    $('#aimg3').click(function(){
        $('#image3').show();
        $('#image1').hide();
        $('#image2').hide();
        $('#image4').hide();
    });

    $('#aimg4').click(function(){
        $('#image4').show();
        $('#image1').hide();
        $('#image2').hide();
        $('#image3').hide();
    });

    
});

/*$(document).ready(function(){
    $('button').click(function(){
        $('h1').hide();
    });
});*/

/*$('#Vermelho').click(function(){
    $('p').css("color","red");
    $('#Mensagem').text('Cor alterada com sucesso.');
    $('#Mensagem').css('color','green');
    $('#Mensagem').delay(1500);
    $('#Mensagem').fadeOut();
});*/