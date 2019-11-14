jQuery(window).on("load", function() {
    $(".box_slide").slick({
        slideshow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".slideshow"
    }), $(".slideshow").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: !1,
        centerMode: !0,
        asNavFor: ".box_slide",
        infinite: !0,
        prevArrow: "<button value='previous' aria-label='previous arrow' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button value='next' aria-label='next arrow' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
}), function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function(d) {
    "use strict";
    var s, r = window.Slick || {};
    s = 0, (r = function(i, e) {
        var t, o = this;
        o.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: d(i),
            appendDots: d(i),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(i, e) {
                return d('<button type="button" data-role="none" role="button" tabindex="0" />').text(e + 1);
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, o.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, d.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, 
        o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, 
        o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, 
        o.rowCount = 1, o.shouldClick = !0, o.$slider = d(i), o.$slidesCache = null, o.transformType = null, 
        o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, 
        o.windowTimer = null, t = d(i).data("slick") || {}, o.options = d.extend({}, o.defaults, e, t), 
        o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", 
        o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", 
        o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = d.proxy(o.autoPlay, o), 
        o.autoPlayClear = d.proxy(o.autoPlayClear, o), o.autoPlayIterator = d.proxy(o.autoPlayIterator, o), 
        o.changeSlide = d.proxy(o.changeSlide, o), o.clickHandler = d.proxy(o.clickHandler, o), 
        o.selectHandler = d.proxy(o.selectHandler, o), o.setPosition = d.proxy(o.setPosition, o), 
        o.swipeHandler = d.proxy(o.swipeHandler, o), o.dragHandler = d.proxy(o.dragHandler, o), 
        o.keyHandler = d.proxy(o.keyHandler, o), o.instanceUid = s++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
        o.registerBreakpoints(), o.init(!0);
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }, r.prototype.addSlide = r.prototype.slickAdd = function(i, e, t) {
        var o = this;
        if ("boolean" == typeof e) t = e, e = null; else if (e < 0 || e >= o.slideCount) return !1;
        o.unload(), "number" == typeof e ? 0 === e && 0 === o.$slides.length ? d(i).appendTo(o.$slideTrack) : t ? d(i).insertBefore(o.$slides.eq(e)) : d(i).insertAfter(o.$slides.eq(e)) : !0 === t ? d(i).prependTo(o.$slideTrack) : d(i).appendTo(o.$slideTrack), 
        o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), 
        o.$slideTrack.append(o.$slides), o.$slides.each(function(i, e) {
            d(e).attr("data-slick-index", i);
        }), o.$slidesCache = o.$slides, o.reinit();
    }, r.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed);
        }
    }, r.prototype.animateSlide = function(i, e) {
        var t = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (i = -i), 
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: i
        }, o.options.speed, o.options.easing, e) : o.$slideTrack.animate({
            top: i
        }, o.options.speed, o.options.easing, e) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), 
        d({
            animStart: o.currentLeft
        }).animate({
            animStart: i
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(i) {
                i = Math.ceil(i), !1 === o.options.vertical ? t[o.animType] = "translate(" + i + "px, 0px)" : t[o.animType] = "translate(0px," + i + "px)", 
                o.$slideTrack.css(t);
            },
            complete: function() {
                e && e.call();
            }
        })) : (o.applyTransition(), i = Math.ceil(i), !1 === o.options.vertical ? t[o.animType] = "translate3d(" + i + "px, 0px, 0px)" : t[o.animType] = "translate3d(0px," + i + "px, 0px)", 
        o.$slideTrack.css(t), e && setTimeout(function() {
            o.disableTransition(), e.call();
        }, o.options.speed));
    }, r.prototype.getNavTarget = function() {
        var i = this.options.asNavFor;
        return i && null !== i && (i = d(i).not(this.$slider)), i;
    }, r.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = d(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0);
        });
    }, r.prototype.applyTransition = function(i) {
        var e = this, t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, 
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }, r.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }, r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }, r.prototype.autoPlayIterator = function() {
        var i = this, e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, 
        i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
    }, r.prototype.buildArrows = function() {
        var i = this;
        !0 === i.options.arrows && (i.$prevArrow = d(i.options.prevArrow).addClass("slick-arrow"), 
        i.$nextArrow = d(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
        i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), 
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), 
        !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }, r.prototype.buildDots = function() {
        var i, e, t = this;
        if (!0 === t.options.dots && t.slideCount > t.options.slidesToShow) {
            for (t.$slider.addClass("slick-dotted"), e = d("<ul />").addClass(t.options.dotsClass), 
            i = 0; i <= t.getDotCount(); i += 1) e.append(d("<li />").append(t.options.customPaging.call(this, t, i)));
            t.$dots = e.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    }, r.prototype.buildOut = function() {
        var i = this;
        i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
        i.slideCount = i.$slides.length, i.$slides.each(function(i, e) {
            d(e).attr("data-slick-index", i).data("originalStyling", d(e).attr("style") || "");
        }), i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? d('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), 
        i.$list = i.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), 
        i.$slideTrack.css("opacity", 0), !0 !== i.options.centerMode && !0 !== i.options.swipeToSlide || (i.options.slidesToScroll = 1), 
        d("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), 
        i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), 
        !0 === i.options.draggable && i.$list.addClass("draggable");
    }, r.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), 1 < l.options.rows) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var a = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var d = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && d.appendChild(n.get(c));
                    }
                    a.appendChild(d);
                }
                o.appendChild(a);
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, r.prototype.checkResponsive = function(i, e) {
        var t, o, s, n = this, r = !1, l = n.$slider.width(), a = window.innerWidth || d(window).width();
        if ("window" === n.respondTo ? s = a : "slider" === n.respondTo ? s = l : "min" === n.respondTo && (s = Math.min(a, l)), 
        n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
            for (t in o = null, n.breakpoints) n.breakpoints.hasOwnProperty(t) && (!1 === n.originalSettings.mobileFirst ? s < n.breakpoints[t] && (o = n.breakpoints[t]) : s > n.breakpoints[t] && (o = n.breakpoints[t]));
            null !== o ? null !== n.activeBreakpoint && o === n.activeBreakpoint && !e || (n.activeBreakpoint = o, 
            "unslick" === n.breakpointSettings[o] ? n.unslick(o) : (n.options = d.extend({}, n.originalSettings, n.breakpointSettings[o]), 
            !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i)), r = o) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, 
            n.options = n.originalSettings, !0 === i && (n.currentSlide = n.options.initialSlide), 
            n.refresh(i), r = o), i || !1 === r || n.$slider.trigger("breakpoint", [ n, r ]);
        }
    }, r.prototype.changeSlide = function(i, e) {
        var t, o, s = this, n = d(i.currentTarget);
        switch (n.is("a") && i.preventDefault(), n.is("li") || (n = n.closest("li")), t = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, 
        i.data.message) {
          case "previous":
            o = 0 == t ? s.options.slidesToScroll : s.options.slidesToShow - t, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, e);
            break;

          case "next":
            o = 0 == t ? s.options.slidesToScroll : t, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, e);
            break;

          case "index":
            var r = 0 === i.data.index ? 0 : i.data.index || n.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(r), !1, e), n.children().trigger("focus");
            break;

          default:
            return;
        }
    }, r.prototype.checkNavigable = function(i) {
        var e, t;
        if (t = 0, i > (e = this.getNavigableIndexes())[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
            if (i < e[o]) {
                i = t;
                break;
            }
            t = e[o];
        }
        return i;
    }, r.prototype.cleanUpEvents = function() {
        var i = this;
        i.options.dots && null !== i.$dots && d("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", d.proxy(i.interrupt, i, !0)).off("mouseleave.slick", d.proxy(i.interrupt, i, !1)), 
        i.$slider.off("focus.slick blur.slick"), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), 
        i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide)), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), 
        i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), 
        i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), 
        d(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler), 
        !0 === i.options.focusOnSelect && d(i.$slideTrack).children().off("click.slick", i.selectHandler), 
        d(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), 
        d(window).off("resize.slick.slick-" + i.instanceUid, i.resize), d("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), 
        d(window).off("load.slick.slick-" + i.instanceUid, i.setPosition), d(document).off("ready.slick.slick-" + i.instanceUid, i.setPosition);
    }, r.prototype.cleanUpSlideEvents = function() {
        var i = this;
        i.$list.off("mouseenter.slick", d.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", d.proxy(i.interrupt, i, !1));
    }, r.prototype.cleanUpRows = function() {
        var i;
        1 < this.options.rows && ((i = this.$slides.children().children()).removeAttr("style"), 
        this.$slider.empty().append(i));
    }, r.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }, r.prototype.destroy = function(i) {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), d(".slick-cloned", e.$slider).detach(), 
        e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            d(this).attr("style", d(this).data("originalStyling"));
        }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), 
        e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), 
        e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), 
        e.unslicked = !0, i || e.$slider.trigger("destroy", [ e ]);
    }, r.prototype.disableTransition = function(i) {
        var e = {};
        e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(i).css(e);
    }, r.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call();
        }, t.options.speed));
    }, r.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }));
    }, r.prototype.filterSlides = r.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), 
        e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
    }, r.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var e = d(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = e.is(":focus"), t.autoPlay());
            }, 0);
        });
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }, r.prototype.getDotCount = function() {
        var i = this, e = 0, t = 0, o = 0;
        if (!0 === i.options.infinite) for (;e < i.slideCount; ) ++o, e = t + i.options.slidesToScroll, 
        t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (;e < i.slideCount; ) ++o, 
        e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1;
    }, r.prototype.getLeft = function(i) {
        var e, t, o, s = this, n = 0;
        return s.slideOffset = 0, t = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, 
        n = t * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && i + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (n = i > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (i - s.slideCount)) * s.slideWidth * -1, 
        (s.options.slidesToShow - (i - s.slideCount)) * t * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, 
        s.slideCount % s.options.slidesToScroll * t * -1))) : i + s.options.slidesToShow > s.slideCount && (s.slideOffset = (i + s.options.slidesToShow - s.slideCount) * s.slideWidth, 
        n = (i + s.options.slidesToShow - s.slideCount) * t), s.slideCount <= s.options.slidesToShow && (n = s.slideOffset = 0), 
        !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, 
        s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? i * s.slideWidth * -1 + s.slideOffset : i * t * -1 + n, 
        !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow), 
        e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, 
        !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow + 1), 
        e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, 
        e += (s.$list.width() - o.outerWidth()) / 2)), e;
    }, r.prototype.getOption = r.prototype.slickGetOption = function(i) {
        return this.options[i];
    }, r.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (i = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll, 
        o = -1 * e.options.slidesToScroll, 2 * e.slideCount); t < i; ) s.push(t), t = o + e.options.slidesToScroll, 
        o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s;
    }, r.prototype.getSlick = function() {
        return this;
    }, r.prototype.getSlideCount = function() {
        var t, o, s = this;
        return o = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, 
        !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(i, e) {
            if (e.offsetLeft - o + d(e).outerWidth() / 2 > -1 * s.swipeLeft) return t = e, !1;
        }), Math.abs(d(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll;
    }, r.prototype.goTo = r.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e);
    }, r.prototype.init = function(i) {
        var e = this;
        d(e.$slider).hasClass("slick-initialized") || (d(e.$slider).addClass("slick-initialized"), 
        e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), 
        e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), i && e.$slider.trigger("init", [ e ]), 
        !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, 
        e.autoPlay());
    }, r.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            d(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            });
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
            d(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            });
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), 
        e.activateADA();
    }, r.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide));
    }, r.prototype.initDotEvents = function() {
        var i = this;
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && d("li", i.$dots).on("click.slick", {
            message: "index"
        }, i.changeSlide), !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && d("li", i.$dots).on("mouseenter.slick", d.proxy(i.interrupt, i, !0)).on("mouseleave.slick", d.proxy(i.interrupt, i, !1));
    }, r.prototype.initSlideEvents = function() {
        var i = this;
        i.options.pauseOnHover && (i.$list.on("mouseenter.slick", d.proxy(i.interrupt, i, !0)), 
        i.$list.on("mouseleave.slick", d.proxy(i.interrupt, i, !1)));
    }, r.prototype.initializeEvents = function() {
        var i = this;
        i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), d(document).on(i.visibilityChange, d.proxy(i.visibility, i)), 
        !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && d(i.$slideTrack).children().on("click.slick", i.selectHandler), 
        d(window).on("orientationchange.slick.slick-" + i.instanceUid, d.proxy(i.orientationChange, i)), 
        d(window).on("resize.slick.slick-" + i.instanceUid, d.proxy(i.resize, i)), d("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), 
        d(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), d(document).on("ready.slick.slick-" + i.instanceUid, i.setPosition);
    }, r.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), 
        i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }, r.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }));
    }, r.prototype.lazyLoad = function() {
        var i, e, o = this;
        function t(i) {
            d("img[data-lazy]", i).each(function() {
                var i = d(this), e = d(this).attr("data-lazy"), t = document.createElement("img");
                t.onload = function() {
                    i.animate({
                        opacity: 0
                    }, 100, function() {
                        i.attr("src", e).animate({
                            opacity: 1
                        }, 200, function() {
                            i.removeAttr("data-lazy").removeClass("slick-loading");
                        }), o.$slider.trigger("lazyLoaded", [ o, i, e ]);
                    });
                }, t.onerror = function() {
                    i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                    o.$slider.trigger("lazyLoadError", [ o, i, e ]);
                }, t.src = e;
            });
        }
        !0 === o.options.centerMode ? e = !0 === o.options.infinite ? (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), 
        o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, 
        e = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (0 < i && i--, 
        e <= o.slideCount && e++)), t(o.$slider.find(".slick-slide").slice(i, e)), o.slideCount <= o.options.slidesToShow ? t(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && t(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
    }, r.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }, r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, r.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition();
    }, r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0;
    }, r.prototype.play = r.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
    }, r.prototype.postSlide = function(i) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [ e, i ]), e.animating = !1, e.setPosition(), 
        e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA());
    }, r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, r.prototype.preventDefault = function(i) {
        i.preventDefault();
    }, r.prototype.progressiveLazyLoad = function(i) {
        i = i || 1;
        var e, t, o, s = this, n = d("img[data-lazy]", s.$slider);
        n.length ? (e = n.first(), t = e.attr("data-lazy"), (o = document.createElement("img")).onload = function() {
            e.attr("src", t).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), 
            s.$slider.trigger("lazyLoaded", [ s, e, t ]), s.progressiveLazyLoad();
        }, o.onerror = function() {
            i < 3 ? setTimeout(function() {
                s.progressiveLazyLoad(i + 1);
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
            s.$slider.trigger("lazyLoadError", [ s, e, t ]), s.progressiveLazyLoad());
        }, o.src = t) : s.$slider.trigger("allImagesLoaded", [ s ]);
    }, r.prototype.refresh = function(i) {
        var e, t, o = this;
        t = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > t && (o.currentSlide = t), 
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), e = o.currentSlide, 
        o.destroy(!0), d.extend(o, o.initials, {
            currentSlide: e
        }), o.init(), i || o.changeSlide({
            data: {
                message: "index",
                index: e
            }
        }, !1);
    }, r.prototype.registerBreakpoints = function() {
        var i, e, t, o = this, s = o.options.responsive || null;
        if ("array" === d.type(s) && s.length) {
            for (i in o.respondTo = o.options.respondTo || "window", s) if (t = o.breakpoints.length - 1, 
            e = s[i].breakpoint, s.hasOwnProperty(i)) {
                for (;0 <= t; ) o.breakpoints[t] && o.breakpoints[t] === e && o.breakpoints.splice(t, 1), 
                t--;
                o.breakpoints.push(e), o.breakpointSettings[e] = s[i].settings;
            }
            o.breakpoints.sort(function(i, e) {
                return o.options.mobileFirst ? i - e : e - i;
            });
        }
    }, r.prototype.reinit = function() {
        var i = this;
        i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, 
        i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), 
        i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), 
        i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), 
        i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), 
        i.checkResponsive(!1, !0), !0 === i.options.focusOnSelect && d(i.$slideTrack).children().on("click.slick", i.selectHandler), 
        i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), 
        i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [ i ]);
    }, r.prototype.resize = function() {
        var i = this;
        d(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
            i.windowWidth = d(window).width(), i.checkResponsive(), i.unslicked || i.setPosition();
        }, 50));
    }, r.prototype.removeSlide = r.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, 
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), 
        o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), 
        o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
    }, r.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", 
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, 
        !1 === o.transformsEnabled || (!(s = {}) === o.cssTransitions ? s[o.animType] = "translate(" + e + ", " + t + ")" : s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), 
        o.$slideTrack.css(s);
    }, r.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), 
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), 
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), 
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }, r.prototype.setFade = function() {
        var t, o = this;
        o.$slides.each(function(i, e) {
            t = o.slideWidth * i * -1, !0 === o.options.rtl ? d(e).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : d(e).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            });
        }), o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        });
    }, r.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e);
        }
    }, r.prototype.setOption = r.prototype.slickSetOption = function() {
        var i, e, t, o, s, n = this, r = !1;
        if ("object" === d.type(arguments[0]) ? (t = arguments[0], r = arguments[1], s = "multiple") : "string" === d.type(arguments[0]) && (o = arguments[1], 
        r = arguments[2], "responsive" === (t = arguments[0]) && "array" === d.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), 
        "single" === s) n.options[t] = o; else if ("multiple" === s) d.each(t, function(i, e) {
            n.options[i] = e;
        }); else if ("responsive" === s) for (e in o) if ("array" !== d.type(n.options.responsive)) n.options.responsive = [ o[e] ]; else {
            for (i = n.options.responsive.length - 1; 0 <= i; ) n.options.responsive[i].breakpoint === o[e].breakpoint && n.options.responsive.splice(i, 1), 
            i--;
            n.options.responsive.push(o[e]);
        }
        r && (n.unload(), n.reinit());
    }, r.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), 
        i.$slider.trigger("setPosition", [ i ]);
    }, r.prototype.setProps = function() {
        var i = this, e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), 
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), 
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), 
        void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", 
        i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), 
        void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", 
        i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), 
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", 
        i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), 
        void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", 
        i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), 
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", 
        i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
    }, r.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
        n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode ? (e = Math.floor(n.options.slidesToShow / 2), 
        !0 === n.options.infinite && (e <= i && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, 
        t.slice(o - e + 1, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 
        0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), 
        n.$slides.eq(i).addClass("slick-center")) : 0 <= i && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, 
        o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), 
        "ondemand" === n.options.lazyLoad && n.lazyLoad();
    }, r.prototype.setupInfinite = function() {
        var i, e, t, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (e = null, 
        o.slideCount > o.options.slidesToShow)) {
            for (t = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, 
            i = o.slideCount; i > o.slideCount - t; i -= 1) e = i - 1, d(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (i = 0; i < t; i += 1) e = i, d(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                d(this).attr("id", "");
            });
        }
    }, r.prototype.interrupt = function(i) {
        i || this.autoPlay(), this.interrupted = i;
    }, r.prototype.selectHandler = function(i) {
        var e = this, t = d(i.target).is(".slick-slide") ? d(i.target) : d(i.target).parents(".slick-slide"), o = parseInt(t.attr("data-slick-index"));
        if (o = o || 0, e.slideCount <= e.options.slidesToShow) return e.setSlideClasses(o), 
        void e.asNavFor(o);
        e.slideHandler(o);
    }, r.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, a, d = this;
        if (e = e || !1, (!0 !== d.animating || !0 !== d.options.waitForAnimate) && !(!0 === d.options.fade && d.currentSlide === i || d.slideCount <= d.options.slidesToShow)) if (!1 === e && d.asNavFor(i), 
        o = i, l = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, 
        !1 === d.options.infinite && !1 === d.options.centerMode && (i < 0 || i > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, 
        !0 !== t ? d.animateSlide(r, function() {
            d.postSlide(o);
        }) : d.postSlide(o)); else if (!1 === d.options.infinite && !0 === d.options.centerMode && (i < 0 || i > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, 
        !0 !== t ? d.animateSlide(r, function() {
            d.postSlide(o);
        }) : d.postSlide(o)); else {
            if (d.options.autoplay && clearInterval(d.autoPlayTimer), s = o < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : o - d.slideCount : o, 
            d.animating = !0, d.$slider.trigger("beforeChange", [ d, d.currentSlide, s ]), n = d.currentSlide, 
            d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), 
            d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== t ? (d.fadeSlideOut(n), 
            d.fadeSlide(s, function() {
                d.postSlide(s);
            })) : d.postSlide(s), void d.animateHeight();
            !0 !== t ? d.animateSlide(l, function() {
                d.postSlide(s);
            }) : d.postSlide(s);
        }
    }, r.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), 
        i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), 
        i.$slider.addClass("slick-loading");
    }, r.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, 
        t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), 
        o <= 45 && 0 <= o ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && 315 <= o ? !1 === s.options.rtl ? "left" : "right" : 135 <= o && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? 35 <= o && o <= 135 ? "down" : "up" : "vertical";
    }, r.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.interrupted = !1, o.shouldClick = !(10 < o.touchObject.swipeLength), 
        void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [ o, o.swipeDirection() ]), 
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
              case "left":
              case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), 
                o.currentDirection = 0;
                break;

              case "right":
              case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), 
                o.currentDirection = 1;
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [ o, t ]));
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), 
        o.touchObject = {});
    }, r.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, 
        e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), 
        i.data.action) {
          case "start":
            e.swipeStart(i);
            break;

          case "move":
            e.swipeMove(i);
            break;

          case "end":
            e.swipeEnd(i);
        }
    }, r.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!r.dragging || n && 1 !== n.length) && (e = r.getLeft(r.currentSlide), 
        r.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, 
        r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), 
        !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), 
        "vertical" !== (t = r.swipeDirection()) ? (void 0 !== i.originalEvent && 4 < r.touchObject.swipeLength && i.preventDefault(), 
        s = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), 
        !0 === r.options.verticalSwiping && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), 
        o = r.touchObject.swipeLength, (r.touchObject.edgeHit = !1) === r.options.infinite && (0 === r.currentSlide && "right" === t || r.currentSlide >= r.getDotCount() && "left" === t) && (o = r.touchObject.swipeLength * r.options.edgeFriction, 
        r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + o * s : r.swipeLeft = e + o * (r.$list.height() / r.listWidth) * s, 
        !0 === r.options.verticalSwiping && (r.swipeLeft = e + o * s), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, 
        !1) : void r.setCSS(r.swipeLeft))) : void 0);
    }, r.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return !(t.touchObject = {});
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), 
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, 
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, 
        t.dragging = !0;
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), 
        i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
    }, r.prototype.unload = function() {
        var i = this;
        d(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), 
        i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, r.prototype.unslick = function(i) {
        this.$slider.trigger("unslick", [ this, i ]), this.destroy();
    }, r.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, r.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), 
        i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1);
    }, d.fn.slick = function() {
        var i, e, t = this, o = arguments[0], s = Array.prototype.slice.call(arguments, 1), n = t.length;
        for (i = 0; i < n; i++) if ("object" == typeof o || void 0 === o ? t[i].slick = new r(t[i], o) : e = t[i].slick[o].apply(t[i].slick, s), 
        void 0 !== e) return e;
        return t;
    };
});