
    // $(document).ready(function () {
    //     e(".header_stick").length &&
    //         e(window).scroll(function () {
    //             e(window).scrollTop() ? e(".header_stick").addClass("navbar_fixed") : e(".header_stick").removeClass("navbar_fixed");
    //         }),
    //         e(".bar_menu").length &&
    //             (e(".bar_menu").on("click", function () {
    //                 e("#menu").toggleClass("show-menu");
    //             }),
    //             e(".close_icon").on("click", function () {
    //                 e("#menu").removeClass("show-menu");
    //             })),
    //         e(".offcanfas_menu .dropdown").on("show.bs.dropdown", function (n) {
    //             e(this).find(".dropdown-menu").first().stop(!0, !0).slideDown(400);
    //         }),
    //         e(".offcanfas_menu .dropdown").on("hide.bs.dropdown", function (n) {
    //             e(this).find(".dropdown-menu").first().stop(!0, !0).slideUp(500);
    //         }),
    //         e(".box_item").hover(function () {
    //             e(".mid-activity").find(".active-img").removeClass("active-img"),
    //                 e(".features").find(".active-sec").removeClass("active-sec"),
    //                 e("#" + e(this).attr("data-img") + " img").addClass("active-img"),
    //                 e(this).addClass("active-sec");
    //         }),
    //         e('[data-toggle="popover"]').popover();
    // });

    // $(function (e) {
    //     e("nav ul li a").each(function () {
    //         this.href === window.location.href && e(this).addClass("active");
    //     });
    // });

$(document).ready(function () {

    $(".header_stick").length && $(window).scroll(function () {
        $(window).scrollTop() ? $(".header_stick").addClass("navbar_fixed") : $(".header_stick").removeClass("navbar_fixed");
    }),
    $(".bar_menu").length && ($(".bar_menu").on("click", function () {
        $("#menu").toggleClass("show-menu");
    }),
    $(".close_icon").on("click", function () {
        $("#menu").removeClass("show-menu");
    })),
    $(".offcanfas_menu .dropdown").on("show.bs.dropdown", function (n) {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideDown(400);
    }),
    $(".offcanfas_menu .dropdown").on("hide.bs.dropdown", function (n) {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideUp(500);
    }),
    $(".box_item").hover(function () {
        $(".mid-activity").find(".active-img").removeClass("active-img"),
            $(".features").find(".active-sec").removeClass("active-sec"),
            $("#" + $(this).attr("data-img") + " img").addClass("active-img"),
            $(this).addClass("active-sec");
    });
    

    $(function (e) {
        $("nav ul li a").each(function () {
            this.href === window.location.href && $(this).addClass("active");
        });
    });


    $(".box_item").hover(function () {
        $(".mid-activity").find(".active-img").removeClass("active-img"),
        $(".features").find(".active-sec").removeClass("active-sec"),
        $("#" + $(this).attr("data-img") + " img").addClass("active-img"),
        $(this).addClass("active-sec");
    });
    console.log("The answer is don't think about it!")
});