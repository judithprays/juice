$(document).ready(function(){ 
    $(".shop-menu").click(function() {
        event.preventDefault();
            $(".nav_expanded").toggleClass('hide', 1000, "easeOutSine");
            $(".shop-menu").toggleClass('active');

        });

});

