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


    /* Content API call for Vantage Fit Blog starts */
    
    /* Content API call for Vantage Fit Blog ends */
    /* Pricing js starts */
    
    var numberOfUsers = '';
var numberOfUsers = $(".range-slider__range").val();
var isPricingInUSD = true;
/*no of users function*/
$(".numberOfUserss").each(function(){
    $(this).text(numberOfUsers);
    $(".numberOfUserss").attr("users", numberOfUsers);
});
/*Price in boxes*/

$('.output').each(function(){ 
  var selectedPlan = $(this).attr('plan');
  $(this).html("<span>" + `${getCurrencySymbol(isPricingInUSD)}` + "</span>" + getTotalPrice(selectedPlan, isPricingInUSD, numberOfUsers ));
});


/*Price per employee*/
$('.pricePer').each(function(){
  var selectedPlan = $(this).attr('plan');
  var isPricingInUSD = true;
  $(this).find(".amountperperson").text(getPlanRate(selectedPlan, isPricingInUSD)); 
  $(".chooseplan").text(getPlanName(selectedPlan));
});

$("#subscriptionSwitch").click(function(){
  $('.tabValues').find(".active").removeClass('active');
  $(".subscriptiontab").addClass("active");
  $(".pricingpage").find(".showItem").removeClass("showItem").addClass("hideItem");
  $(".subscription").removeClass("hideItem").addClass("showItem");
});
/*slider*/
const settings={
  fill: '#f8654a',
  background: '#f5f8fa'
}
const sliders = document.querySelectorAll('.range-slider');
  Array.prototype.forEach.call(sliders,(slider)=>{
  slider.querySelector('input').addEventListener('input', (event)=>{
      applyFill(slider.querySelector('input'));
      var numberOfUsers = event.target.value;
      $('.output').each(function(){ 
        var selectedPlan = $(this).attr('plan');
        var numberOfUsers = event.target.value;
        var isPricingInUSD = true;
        $(".noOfUsers").text(numberOfUsers);
        $(".numberOfUserss").attr("users", numberOfUsers);
        $(this).html("<span>" + `${getCurrencySymbol(isPricingInUSD)}` + "</span>" + getTotalPrice(selectedPlan, isPricingInUSD, numberOfUsers ));
        
      });
      $(".numberOfUserss").each(function(){
          var numberOfUsers = event.target.value;
          $(this).text(numberOfUsers);
      });
      if(numberOfUsers == 1000){
        $(".userLimit").show();
      }
      else {
        $(".userLimit").hide();
      }

  });
  applyFill(slider.querySelector('input'));  
});


$("#selectedNumberOfWeeks").change(function(plan,  usd, numberOfUsers) {
    var selectedNumberOfWeeks = $(this). find("option:selected"). val();
    var numberOfUsers = $(".numberOfUserss").attr("users");
    var selectedPlan = 1 ;
    var isPricingInUSD = true;
    getTotalPrice(selectedPlan, isPricingInUSD, numberOfUsers );
    $(".onetimeBox .output").html("<span>" + `${getCurrencySymbol(isPricingInUSD)}` + "</span>" + getTotalPrice(selectedPlan, isPricingInUSD, numberOfUsers ));
        
});
function getTotalPrice(plan,  usd, numberOfUsers) {
  const cost = getCost(plan, usd, numberOfUsers)
  if (cost != null) {
    return `${cost}`
  } else {
    return "Contact us"
  }
}

function getCost(plan, usd, numberOfUsers) {
  return getPricePerUserPerWeek(plan, usd) * numberOfUsers * getWeeklyOrMonthlyFactor(plan)
}
/* get price of plan*/
function getPricePerUserPerWeek(plan, usd) {
  if (plan == 1) {
    if (usd) { return 1 } else { return 10  }
  } else if (plan == 2) {
    if (usd) { return 1 } else { return 10 }
  } else if (plan == 3) {
    if (usd) { return 1.25 } else { return 15 }
  } else {
    return 0
  }
}
function getWeeklyOrMonthlyFactor(plan) {
  var selectedNumberOfWeeks = $("#selectedNumberOfWeeks option:selected").val();
  if (plan == 1) { return selectedNumberOfWeeks } else { return 4 }
}

