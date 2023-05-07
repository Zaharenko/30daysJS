function setDate() {
    const now = new Date();

    const hoursHand = document.querySelector('.hours-hand');
    const minutesHand = document.querySelector('.minutes-hand');
    const secondsHand = document.querySelector('.seconds-hand');

    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360);
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360);
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;


    const hoursNumber = document.querySelector('.digit-hours span').innerHTML = `${hours}`
    const minutesNumber = document.querySelector('.digit-minutes span').innerHTML = `${minutes}`
    const secondsNumber = document.querySelector('.digit-seconds span').innerHTML = `${seconds}`
}

setInterval(setDate, 1000)