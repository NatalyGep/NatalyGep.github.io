//  SHOW SCROLL UP 

  const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// scroll reveal animation

const sr = ScrollReveal({
origin: 'top',
distance: '60px',
duration: 2500,
delay: 400,
//reset: true
})

sr.reveal(`.heading_header`)
sr.reveal(`.heading-items`, {delay: 500})
sr.reveal(`.section-top`, {delay: 600, interval: 100, origin: 'top'})
sr.reveal(`.section-additional-education`, {origin: 'left'})
sr.reveal(`.section-hobbies`, {origin: 'right'})
sr.reveal(`section-bottom, .section-about`, {delay: 600, interval: 200, origin: 'bottom'})
