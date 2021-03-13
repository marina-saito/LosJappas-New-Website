$(window).load(function () {
    
    // ABRE O POP-UP IFOOD
    $('.hover_bkgr_fricc').show();

    // REDIRECIONA A PAGINA DO IFOOD AO CLICAR NO POP-UP
    $('.tela').on('click', function(){
        window.open("https://www.ifood.com.br/delivery/sao-paulo-sp/los-jappas-pinheiros/5400fc23-5019-4a9e-b636-9b1b8ec5b99e", '_blank');
    });

    // FECHA O POP-UP AO CLICAR NO "X" OU FORA DO POP-UP
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });

    
    // TOGGLE ON-OFF O NAV PARA MOBILE
    $('.buttom-nav').click(function(){
        $('.nav').animate({
            height: "toggle"
            }, 500, function() {
            // Animation complete.
        });
    });

    
    // CARDAPIO
    $('.menu-title').click(function() {
        // TITULO DO SUB-MENU ATIVO
        $('.submenus-titles ul li').removeAttr('id');
        $(this).attr('id', 'menu-current');
        
        // ITENS DO SUB-MENU ATIVO
        $('#itens-cardapio div').removeClass('wrapper-on');
        $('.item-wrapper-'+this.textContent.toLowerCase().replace("ç","c").replace("õ","o")).addClass('wrapper-on');
    });

    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $("#cardapio .content-wrapper").scroll(function(){
        if($("#cardapio .content-wrapper").scrollTop()>200){
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
        
    
});


