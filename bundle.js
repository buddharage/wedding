!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n/*============================== \n\t- Template Name: FOREVER - Responsive HTML Wedding Template\n\t- Author: DoubleEight\n\t- Version: 1.0\n\t- Website: www.dethemes.com\n================================= */\n\n/*---------------------- \n\tScript Guide\n------------------------\n01. BROWSER AGENT FUNCTION\n\t01.1 Check CHROME (Mobile / Tablet)\n\t01.2 Check IOS\n\t01.3 Check FIREFOX\n\t01.4 Check IE (< IE10)\n\t01.5 Check IE11\n\t01.6 Check IE11 (Not Windows Phone)\n\t01.7 Check IE10\n\t01.8 Check IE9\n\t01.9 Check Safari/Chrome Mac\n\t\n02. FULLSCREEN CLASS\n\n03. HIDDEN ALL ANIMATION CLASS\n\n04. PACE PRELOADER\n\t04.1 Gallery - Masonry\n\t04.2 Nav Header Position (Mobile / Tablet)\n\t04.3 Waypoint Sticky Navbar\n\t\t04.3.1 Top Bar\n\t\t04.3.2 Bottom Bar\n\t04.4 Waypoint Sticky Menu Icon (Sidebar Version)\n\t04.5 Waypoint Animate CSS\n\t04.6 Stellar Parallax\n\t\n05. PRELOADER HEART ANIMATION (IE10 / 11)\n\n06. BIND TOUCH FOR PHOTO ITEM (Mobile / Tablet)\n\n07. COUNTDOWN\n\n08. MOBILE MENU\n\n09. DOUBLE TAP DROP DOWN MENU\n\n10. OWL CAROUSEL\n\t10.1 OWL CAROUSEL - GIFT REGISTRY\n\t10.2 OWL CAROUSEL - MORE EVENTS (ONEPAGE)\n\t10.3 OWL CAROUSEL - REGISTRY LOGO (ONEPAGE)\n\n11. RSVP\n\t11.1 Custom Checkbox\n\t11.2 Custom Radio\n\n12. SMOOTH SCROLL\n\n13. MAGNIFIC POPUP\n\t13.1 Magnific Zoom\n\t13.2 Magnific Zoom Gallery\n\t13.3 Magnific Ajax\n\t\n14. DISALBE TRANSITION (Mobile / Tablet)\n\n15. AUDIO\n\t15.1 Reset Mute Control (Chrome and Safari Mobile)\n\t15.2 On toggle mute button\n\n16. VIDEO CONTROL\n\t16.1 Hide Video Control (Mobile / Tablet)\n\t16.2 Play Pause Video\n\t\n*/\n\n$(document).ready(function () {\n\n\t// 01. BROWSER AGENT FUNCTION\t\t\n\t//==================================================================================\n\n\t// 01.1 Check Chrome (Mobile / Tablet)\n\t//----------------------------------------------------------------------------------\n\tvar isChromeMobile = function isChromeMobile() {\n\t\tif (device.tablet() || device.mobile()) {\n\t\t\tif (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0) {\n\t\t\t\treturn 1;\n\t\t\t}\n\t\t}\n\t};\n\n\t// 01.2 Check IOS\n\t//----------------------------------------------------------------------------------\n\tvar isIOS = function isIOS() {\n\t\tif (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0) {\n\t\t\treturn 1;\n\t\t}\n\t};\n\n\t// 01.3 Check FIREFOX \n\t//----------------------------------------------------------------------------------\n\tvar is_firefox = function is_firefox() {\n\t\tif (navigator.userAgent.toLowerCase().indexOf(\'firefox\') > -1) {\n\t\t\treturn 1;\n\t\t}\n\t};\n\n\t// 01.4 Check IE (< IE10)\n\t//----------------------------------------------------------------------------------\n\tvar isIE = function isIE() {\n\t\tif (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident\\/7\\./)) {\n\t\t\treturn 1;\n\t\t}\n\t};\n\n\t// 01.5 Check IE11\n\t//----------------------------------------------------------------------------------\n\tvar isIE11 = function isIE11() {\n\t\tif (!!navigator.userAgent.match(/Trident\\/7\\./)) {\n\t\t\treturn 1;\n\t\t}\n\t};\n\n\t// 01.6 Check IE11 (Not Windows Phone)\n\t///----------------------------------------------------------------------------------\n\tvar isIE11desktop = function isIE11desktop() {\n\t\tif (!!navigator.userAgent.match(/Trident\\/7\\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {\n\t\t\treturn 1;\n\t\t}\n\t};\n\n\t// 01.7 Check IE10\n\t//----------------------------------------------------------------------------------\n\tvar isIE10 = function isIE10() {\n\t\tif (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {\n\t\t\treturn 1;\n\t\t}\n\t};\n\n\t// 01.8 Check IE9\n\t//----------------------------------------------------------------------------------\n\tvar isIE9 = function isIE9() {\n\t\tif (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {\n\t\t\treturn 1;\n\t\t}\n\t};\n\n\t// 01.9 Check Safari/Chrome Mac\n\t//----------------------------------------------------------------------------------\n\tvar isSafari = function isSafari() {\n\t\tif (navigator.userAgent.indexOf(\'Safari\') != -1 && navigator.userAgent.indexOf(\'Mac\') != -1) {\n\t\t\treturn 1;\n\t\t}\n\t};\n\n\t// 02. FULLSCREEN CLASS\t\t\n\t//==================================================================================\n\tvar fullscreen = function fullscreen() {\n\t\tvar fheight = $(window).height();\n\t\t$(\'.fullscreen\').css("height", fheight);\n\t};\n\n\t//Execute on load\n\tfullscreen();\n\n\t//Execute on window resize\n\t$(window).resize(function () {\n\t\tfullscreen();\n\t});\n\n\t// 03. HIDDEN ALL ANIMATION CLASS\n\t//==================================================================================\n\t// Waypoint will animate it later (04.5 Waypoint Animate CSS)\n\tif (!device.tablet() && !device.mobile() && !isIE9()) {\n\t\t$(\'.animation\').css({\n\t\t\tvisibility: \'hidden\'\n\t\t});\n\t}\n\n\t// 04. PACE PRELOADER\n\t//==================================================================================\n\tPace.on(\'done\', function () {\n\t\t$(\'#preloader\').hide();\n\t});\n\n\tPace.on(\'hide\', function () {\n\n\t\t// 04.2 Nav Header Position (Mobile)\n\t\t//------------------------------------------------------------------------------\n\t\tif (device.tablet() || device.mobile()) {\n\t\t\tif ($("#nav-bar").hasClass("sticky-nav")) {\n\t\t\t\t$("#nav-header").css("position", "relative");\n\t\t\t}\n\t\t}\n\n\t\t// 04.3 Waypoint Sticky Navbar\n\t\t//------------------------------------------------------------------------------\t\t\n\t\tif ($("#nav-bar").hasClass("sticky-nav")) {\n\n\t\t\t// 04.3.1 Top Bar\n\t\t\tif ($("#nav-bar").hasClass("top-bar")) {\n\n\t\t\t\tvar nav_header_waypoint = $(\'#nav-header\').waypoint(function (direction) {\n\n\t\t\t\t\tif (direction === \'down\') {\n\t\t\t\t\t\tif (!device.tablet() && !device.mobile()) {\n\t\t\t\t\t\t\t$("#nav-bar").addClass("stick-it animated fadeInDownBig");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t$("#nav-bar").addClass("stick-it");\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\t$("#nav-bar").removeClass("stick-it animated fadeInDownBig");\n\t\t\t\t\t}\n\t\t\t\t}, {\n\t\t\t\t\toffset: \'-100%\'\n\t\t\t\t});\n\t\t\t}\n\n\t\t\t// 04.3.2 Bottom Bar\n\t\t\telse if ($("#nav-bar").hasClass("bottom-bar")) {\n\n\t\t\t\t\tvar waypoints = $(\'#nav-header\').waypoint(function (direction) {\n\n\t\t\t\t\t\tif (direction === \'down\') {\n\t\t\t\t\t\t\tif (!device.tablet() && !device.mobile()) {\n\t\t\t\t\t\t\t\t$("#nav-bar").addClass("stick-it animated fadeInDownBig");\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t$("#nav-bar").addClass("stick-it");\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else if (direction === \'up\') {\n\t\t\t\t\t\t\t$("#nav-bar").removeClass("stick-it animated fadeInDownBig");\n\t\t\t\t\t\t}\n\t\t\t\t\t}, {\n\t\t\t\t\t\toffset: \'-145px\'\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t}\n\n\t\t// 04.4 Waypoint Sticky Menu Icon (Sidebar Version)\n\t\t//------------------------------------------------------------------------------\n\n\t\tvar sticky_menuicon_waypoint = $(\'#menu-icon\').waypoint(function (direction) {\n\t\t\tif (direction === \'down\') {\n\t\t\t\t$(\'#sticky-menuicon\').show();\n\t\t\t} else {\n\t\t\t\t$(\'#sticky-menuicon\').hide();\n\t\t\t}\n\t\t}, {\n\t\t\toffset: \'-100%\'\n\t\t});\n\n\t\t// 04.5 Waypoint Animate CSS\n\t\t//------------------------------------------------------------------------------\n\t\tif (!device.tablet() && !device.mobile() && !isIE9()) {\n\t\t\t$(\'.animation\').each(function () {\n\t\t\t\tvar _this = this;\n\t\t\t\tvar animation_waypoint = new Waypoint({\n\t\t\t\t\telement: _this,\n\t\t\t\t\thandler: function handler(direction) {\n\t\t\t\t\t\t$(this.element).css({ visibility: \'visible\' });\n\t\t\t\t\t\t$(this.element).addClass(\'animated\');\n\t\t\t\t\t},\n\t\t\t\t\toffset: \'90%\'\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\n\t\t// 04.6 Stellar Parallax\n\t\t//------------------------------------------------------------------------------\n\t\tif (!device.tablet() && !device.mobile() && !isIE9() && !isIE10() && !isSafari()) {\n\t\t\t$(".image-divider").css("background-attachment", "fixed");\n\t\t\t$(window).stellar({\n\t\t\t\thorizontalScrolling: false,\n\t\t\t\tresponsive: true\n\t\t\t});\n\t\t}\n\t}); // END of Pace on Hide\n\n\n\t// 05. PRELOADER HEART ANIMATION (IE10 / 11)\n\t//==================================================================================\t\n\tif (isIE10() || isIE11()) {\n\t\t$(".heart-animation").css("letter-spacing", "normal");\n\t}\n\n\t// 05. IMAGE DIVIDER (Mobile / Tablet)\n\t//==================================================================================\n\t/*if (device.tablet() || device.mobile() || isIE9() || isIE10() ||isSafari()) {\n \t$(".image-divider").addClass("mobile");\n }*/\n\n\t// 06. BIND TOUCH FOR PHOTO ITEM (Mobile / Tablet)\n\t//==================================================================================\n\t$(\'.photo-item\').bind(\'touchstart touchend\', function (e) {});\n\n\t// 07. COUNTDOWN\n\t//===================================================================================\n\tvar theday = new Date();\n\ttheday = new Date(2017, 6, 3);\n\t$(\'#countdown\').countdown({ until: theday, format: \'WDHMS\' });\n\t$(\'#countdown\').countdown($.countdown.regionalOptions[\'custom-label\']);\n\n\t$(\'#date-countdown\').countdown({ until: theday, format: \'WDHMS\' });\n\n\t// 08. MOBILE MENU\n\t//==================================================================================\n\t$("#mobile-nav").click(function (e) {\n\t\te.preventDefault();\n\t\t$("#nav-menu").toggleClass("open");\n\t});\n\n\t// Hide Menu After Click It. Will be used on onepage version. \n\t$("#nav-menu li a").click(function () {\n\t\tif ($(this).attr("href") !== "#") {\n\t\t\t$("#nav-menu").removeClass("open");\n\t\t}\n\t});\n\n\t// 10. OWL CAROUSEL\n\t//==================================================================================\n\n\t// 10.1 OWL CAROUSEL - GIFT REGISTRY\n\t//------------------------------------------------------------------------------\n\tif ($("#gift-registry").length) {\n\t\t$("#gift-registry").owlCarousel({\n\t\t\titems: 3,\n\t\t\tautoPlay: 2000,\n\t\t\tstopOnHover: true,\n\t\t\tpagination: true\n\t\t});\n\n\t\tif (device.tablet() || device.mobile()) {\n\t\t\tvar owl_gift = $("#gift-registry").data(\'owlCarousel\');\n\t\t\towl_gift.stop();\n\t\t}\n\t}\n\n\t// 10.2 OWL CAROUSEL - MORE EVENTS (ONEPAGE)\n\t//------------------------------------------------------------------------------\n\tif ($("#events-carousel").length) {\n\t\t$("#events-carousel").owlCarousel({\n\t\t\titems: 2,\n\t\t\titemsDesktopSmall: [979, 2],\n\t\t\tautoPlay: 2000,\n\t\t\tstopOnHover: true,\n\t\t\tpagination: true,\n\t\t\tnavigation: false\n\t\t});\n\n\t\tif (device.tablet() || device.mobile()) {\n\t\t\tvar owl_events = $("#events-carousel").data(\'owlCarousel\');\n\t\t\towl_events.stop();\n\t\t}\n\t}\n\n\t// 10.3 OWL CAROUSEL - REGISTRY LOGO (ONEPAGE)\n\t//------------------------------------------------------------------------------\n\tif ($("#registry-logo").length) {\n\t\t$("#registry-logo").owlCarousel({\n\t\t\titems: 3,\n\t\t\tautoPlay: 2000,\n\t\t\tstopOnHover: true,\n\t\t\tpagination: false,\n\t\t\tnavigation: false\n\t\t});\n\n\t\tif (device.tablet() || device.mobile()) {\n\t\t\tvar owl_logo = $("#registry-logo").data(\'owlCarousel\');\n\t\t\towl_logo.stop();\n\t\t}\n\t}\n\n\t// 14. DISALBE TRANSITION (Mobile / Tablet)\n\t//==================================================================================\n\tif (device.tablet() || device.mobile()) {\n\t\tif (!isIE11desktop()) {\n\t\t\t// de-icon\n\t\t\t$(".de-icon, .de-icon i").css("transition", "none");\n\n\t\t\t// Photo-item\t\t \n\t\t\t$(".photo-item img.hover-animation").css("transition", "none");\n\t\t\t$(".photo-item .layer.hover-animation").css("transition", "none");\n\t\t}\n\t}\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./index.js?')}]);