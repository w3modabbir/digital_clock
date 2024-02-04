let hours = document.getElementById("hours")
let munite = document.getElementById("minute")
let second = document.getElementById("second")

setInterval(()=>{
    let currentTime = new Date();
    hours.innerHTML = currentTime.getHours();
    munite.innerHTML = currentTime.getMinutes();
    second.innerHTML = currentTime.getSeconds();
    let day_night = "AM"
    if(hours > 12){
        hours = hours -12;
        day_night = "PM"
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(munite < 10){
        munite = "0" + munite;
    }
    if(second < 10){
        second = "0" + second;
    }
    
}, 1000)