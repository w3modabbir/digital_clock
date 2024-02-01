let hours = document.getElementById("hours")
let munite = document.getElementById("minute")
let second = document.getElementById("second")

setInterval(()=>{
    let currentTime = new Date();
    
    hours.innerHTML = (currentTime.getHours()<10?"0" : "") + currentTime.getHours();
    munite.innerHTML = (currentTime.getMinutes()<10?"0" : "") + currentTime.getMinutes();
    second.innerHTML = (currentTime.getSeconds()<10? "0" : "") + currentTime.getSeconds();
    
}, 1000)