/*
0 = Free
1 = One time challenge
2 = Premium
3 = Enterprise
 */



/*Per employee Price*/
function getPlanRate(plan, isPricingInUSD) {
  switch (plan) {
  case '0':
    return "100 users"
  default:
    var rateMultiplier = 1
    if (plan != 1) {
      rateMultiplier = 4
    }
    const rate = `${getCurrencySymbol(isPricingInUSD)}` + `${getPricePerUserPerWeek(plan, isPricingInUSD)*rateMultiplier} per employee`
    if (plan == 1) { return rate + "/week" } else { return rate }
  }
}



function getCurrencySymbol(usd) {
  if (usd) { return "$" } else { return "₹" }
}
function getPlanName(plan) {
  switch (plan) {
  case 0:
    return "FREE"
  case 1:
    return "One Time Challenge"
  case 2:
    return "Premium"
  case 3:
    return "Enterprise"
  }
}
/*color of slider */
function applyFill(slider) {
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}

/*Mobile View */
$("#subscriptionPlan .indItems.tabsViewMobile div").click(function(){
 
  var className = $(this).attr('attr');
  $("#subscriptionPlan .tableSubscription td").hide();
$("#subscriptionPlan .indItems div, #subscriptionPlan .tableSubscription div").removeClass("active");
   $("#subscriptionPlan .tableSubscription td:first-child").show();
  console.log($("#subscriptionPlan .tableSubscription" + " ."+className+"Plan").show());
  $("#subscriptionPlan .tableSubscription" + " ."+className+"Plan").show();

  
  $(this).addClass("active");
  $(".mobileView").find(".active").removeClass("active");
  $(".mobileView" + "."+className+"Plan").addClass("active");

});

/*tabs*/
$('.tabValues li').on('click', function(){
  var currentItem = '.'+ $(this).attr('attr');
  $('.tabValues').find(".active").removeClass('active');
  $(this).addClass('active');
  $(".pricingpage").find(".showItem").removeClass("showItem").addClass("hideItem");
  $(currentItem).removeClass("hideItem").addClass("showItem");
});
/*
0 = Free
1 = One time challenge
2 = Premium
3 = Enterprise


/*calculation 

1,200 = 200 * 4 = 400 (for plan 1, 200 User 2 weeks)
1,200 = 200 * 4 = 800 (for plan 1, 200 User 4 weeks)
1,200 = 200 * 4 = 1600 (for plan 1, 200 User 8 weeks)
1,200 = 200 * 4 = 2400 (for plan 1, 200 User 16 weeks)
2,200 = 1 * 200 = 200 * 4 = 800(for plan 2, 200 User)
3,200 = 1.25 *200=250 *4 = 1000(plan 3 200 users)


1,300 = 300 * 2 = 600 (plan 1 , 300 users, 2 weeks)
1,300 = 300 * 8 = 2400 (plan 1 , 300 users. 4 weks)
2,300 =1 * 300 = 300 * 4= 1200 (plan 2 , 300 users)
3,300 = 1.25 *300 =375*4=1500 ((plan 3 , 300 users))




 */
   
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

