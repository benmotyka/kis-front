gsap.to('.layer-1', {y: '-100vh', delay: .5});
gsap.to('.layer-2', {y: '-100vh', delay: .7});
gsap.to('.layer-3', {y: '-100vh', delay: .9});
gsap.to('.overlay', {y: '-100vh', delay: 1.5});

gsap.fromTo('.hero-text',
    {x: '30rem', opacity: 0},
    {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:1.9});

gsap.fromTo('.logo-wrapper',
    {x: '30rem', opacity: 0},
    {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:2.3});

gsap.fromTo('.circle-sm',
    {x: '-30rem', opacity: 0},
    {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:1});

gsap.fromTo('.circle-lg',
    {x: '30rem', opacity: 0},
    {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:1.5});

gsap.fromTo('.organisators',
    {x: '-30rem', opacity: 0},
    {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:2.7});
