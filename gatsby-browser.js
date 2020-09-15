/* eslint-disable */
/**
 * Trust All Scripts
 *
 * This is a dirty little script for iterating over script tags
 * of your Ghost posts and adding them to the document head.
 *
 * This works for any script that then injects content into the page
 * via ids/classnames etc.
 *
 */

const $ = require("jquery");

var customScripts = function () {
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
        $("nav .navbar-nav a").each(function () {
            this.href === window.location.href && $(this).addClass("active");
        });
    });


    $(".box_item").hover(function () {
        $(".mid-activity").find(".active-img").removeClass("active-img"),
        $(".features").find(".active-sec").removeClass("active-sec"),
        $("#" + $(this).attr("data-img") + " img").addClass("active-img"),
        $(this).addClass("active-sec");
    });

    $('.tabValues li').on('click', function(){
        var currentItem = '.'+ $(this).attr('attr');
        $('.tabValues').find(".active").removeClass('active');
        $(this).addClass('active');
        $(".pricingpage").find(".showItem").removeClass("showItem").addClass("hideItem");
        $(currentItem).removeClass("hideItem").addClass("showItem");
    });


    // $(".popupyoutubevideo,.popupvideosection").magnificPopup({ type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
    // $(document).ready(function () {
    //     $(window).scroll(function () {
    //         const o = localStorage.getItem("showMsg");
    //         $(window).scrollTop() > 550
    //             ? "false" !== o && ($(".new_footer_area").addClass("popupspc"), $(".overlayPop").addClass("slideUp").removeClass("slideDown"))
    //             : $(".overlayPop").removeClass("slideUp").addClass("slideDown").hid$("1000"),
    //             $(".close-fd").click(function () {
    //                 $(".new_footer_area").removeClass("popupspc"), $(".overlayPop").addClass("slideDown").removeClass("slideUp"), localStorage.setItem("showMsg", "false");
    //             }),
    //             "false" == o && ($(".new_footer_area").removeClass("popupspc"), $(".overlayPop").addClass("slideDown").removeClass("slideUp"));
    //     });
    // });

    /* Pricing js starts */
    
    var numberOfUsers = $(".range-slider__range").val();
    var isPricingInUSD = true;
    $(".numberOfUserss").each(function(){
        $(this).text(numberOfUsers);
    });
    const settings={
      fill: '#f8654a',
      background: '#f5f8fa'
    }
    $('.output').each(function(){ 
      var selectedPlan = $(this).attr('plan');
       $(this).text(getTotalPriceText(selectedPlan, isPricingInUSD, numberOfUsers ));
    });
    $('.pricePer').each(function(){
      var selectedPlan = $(this).attr('plan');
      if(isPricingInUSD){ var currency = "$";} else{ var currency = "₹";}
      $(this).find(".amountperperson").text(currency + getPricePerUser(selectedPlan, isPricingInUSD)); 
      });
    /*
    0 = Free
    1 = One time challenge
    2 = Premium
    3 = Enterprise
     */
    function getPricePerUser(plan, usd) {
      if (plan == 1) {
        if (usd) { return 3 } else { return 30  }
      } else if (plan == 2) {
        if (usd) { return 3 } else { return 30 }
      } else if (plan == 3) {
        if (usd) { return 4 } else { return 40 }
      } else {
        return 0
      }
      
    }

    function getTotalPriceText(plan, usd, numberOfUsers ) {
      const cost = getCost(plan, usd, numberOfUsers)
      if (cost !== null) {
        if (cost > 0) {
          if (usd) {
            return `$${cost}`
          } else {
            return `₹${cost}`
          }
        } else {
          return "FREE"
        }
      } else {
        return "Contact us"
      }
    }

    function getCost(plan, usd, numberOfUsers) {
      if (numberOfUsers >= 1000) {
        return null
      } else {
        return getPricePerUser(plan, usd) * numberOfUsers
      }
    }
    const sliders = document.querySelectorAll('.range-slider');
    Array.prototype.forEach.call(sliders,(slider)=>{
      slider.querySelector('input').addEventListener('input', (event)=>{
          
          console.log(event.target.value);
          applyFill(slider.querySelector('input'));
          $('.output').each(function(){ 
            var selectedPlan = $(this).attr('plan');
            var numberOfUsers = event.target.value;
            var isPricingInUSD = true;
            $(".noOfUsers").text(numberOfUsers);
            $(this).text(getTotalPriceText(selectedPlan, isPricingInUSD, numberOfUsers ));
            
          });
          $(".numberOfUserss").each(function(){
              var numberOfUsers = event.target.value;
              $(this).text(numberOfUsers);
          });

      });
      applyFill(slider.querySelector('input'));  
    });

    function applyFill(slider) {
      const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
      const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
      slider.style.background = bg;
    }
    /* Pricing js ends */
   
  });
}

