var galleryFeed = new Instafeed({
  get: "user",
  userId: 3236163376,
  accessToken: "3236163376.1677ed0.de857991f0b84e90976780423d52341c",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 10,
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
    
    var owl = $(".owl-carousel"),
        owlSlideSpeed = 300;

    // init owl    
    $(document).ready(function(){
      owl.owlCarousel({
        // navContainer: '.owl-nav-custom',
        // dotsContainer: '.owl-dots-custom',
        items:5,
        margin:10,
        dots:false,
        nav:true,
        loop:false,
        margin:10,
        responsive:{
          0:{
            items:1
          },
          200:{
            items:2
          },
          400:{
            items:2
          },
          768:{
            items:5
          }
        }
      });
    });
  }
});

galleryFeed.run();


