const countdownBox = document.querySelector('.countdown-box');
const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');


function timer(date) {

    setInterval(() => {

        const countdown = new Date(date).getTime();

        const now = new Date().getTime();

        const difference = countdown - now;
        

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / (1000));

        daysEl.innerHTML = `${98} <br><span>Días</span>`;
        hoursEl.innerHTML = `${20}<br><span>Horas</span>`;
        minutesEl.innerHTML = `${33}<br><span>Minutos</span>`;
        secondsEl.innerHTML = `${35}<br><span>Segundos</span>`;

        if (difference < 0) {
            clearInterval(timer);
            countdownBox.classList.add('timeOut');
            countdownBox.innerHTML = ` <h4>It's Summer Work And Travel Time! <br>🥳📢</h4>`;
        }


    }, 1000);
}

timer('May 1, 2021 24:00:00');