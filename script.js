/* ========== JAVASCRIPT for PORTFOLIO ========== */

/* This section's code has been adapted from the user Meetshah's 
    "Portfolio Gallery with filtering category" code in Bootsnipp.com
    This is a non-profit use, and the original code can be found in 
    https://bootsnipp.com/snippets/GzKKE */

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
                //$('.filter[filter-item="'+value+'"]').removeClass('hidden');
                //$(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });

    if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
});

/* ========== JAVASCRIPT for NAVBAR SHRINK ========== */

/* This section's code has been adapted from the user Skelly's 
    "Bootstrap 4 Navbar Shrink on Scroll simple jquery" code in Codeply.com
    This is a non-profit use, and the original code can be found in 
    https://www.codeply.com/go/62Roy6RDOa */
        
$(window).scroll(function() {
    /* affix after scrolling 100px */
    if ($(document).scrollTop() > 100) {
        $('.navbar').addClass('navbar-shrink');
    } else {
        $('.navbar').removeClass('navbar-shrink');
    }
});

/* ========== JAVASCRIPT for SCROLLSPY ========== */

/* This section's code has been adapted from the user Florin Minia's (@FlorinM) 
    "Scrollspy and smooth scrolling" code in Codepen.io
    This is a non-profit use, and the original code can be found in 
    https://codepen.io/FlorinM/pen/YwaWYO */

// this makes the height of a static-section equal to the height of the window
//$('.static-section').css('height', $( window ).height());

// scrollspy section
(function($){
    var sections = [];
    var id = false;
    var $navbara = $('.navbar-nav a');
    
    $navbara.click(function(e){
        $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    },1000);
        hash($(this).attr('href'));
    });
    
    $navbara.each(function(){
        sections.push($($(this).attr('href')));
        
    })
    $(window).scroll(function(e){
        var scrollTop = $(this).scrollTop() + ($(window).height()/2);
        for (var i in sections) {
        var section = sections[i];
        if (scrollTop > section.offset().top){
            var scrolled_id = section.attr('id');
        }
        }
        if (scrolled_id !== id) {
        id = scrolled_id;
        $($navbara).removeClass('current');
        $('.navbar-nav a[href="#' + id + '"]').addClass('current'); 
        }
    })
})(jQuery);

hash = function(h){
    if (history.pushState){
        history.pushState(null, null, h);
    }else{
        location.hash = h;
    }
}

/* ========== JAVASCRIPT for OTHER FUNCTIONS ========== */

// Google reCaptcha button enabling functions
function enableBtn(){
    document.getElementById("submit").disabled = false;
}
function expiredBtn(){
    document.getElementById("submit").disabled = true;
}