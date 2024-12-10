
$(document).ready(function(){
  $(".Navation .Bar").click(function(){
      $(" .Navation .Links").toggleClass("MenuBarPosition");

  }); //  ----------------     this is for menu bar toggle 




}); 









// JQuery Min -------
$(document).ready(function(){

    $("h4").click(function(){
      $(this).hide();
    });


}); // JQuery End -----













  // ----- AOS Animatioon Query -------
      function aosInit() {
          AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          });
        }
        window.addEventListener('load', aosInit);
    // ----- AOS Animatioon Query End -------

        

// ----- Swiper Script ------ 
var swiper = new Swiper(".Testimonial .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// -------End Swiper Script -------


