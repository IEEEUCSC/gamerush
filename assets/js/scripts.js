ScrollReveal().reveal('.header-logo', { delay: 500, reset: true });
ScrollReveal().reveal('.countdown', { delay: 800, reset: true });
ScrollReveal().reveal('.header-register', { delay: 800, reset: true });
ScrollReveal().reveal('.header-scroll', { delay: 1100, reset: true });

var timerId =
    countdown(
        new Date("2019-10-12"),
        function (ts) {
            console.log(ts);
            document.getElementById('days').innerHTML = ts.days;
            document.getElementById('hours').innerHTML = ts.hours;
        },
        countdown.DAYS | countdown.HOURS);