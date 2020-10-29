
$(document).ready(function(){
    
    var menu = $('#menu').offset().top;
      
      $('#sections li a').click(function(e) {
          e.preventDefault();
          $('#sections li a').removeClass('ativo');
          var id = $(this).attr('href');
          var onde = $(id).offset();
          $('html,body').animate({scrollTop:onde.top}, 1000);
          $(this).addClass('ativo');
          
      });
  });

  $('.js-toggle-menu').click(function(e){
    e.preventDefault();
    $('nav').slideToggle();
    $(this).toggleClass('open');
  });