/* CircularProgressScripts starts */
var circularProgressScripts = function() {

    $.fn.circleGraphic = function(options) {
        $.fn.circleGraphic.defaults = {
            color: '#05c8ad',
            startAngle: 0,
            //endAngle:50
        };
        $(this).each(function() {
            let $this = $(this)
            var opts = $.extend({}, $.fn.circleGraphic.defaults, options);
            var percentage = $(this).find('.circle').attr('data-percent');
            var ID = "c" + percentage + Math.random();
            $this.append("<canvas width='200' height='200' id='" + ID + "'></canvas>");
            var canvas = document.getElementById(ID),
                context = canvas.getContext('2d');
            var Width = $this.width();
            $this.height(Width);
            var Height = $this.height();

            canvas.width = Width;
            canvas.height = Height;
            var startAngle = opts.startAngle,
                endAngle = percentage / 100,
                angle = startAngle,
                radius = Width * 0.4;

            function drawTrackArc() {
                context.beginPath();
                context.strokeStyle = '#ecfdfb';
                context.lineWidth = 7;
                context.arc(Width / 2, Height / 2, radius, (Math.PI / 180) * (startAngle * 360 - 90), (Math.PI / 180) * (endAngle * 360 + 270), false);
                context.stroke();
                context.closePath();
            }

            function drawOuterArc(_angle, _color) {
                var angle = _angle;
                var color = _color;
                context.beginPath();
                context.strokeStyle = color;
                context.lineWidth = 7;

                context.font = '300 70px Poppins,sans-serif';
                context.arc(Width / 2, Height / 2, radius, (Math.PI / 180) * (startAngle * 360 - 90), (Math.PI / 180) * (angle * 360 - 90), false);
                context.stroke();
                context.closePath();
            }

            function numOfPercentage(_angle, _color) {
                var angle = Math.ceil(_angle * 100);
                var color = _color;
                context.fillStyle = '#4a5269';
                var metrics = context.measureText(angle);
                var textWidth = metrics.width;
                var xPos = Width / 2 - textWidth / 2,
                    yPos = Height / 2 + textWidth / 2;
                context.textAlign = 'center';
                context.direction = 'ltr'
                context.fillText(angle + "%", 137, 157);
            }

            function drawACircleInTheEnd() {
                let radians = angle * 2 * Math.PI;
                context.beginPath();
                context.arc(Width / 2 + radius * (Math.sin(radians)),
                    Height / 2 - radius * (Math.cos(radians)),
                    3,
                    0,
                    2 * Math.PI,
                    false);

                context.fillStyle = '#05c8ad';
                context.fill();
                context.lineWidth = 7;
                context.strokeStyle = '#05c8ad';
                context.stroke();
            }


            function draw() {
                var loop = setInterval(function() {
                    var circlebar = $('.circleGraphic');
                    if (circlebar.length) {
                        var elementPos = circlebar.offset().top;
                        var topOfWindow = $(window).scrollTop();
                        var animate = $('.circleGraphic').data('animate');
                        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                            context.clearRect(0, 0, Width, Height);
                            drawTrackArc();
                            drawOuterArc(angle, opts.color);
                            numOfPercentage(angle, opts.color);
                            drawACircleInTheEnd();
                            angle += 0.01;
                            if (angle > endAngle) {
                                clearInterval(loop);
                            }
                        }
                    }

                }, 1000 / 60);
            }
            draw();
            return $this;
        })
    };

    $('.circleGraphic').circleGraphic();
};
/* CircularProgressScripts ends */

/* Content API call for Vantage Fit Blog starts */

/* Content API call for Vantage Fit Blog ends */

console.log("Scripts loaded")


var trustAllScripts = function () {
    var scriptNodes = document.querySelectorAll('.load-external-scripts script');

    for (var i = 0; i < scriptNodes.length; i += 1) {
        var node = scriptNodes[i];
        var s = document.createElement('script');
        s.type = node.type || 'text/javascript';

        if (node.attributes.src) {
            s.src = node.attributes.src.value;
        } else {
            s.innerHTML = node.innerHTML;
        }

        document.getElementsByTagNam$('head')[0].appendChild(s);
    }
};

exports.onRouteUpdate = function () {
    trustAllScripts();
    customScripts();
    circularProgressScripts();
};
