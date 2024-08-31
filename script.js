const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var cham = document.querySelectorAll(".chamber");
var vc = document.querySelector("#video-container");
var pbtn = document.querySelector("#play");

vc.addEventListener("mouseenter", function () {
    gsap.to(pbtn, {
        scale: 1,
        opacity: 1

    })
})

vc.addEventListener("mouseleave", function () {
    gsap.to(pbtn, {
        scale: 0,
        opacity: 0

    })
})

vc.addEventListener("mousemove", function (ele) {

    gsap.to(pbtn, {
        left: ele.x - 30,
        top: ele.y - 50
    })
})

gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.3
})



gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
})

document.addEventListener("mousemove", function (ele) {
    gsap.to("#cursor", {
        left: ele.x,
        top: ele.y
    })
})

// cham.addEventListener("mouseenter", function() {
//     gsap.to("#cursor", {
//         transform: 'translate(-50%, -50%) scale(1)',
//              // Scales the cursor element to its original size
//         opacity: (248, 207, 178, 0.29)

//     });
// });
// cham.addEventListener("mouseleave", function() {
//     gsap.to("#cursor", {     
//              transform: 'translate(-50%, -50%) scale(0)'

//     });
// });

cham.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(1)',
            // Scales the cursor element to its original size
            opacity: (248, 207, 178, 0.39)
        });
    });
})

cham.forEach(function (ele) {
    ele.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(0)'
            // Scales the cursor element to its original size

        });
    });
})