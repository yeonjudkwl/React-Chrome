let datetime = document.querySelector('.datetime');

function getTime(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let hour_o = (h < 10) ? "0" : "";
    let min_o = (m < 10) ? "0" : "";
    let secon_o = (s < 10) ? "0" : "";
    
    datetime.innerHTML = `${hour_o}${h}:${min_o}${m}:${secon_o}${s}`;
}
function init(){
    setInterval(getTime, 1000);
}
init();