$(document).ready(function () {

    /* Call plugins hrere ...*/
    $("#top-slider").owlCarousel({

        // Most important owl features
        items: 1,
        pagination: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        singleItem: true,
        itemsScaleUp: false,
        transitionStyle: "fadeUp",

        //Autoplay
        autoPlay: true,
        stopOnHover: false,

        // Navigation

        scrollPerPage: false,


        // CSS Styles
        baseClass: "owl-carousel",
        theme: "owl-theme",

        //Transitions
        //transitionStyle : "backSlide"



    });


    //плавная прокрутка
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector: "nav a"
    });
});
