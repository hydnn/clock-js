//giriş
let myName = document.querySelector("#myName");

let n=prompt("Adınız nedir : ");
myName.innerHTML = `${n}`;

//gün ve saat
function showTime(){
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    
    minute = checkTime(minute);
    second = checkTime(second);

    document.getElementById('myClock').innerHTML = hour + ":" + minute + ":" + second;
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
    i = "0" + i
    }
    return i;
}
showTime()
