
$(document).ready(function(){
  $(".Home .Navigaton .MenuBar").click(function(){
      $(" .Home .Links").toggleClass("MenuBarPosition");
  }); //  this is for menu bar toggle ---------
}); 

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
let ScreenWidth = screen.width;
        if(ScreenWidth < 800){
          var swiper = new Swiper(".Testimonial .mySwiper", {
            slidesPerView: 1,
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
        }else{
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
        }
// -------End Swiper Script -------