/* Lazing loading starts */
var lozadScript = function (){
    (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.lozad = factory());
}(this, (function () { 'use strict';

  /**
   * Detect IE browser
   * @const {boolean}
   * @private
   */
  var isIE = typeof document !== 'undefined' && document.documentMode;

  var defaultConfig = {
    rootMargin: '0px',
    threshold: 0,
    load: function load(element) {
      if (element.nodeName.toLowerCase() === 'picture') {
        var img = element.querySelector('img');
        var append = false;

        if (img === null) {
          img = document.createElement('img');
          append = true;
        }

        if (isIE && element.getAttribute('data-iesrc')) {
          img.src = element.getAttribute('data-iesrc');
        }

        if (element.getAttribute('data-alt')) {
          img.alt = element.getAttribute('data-alt');
        }

        if (append) {
          element.append(img);
        }
      }

      if (element.nodeName.toLowerCase() === 'video' && !element.getAttribute('data-src')) {
        if (element.children) {
          var childs = element.children;
          var childSrc = void 0;
          for (var i = 0; i <= childs.length - 1; i++) {
            childSrc = childs[i].getAttribute('data-src');
            if (childSrc) {
              childs[i].src = childSrc;
            }
          }

          element.load();
        }
      }

      if (element.getAttribute('data-poster')) {
        element.poster = element.getAttribute('data-poster');
      }

      if (element.getAttribute('data-src')) {
        element.src = element.getAttribute('data-src');
      }

      if (element.getAttribute('data-srcset')) {
        element.setAttribute('srcset', element.getAttribute('data-srcset'));
      }

      var backgroundImageDelimiter = ',';
      if (element.getAttribute('data-background-delimiter')) {
        backgroundImageDelimiter = element.getAttribute('data-background-delimiter');
      }

      if (element.getAttribute('data-background-image')) {
        element.style.backgroundImage = 'url(\'' + element.getAttribute('data-background-image').split(backgroundImageDelimiter).join('\'),url(\'') + '\')';
      } else if (element.getAttribute('data-background-image-set')) {
        var imageSetLinks = element.getAttribute('data-background-image-set').split(backgroundImageDelimiter);
        var firstUrlLink = imageSetLinks[0].substr(0, imageSetLinks[0].indexOf(' ')) || imageSetLinks[0]; // Substring before ... 1x
        firstUrlLink = firstUrlLink.indexOf('url(') === -1 ? 'url(' + firstUrlLink + ')' : firstUrlLink;
        if (imageSetLinks.length === 1) {
          element.style.backgroundImage = firstUrlLink;
        } else {
          element.setAttribute('style', (element.getAttribute('style') || '') + ('background-image: ' + firstUrlLink + '; background-image: -webkit-image-set(' + imageSetLinks + '); background-image: image-set(' + imageSetLinks + ')'));
        }
      }

      if (element.getAttribute('data-toggle-class')) {
        element.classList.toggle(element.getAttribute('data-toggle-class'));
      }
    },
    loaded: function loaded() {}
  };

  function markAsLoaded(element) {
    element.setAttribute('data-loaded', true);
  }

  function preLoad(element) {
    if (element.getAttribute('data-placeholder-background')) {
      element.style.background = element.getAttribute('data-placeholder-background');
    }
  }

  var isLoaded = function isLoaded(element) {
    return element.getAttribute('data-loaded') === 'true';
  };

  var onIntersection = function onIntersection(load, loaded) {
    return function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0 || entry.isIntersecting) {
          observer.unobserve(entry.target);

          if (!isLoaded(entry.target)) {
            load(entry.target);
            markAsLoaded(entry.target);
            loaded(entry.target);
          }
        }
      });
    };
  };

  var getElements = function getElements(selector) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    if (selector instanceof Element) {
      return [selector];
    }

    if (selector instanceof NodeList) {
      return selector;
    }

    return root.querySelectorAll(selector);
  };

  function lozad () {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.lozad';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _Object$assign = Object.assign({}, defaultConfig, options),
        root = _Object$assign.root,
        rootMargin = _Object$assign.rootMargin,
        threshold = _Object$assign.threshold,
        load = _Object$assign.load,
        loaded = _Object$assign.loaded;

    var observer = void 0;

    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      observer = new IntersectionObserver(onIntersection(load, loaded), {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold
      });
    }

    var elements = getElements(selector, root);
    for (var i = 0; i < elements.length; i++) {
      preLoad(elements[i]);
    }

    return {
      observe: function observe() {
        var elements = getElements(selector, root);

        for (var _i = 0; _i < elements.length; _i++) {
          if (isLoaded(elements[_i])) {
            continue;
          }

          if (observer) {
            observer.observe(elements[_i]);
            continue;
          }

          load(elements[_i]);
          markAsLoaded(elements[_i]);
          loaded(elements[_i]);
        }
      },
      triggerLoad: function triggerLoad(element) {
        if (isLoaded(element)) {
          return;
        }

        load(element);
        markAsLoaded(element);
        loaded(element);
      },

      observer: observer
    };
  }

  return lozad;
  const observer = lozad();
  observer.observe();

})));
   
};
/* Lazing loading ends */
console.log("Script loaded")


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
    lozadScript();
};
