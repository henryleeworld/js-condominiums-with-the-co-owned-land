tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 2,
    delay: 1
});

tl.from('#top-hedges', 0.8, {
        scale: 0,
        transformOrigin: "bottom center",
        ease: Elastic.easeInOut
    })
    .from('#bottom-left-wall', 0.8, {
        scale: 0,
        transformOrigin: "bottom center",
        ease: Elastic.easeInOut
    }, "-=0.8")
    .from('#bottom-right-wall', 0.8, {
        scale: 0,
        transformOrigin: "bottom center",
        ease: Elastic.easeInOut
    }, "-=0.8")
    .from('#bottom-middle-wall', 0.8, {
        scale: 0,
        transformOrigin: "bottom top",
        ease: Elastic.easeInOut
    }, "-=0.8")
    .from('#top-trees', 0.8, {
        scale: 0,
        transformOrigin: "center center",
        ease: Elastic.easeInOut
    }, "-=0.8")
    .from('#bottom-trees', 0.8, {
        scale: 0,
        transformOrigin: "center center",
        ease: Elastic.easeInOut
    }, "-=0.8")
    .from('#road', 0.8, {
        scale: 0,
        transformOrigin: "bottom center",
        ease: Elastic.easeInOut
    }, "-=0.8")
    .from('#ground', 0.8, {
        scale: 0,
        transformOrigin: "center center",
        ease: Elastic.easeInOut
    }, "-=0.7")
    .from('#building', 0.8, {
        scale: 0,
        transformOrigin: "center 100px",
        ease: Elastic.easeInOut
    }, "-=0.6")
    .from('#building-shadow', 0.8, {
        opacity: 0,
        transformOrigin: "bottom center",
        ease: Power1.easeIn
    }, "-=0.6")
    .from('#sandbox', 0.7, {
        scale: 0,
        transformOrigin: "bottom center",
        ease: Elastic.easeInOut
    }, "-=0.6")
    .from('#swing', 0.7, {
        scale: 0,
        transformOrigin: "bottom center",
        ease: Elastic.easeInOut
    }, "-=0.6")
    .from('#slide', 0.7, {
        scale: 0,
        transformOrigin: "bottom center",
        ease: Elastic.easeInOut
    }, "-=0.6")
    .from('#car-red', 2, {
        x: -190,
        y: -110,
        ease: Power2.easeOut
    })
    .from('#car-yellow', 1.5, {
        x: 211,
        y: -115,
        ease: Power2.easeOut
    }, "-=1.5")
    .to('#car-red', 2, {
        x: 205,
        y: 120,
        ease: Power2.easeIn
    })
    .to('#car-yellow', 1.7, {
        x: -300,
        y: 170,
        ease: Power2.easeIn
    }, "-=1.2");

tl.timeScale(0.8);

var $slider = $('#slider'),
    sliderValue = {
        value: 0
    };

$slider.slider({
    range: false,
    min: 0,
    max: 100,
    step: .1,
    start: function() {
        tl.pause();
    },
    slide: function(event, ui) {
        tl.progress(ui.value / 100);
    },
    stop: function() {
        tl.play();
    }
});

tl.eventCallback("onUpdate", function() {
    sliderValue.value = tl.progress() * 100;
    $slider.slider(sliderValue);
});