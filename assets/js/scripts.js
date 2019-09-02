// Scroll reveals
ScrollReveal().reveal('.header-logo', { delay: 1000, reset: false });
ScrollReveal().reveal('.countdown', { delay: 1500, reset: false });
ScrollReveal().reveal('.header-register', { delay: 1500, reset: false });
ScrollReveal().reveal('.header-scroll', { delay: 2000, reset: false });

// ScrollReveal().reveal('.timeline-title', { delay: 500, reset: false });
// ScrollReveal().reveal('.prizes-title', { delay: 500, reset: false });
// ScrollReveal().reveal('.sponsors-title', { delay: 500 });

ScrollReveal().reveal('.item', { delay: 500, reset: false });
ScrollReveal().reveal('.prizes-medal', { delay: 800, reset: false });
ScrollReveal().reveal('.sponsor-section', { delay: 800, reset: false });

// Countdown timer
var timerId =
    countdown(
        new Date("2019-09-17"),
        function (ts) {
            document.getElementById('days').innerHTML = ts.days;
            document.getElementById('hours').innerHTML = ts.hours;
        },
        countdown.DAYS | countdown.HOURS);

// Rellax
var rellax = new Rellax('.floating-item');

window.onload = () => {
    jQuery(".loader").fadeOut();;
}