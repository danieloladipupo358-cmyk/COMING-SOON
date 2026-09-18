
const launchDate = new Date();

launchDate.setDate(launchDate.getDate() + 30);



const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");



function updateCountdown() {

    const now = new Date().getTime();

    const distance = launchDate.getTime() - now;



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    
    daysElement.textContent = formatNumber(days);

    hoursElement.textContent = formatNumber(hours);

    minutesElement.textContent = formatNumber(minutes);

    secondsElement.textContent = formatNumber(seconds);


    if (distance < 0) {

        clearInterval(countdown);

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
    }
}



function formatNumber(number) {

    return number < 10 ? "0" + number : number;

}



updateCountdown();



const countdown = setInterval(updateCountdown, 1000);




const form = document.getElementById("subscribe-form");

const emailInput = document.getElementById("email");

const message = document.getElementById("message");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = emailInput.value.trim();


    if (email === "") {

        message.textContent = "Please enter your email.";

        return;
    }


    message.textContent =
        "Thank you! You will be notified when we launch.";

    emailInput.value = "";

});