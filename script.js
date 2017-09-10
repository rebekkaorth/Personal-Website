/**
 * Created by rebekkaorth on 22.05.17.
 */


'use strict';

$(document).ready(function(){

    $('.scrollMe').click(function(e){
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        var percentage = 0.00;

        if (576 < $(document).width() < 991) {
            percentage = 0.045;
        }

        if (377 < $(document).width() < 575) {
            percentage = 0.036;
        }

        if ($(document).width() < 376) {
            percentage = 0.046;
        }


        $('body, html').stop().animate({
            'scrollTop': $(target).offset().top - ($(document).height() * percentage)
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


});