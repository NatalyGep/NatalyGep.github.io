//loader 
onload = () =>{
	const load = document.getElementById('load')
	setTimeout(() =>{
load.style.display = 'none'
	}, 2500)
}

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

sr.reveal(`.header__title`)
sr.reveal(`.header__items`, {delay: 500})
sr.reveal(`.education, .profile, .contact`, {delay: 600, interval: 100, origin: 'top'})
sr.reveal(`.additional-education`, {origin: 'left'})
sr.reveal(`.hobbies`, {origin: 'right'})
sr.reveal(`.languages, .projects, .skills, .about, .footer`, {delay: 600, interval: 200, origin: 'bottom'})


