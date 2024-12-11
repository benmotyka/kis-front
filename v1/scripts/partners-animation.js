let partnersAnimated;

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true && !partnersAnimated) {
    animatePartners()
  }
}, {
  rootMargin: '-100px',
})
observer.observe(document.querySelector('#partners'))

const animatePartners = async () => {
  const partnerIds = [
    "#organizer-saits",
    "#organizer-prz",
    "#organizer-weii",
    "#organizer-pti",
    "#organizer-paloalto",
    "#organizer-ko"
  ]
  imagesDelay = 0.3 // s

  partnerIds.forEach((partnerId, key) => {
    gsap.fromTo(partnerId,
    {x: '30rem', opacity: 0},
    {x: 0, opacity: 1, ease: 'back.out(1.7)', delay: key * imagesDelay});
  })

    partnersAnimated = true
}