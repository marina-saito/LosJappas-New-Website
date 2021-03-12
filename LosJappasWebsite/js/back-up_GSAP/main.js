var nav_menu = $('.nav');
var height_nav_menu = nav_menu.height();
console.log(height_nav_menu);

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
    gsap.registerEffect({
        name: "grow",
            effect: (targets, config) => {
                return gsap.to(targets, {duration: config.duration, height: "auto", opacity: 1});
            },
            defaults: {duration: 0.3}, //defaults get applied to any "config" object passed to the effect
            extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    });
    
    gsap.registerEffect({
        name: "shrink",
        effect: (targets, config) => {
            return gsap.to(targets, {duration: config.duration, height: "0px", opacity: 0});
        },
        defaults: {duration: 0.3}, //defaults get applied to any "config" object passed to the effect
        extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    });

    $('.buttom-nav').click(function(){
        height_nav_menu = nav_menu.height();
        console.log(height_nav_menu);
        if (height_nav_menu > 0) {
            // gsap.effects.shrink("#options-nav nav");
            $('.nav').animate({
                height: "toggle"
              }, 500, function() {
                // Animation complete.
            });
        } else {
            // gsap.effects.grow("#options-nav nav");
            $('.nav').animate({
                height: "toggle"
              }, 500, function() {
                // Animation complete.
            });
        }
    });

    
    // CARDAPIO
    $('.menu-title a').click(function() {
        // TITULO DO SUB-MENU ATIVO
        $('.submenus-titles ul li a').removeClass('menu-current');
        $(this).addClass('menu-current');
        
        // ITENS DO SUB-MENU ATIVO
        $('#itens-cardapio div').removeClass('wrapper-on');
        $('.item-wrapper-'+this.textContent.toLowerCase().replace("ç","c").replace("õ","o")).addClass('wrapper-on');
    });

    $(window).scroll(function(){
        if($('.content-wrapper').scrollTop()>200){
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
        
    
});

