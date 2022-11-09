/* ===================================================================
 * Imminent 1.0.0 - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
    
    const $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
    const doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   /* preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        $("html").addClass('ss-preload');

        $WIN.on('load', function() {

            // force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');

        });
    };


   /* pretty print
    * -------------------------------------------------- */
    const ssPrettyPrint = function() {
        $('pre').addClass('prettyprint');
        $( document ).ready(function() {
            prettyPrint();
        });
    };


   /* slick slider
    * ------------------------------------------------------ */
    const ssSlickSlider = function() {
            
        $('.intro-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });
    };


   /* modal
    * ---------------------------------------------------- */ 
    const ssModal = function() {

        const modal = document.querySelector(".modal");
        const trigger = document.querySelector(".modal-trigger");
        const closeButton = document.querySelector(".modal__close");

        function toggleModal() {
            modal.classList.toggle("show-modal");
        }
        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }
        function pressEsc(event) {
            if (event.which=='27') {
                modal.classList.remove("show-modal");
            }
        }

        trigger.addEventListener("click", toggleModal);
        closeButton.addEventListener("click", toggleModal);
        window.addEventListener("click", windowOnClick);
        window.addEventListener("keyup", pressEsc);

    };


   /* final countdown
    * ------------------------------------------------------ */
    const ssFinalCountdown = function() {

        const finalDate = '2022/11/13';

        $('.counter').countdown(finalDate)
        .on('update.countdown finish.countdown', function(event) {

            const str = '<div class=\"counter__time days\">%D&nbsp;<span>D</span></div>' +
                        '<div class=\"counter__time hours\">%H&nbsp;<span>H</span></div>' +
                        '<div class=\"counter__time minutes\">%M&nbsp;<span>M</span></div>' +
                        '<div class=\"counter__time seconds\">%S&nbsp;<span>S</span></div>';
                    
            $(this).html(event.strftime(str));

        });
    };

   /* alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        }); 

    };
   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssPrettyPrint();
        ssSlickSlider();
        ssModal();
        ssFinalCountdown();

    })();

})(jQuery);
