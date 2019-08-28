// Scroll reveals
ScrollReveal().reveal('.header-logo', { delay: 1000, reset: true });
ScrollReveal().reveal('.countdown', { delay: 1500, reset: true });
ScrollReveal().reveal('.header-register', { delay: 1500, reset: true });
ScrollReveal().reveal('.header-scroll', { delay: 2000, reset: true });

ScrollReveal().reveal('.timeline-title', { delay: 500, reset: true });
ScrollReveal().reveal('.prizes-title', { delay: 500, reset: true });
ScrollReveal().reveal('.sponsors-title', { delay: 500, reset: true });

ScrollReveal().reveal('.item', { delay: 500, reset: true });
ScrollReveal().reveal('.prizes-medal', { delay: 800, reset: true });
ScrollReveal().reveal('.sponsor-item', { delay: 800, reset: true });

// Countdown timer
var timerId =
    countdown(
        new Date("2019-10-12"),
        function (ts) {
            document.getElementById('days').innerHTML = ts.days;
            document.getElementById('hours').innerHTML = ts.hours;
        },
        countdown.DAYS | countdown.HOURS);

// Rellax
var rellax = new Rellax('.rellax');
var rellax = new Rellax('.floating-item');

window.onload = () => {
    jQuery(".loader").fadeOut();;
}