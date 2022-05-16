const dayel = document.querySelector(".day");
const hourel = document.querySelector(".hour");
const minel = document.querySelector(".min");
const secel = document.querySelector(".sec");
let actiondate = new Date(2022, 05, 02, 10, 30, 0);
let timer = setInterval(count, 1000);
function count () {
  let now = new Date();
  let gap = actiondate - now;
  let day = Math.floor(gap / (24 * 60 * 60 * 1000));
  let hour = Math.floor((gap / 1000 / 60 / 60) % 24);
  let min = Math.floor((gap / 1000 / 60 ) % 60);
  let sec = Math.floor((gap / 1000 ) % 60);
  if (day < 10) {
    day = "0" + day
  }
  if (hour < 10) {
    hour = "0" + hour
  }
  if (min < 10) {
    min = "0" + min
  }
  if (sec < 10) {
    sec = "0" + sec
  }
  if (gap > 0) {
    dayel.innerHTML = day;
    hourel.innerHTML = hour;
    minel.innerHTML = min;
    secel.innerHTML = sec;
  }  
}