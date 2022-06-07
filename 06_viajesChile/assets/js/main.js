// jQuery code

const SPEED_MILLISECONDS = 800;
const ADJUST_NAVBAR = 70;
const HEIGHT_NAVBAR = 70;

$(document).ready(function(){

  // Allow navbar element to change color when user scrolls
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > HEIGHT_NAVBAR) {
      $(".navbar").removeClass('settingNavbar').addClass('bg-black');
    }else{
      $(".navbar").addClass('settingNavbar').removeClass('bg-black');    
    }
  });

  // Effect smooth scroll
  $("a").click(function(){
    var hash = this.hash

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - ADJUST_NAVBAR
      },
      SPEED_MILLISECONDS
    )
  })

});