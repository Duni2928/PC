  const dayel = document.querySelector(".day");
  const hourel = document.querySelector(".hour");
  const minel = document.querySelector(".min");
  const secel = document.querySelector(".sec");
  let day = 18,
      hour = 1,
      min = 2,
      sec = 1,
      interval;
      interval = setInterval(timer, 1000);
  function timer() {
    sec--;
    if (sec < 10) {
      secel.innerHTML = "0" + sec
    } else {
      secel.innerHTML =  sec
    }
    if (sec < 0) {
      min--;
      minel.innerHTML = "0" + min;
      sec = 59;
      secel.innerHTML = sec;
    }
    if (min < 10) {
      minel.innerHTML = "0" + min
    } else {
      minel.innerHTML =  min
    }
    if (min < 0) {
      hour--;
      hourel.innerHTML = "0" + hour;
      min = 59;
      minel.innerHTML = min;
    }
    if (hour < 10) {
      hourel.innerHTML = "0" + hour
    } else {
      hourel.innerHTML =  hour
    }
    if (hour < 0) {
      day--;
      dayel.innerHTML = "0" + day;
      hour = 23;
      hourel.innerHTML = hour;
    }
    if (day < 10) {
      dayel.innerHTML = "0" + day
    } else {
      dayel.innerHTML =  day
    }
  }
