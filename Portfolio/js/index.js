// ────── SHOW MENU  ──────
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu("nav-toggle", "nav-menu");


// ────── Remove Menu Mobile  ──────
const Navlink = document.querySelectorAll('.nav_link');

function linkaction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');

}

Navlink.forEach(n  => n.addEventListener('click', linkaction));


// ─────────────── SCROLL SECTIONS  ACTIVE LINK ────────────────
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll' , scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})



/*SCROLL HOME*/
sr.reveal('.home_title', {})
sr.reveal('.home_scroll', {delay: 200})
sr.reveal('.home_img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills_name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills_img', {delay: 400})
sr.reveal('#myItem1' , {distance:"40px" , delay:300 , interval:50})
sr.reveal('#myItem2' , {distance:"50px" , delay:500, interval:60})
sr.reveal('#myItem3' , {distance:"60px" , delay:700 , interval:70})
sr.reveal('#myItem4' , {distance:"70px" , delay:900 , interval:80})
sr.reveal('#myItem5' , {distance:"90px" , delay:1000 , interval:90})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio_img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact_subtitle', {})
sr.reveal('.contact_text', {interval: 200})
sr.reveal('.contact_input', {delay: 400})
sr.reveal('.contact_button', { delay: 600 })



/* Set Progress | jQuery
======================================*/
/*
$(document).ready(function(){
	var max = 150.72259521484375;
	$.each($('.progress'), function( index, value ){
		percent = $(value).data('progress');
		$(value).children($('.fill')).attr('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
		$(value).children($('.value')).text(percent + '%');
	});
});
*/


var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};
window.onload = function(){
	var max = -219.99078369140625;
	forEach(document.querySelectorAll('.progress'), function (index, value) {
	percent = value.getAttribute('data-progress');
		value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
		value.querySelector('.value').innerHTML = percent + '%';
	});
}



/*

Used to calc the variable 'max' 
and set 'stroke-dasharray' and 
'stroke-dashoffset' in the css
	 
	
  	console.log(document.querySelector('.fill').getTotalLength());
		
*/
setTimeout(function(){
    $("#Loader").fadeToggle();
}, 2700);


// var arr = ["Tousif", 28];
// var arr1 = ["Tasrik", 67];

// for (var result; arr; arr1){
//     console.log(arr);

// }