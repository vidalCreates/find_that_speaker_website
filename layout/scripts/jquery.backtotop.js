/*
Template Name: Drywest
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Author URI: http://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: http://www.os-templates.com/template-terms
File: Back to Top JS
*/

$("#toFeatures").click(function(){
	$('html, body').animate({
        scrollTop: $("#features").offset().top
    }, 600);
});

$("#toUses").click(function(){
	$('html, body').animate({
        scrollTop: $("#uses").offset().top
    }, 800);
});

$("#toTeam").click(function(){
	$('html, body').animate({
        scrollTop: $("#theTeam").offset().top
    }, 1000);
});

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});
