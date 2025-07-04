const themebutton = document.getElementById("themebutton");

themebutton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
})


function updateClock(){
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = now.getHours() < 12 ? "AM" : "PM";

    const options = {
        weekday : "long",
        year : "numeric",
        month : "long",
        day : "numeric",
    };
    
    const dateString = now.toLocaleDateString(undefined, options)

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`
    dateElement.textContent = `${dateString}`
}


setInterval(updateClock, 1000);
updateClock();