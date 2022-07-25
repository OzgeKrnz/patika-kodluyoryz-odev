let name1= prompt("Adınız: ");
let id = document.querySelector("#myName");
id.innerHTML = name1;

let clockID = document.querySelector("#myClock");

window.onload=showTime;
function showTime(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);
    clockID.innerHTML = `${h}:${m}:${s}`;
    setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}

