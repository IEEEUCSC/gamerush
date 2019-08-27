// Scroll reveals
ScrollReveal().reveal('.header-logo', { delay: 1000, reset: true });
ScrollReveal().reveal('.countdown', { delay: 1500, reset: true });
ScrollReveal().reveal('.header-register', { delay: 1500, reset: true });
ScrollReveal().reveal('.header-scroll', { delay: 2000, reset: true });

ScrollReveal().reveal('.item', { delay: 500, reset: true });

// Countdown timer
var timerId =
    countdown(
        new Date("2019-10-12"),
        function (ts) {
            console.log(ts);
            document.getElementById('days').innerHTML = ts.days;
            document.getElementById('hours').innerHTML = ts.hours;
        },
        countdown.DAYS | countdown.HOURS);

// Rellax
var rellax = new Rellax('.rellax');
var rellax = new Rellax('.floating-item');