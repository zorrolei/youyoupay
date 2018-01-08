

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function() {

    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();

            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {

                    slitslider.next();
                    return false;

                } );

                $navArrows.children( ':first' ).on( 'click', function() {

                    slitslider.previous();
                    return false;

                } );

                $nav.each( function( i ) {

                    $( this ).on( 'click', function( event ) {

                        var $dot = $( this );

                        if( !slitslider.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );

                        }

                        slitslider.jump( i + 1 );
                        return false;

                    } );

                } );

            };

        return { init : init };

    })();

    Page.init();

    /**
     * Notes:
     *
     * example how to add items:
     */

    /*

    var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');

    // call the plugin's add method
    ss.add($items);

    */

});



$(document).ready(function(){




	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */

    // Slider Height
    var slideHeight = $(window).height()-200;

    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });



	$("#works, #testimonial").owlCarousel({
		navigation : true,
		pagination : false,
		slideSpeed : 700,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
	});




});




var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();

