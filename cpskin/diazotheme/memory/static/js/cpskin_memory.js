/*
 * cpskin_spirit.js
 * Copyright (C) 2017 AuroreMariscal <aurore@affinitic.be>
 *
 * Distributed under terms of the LICENCE.txt license.
 */
$(document).ready(function() {
    var $window = $(window);

// search
    $( ".btn-search" ).click(function(event) {

      $("#hidden-search").toggleClass("portal-search-visible portal-search-hidden");

      event.preventDefault();
    });
    if((window.innerWidth <=600)&&(hasClass(body,"main-homepage"))){
      document.getElementById("#logo-mobile #portal-searchbox").style.display = "none";
      $('#search-btn').click(function(e){
           e.preventDefault();
           $(this).toggleClass('selected');
           document.getElementById("#logo-mobile #portal-searchbox").style.display = "block";
          $('#logo-mobile #portal-searchbox input.searchField').focus();
        });
    }
    if(window.innerWidth <=600){
      document.getElementById("#portal-header #portal-searchbox").style.display = "none";
      $('#search-btn').click(function(d){
           d.preventDefault();
           $(this).toggleClass('selected');
           document.getElementById("#portal-header #portal-searchbox").style.display = "block";
          $('#portal-header #portal-searchbox input.searchField').focus();
        });
    }

       

});



