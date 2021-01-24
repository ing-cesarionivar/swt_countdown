const countdownBox = document.querySelector('.countdown-box');
const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');


function timer(date) {

    setInterval(() => {

        const countdown = new Date(date.toString().replace(/\,/g, '/')).getTime();

        const now = new Date().getTime();

        const difference = countdown - now;
        

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / (1000));

        daysEl.innerHTML = `${days} <br><span>${days === 1 ? 'Day' : 'Days'}</span>`;
        hoursEl.innerHTML = `${hours}<br><span>${hours === 1 ? 'Hour' : 'Hours'}</span>`;
        minutesEl.innerHTML = `${minutes}<br><span>${minutes === 1 ? 'Minute' : 'Minutes'}</span>`;
        secondsEl.innerHTML = `${seconds}<br><span>${seconds === 1 ? 'Second' : 'Seconds'}</span>`;
        
        if (difference < 0) {
            clearInterval(timer);
            countdownBox.classList.add('timeOut');
            countdownBox.innerHTML = ` <h4>It's Summer Work And Travel Time! <br>🥳📢</h4>`;
        }


    }, 1000);
}



timer('2021-05-01');