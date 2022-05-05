let tl = gsap.timeline({ 
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: 1
    },
})

let tl2 = gsap.timeline({ 
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '50%',
        scrub: 1
    },
})

let tl3 = gsap.timeline({ 
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '200%',
        scrub: 1,
        pin: true,
        pinSpacing: false
    },
})

tl.fromTo('.sliding_text', {y: 0}, {y:-400})
tl2.fromTo('.logo', {scale: 6} , {scale: 1, top: '1.5rem', left: '3rem', x:'50%', y:'50%'})


//  tl.to('.logo', {opacity: 0})