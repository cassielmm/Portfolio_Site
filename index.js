const navToggle = document.querySelector('.burger-bttn');
const navLinks = document.querySelectorAll('.nav-item');
const projTiles = document.querySelectorAll('.display-item');

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('open');
	});
});

/*projTiles.forEach(link => {
	link.addEventListener('mouseover', () => {
		var kids = link.childNodes;
		kids[1].classList.remove('hide');
		kids[3].focus();
	});

	link.addEventListener('mouseout', () => {
		var kids = link.childNodes;
		kids[1].classList.add('hide');
	});
});*/