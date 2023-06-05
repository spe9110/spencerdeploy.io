gsap.from(".nav-items", {
    duration: 1,
    opacity: 0,
    y: -20,
    stagger: 0.5,
    delay: 1
});

gsap.from(".container-one", {
    x: "-100%",
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    delay: 2
});

gsap.registerPlugin(ScrollTrigger);
    
gsap.from(".photo-cabinet", {
    opacity: 0,
    duration: 5,
    delay: 1,
    scrollTrigger: {
        trigger: ".photo-cabinet",
        start: "top center",
        end: "top 100px",
        scrub: true,
    }
});
gsap.from(".cabinet", {
    opacity: 0,
    delay: 2,
    duration: 5,
    scrollTrigger: {
        trigger: ".cabinet",
        start: "top center",
        end: "top 100px",
        scrub: true,
    }
});

gsap.from("#sectionTwo", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#sectionTwo",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from("#sectionFour", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#sectionFour",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

