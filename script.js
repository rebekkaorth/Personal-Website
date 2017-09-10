/**
 * Created by rebekkaorth on 22.05.17.
 */


'use strict';

$(document).ready(function(){

    $('.scrollMe').click(function(e){
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        let percentage = 0.01 ;
        // console.log(($(document).height()));
        if (($(document).width() < 574)) {
            percentage = 0.036;
            // console.log(($(document).height() * percentage));
        }

        $('body, html').stop().animate({
            'scrollTop': $(target).offset().top - ($(document).height() * percentage)
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


});