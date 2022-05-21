$('.owl-carousel').owlCarousel({
    //items:2,
    loop:true,
    margin:20,
    nav: true,
    dots: false,
    rewind: true,
    autoplay: true,
    navText: [
         '<i class="fas fa-chevron-circle-left"></i>',
         '<i class="fas fa-chevron-circle-right"></i>' 
    ],
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1100:{
            items:3
        }
    }
})