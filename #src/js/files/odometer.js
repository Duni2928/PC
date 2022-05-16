if (document.querySelector(".odometer")) {
  const ribbonInner =  document.querySelectorAll(".odometer-ribbon-inner");
  ribbonInner.forEach(item => {
    let spacerValue = document.createElement("div");
    spacerValue.className = "odometer-value odometer-main-value"
    spacerValue.innerHTML = item.parentNode.querySelector(".odometer-digit-spacer").innerHTML;
    item.appendChild(spacerValue);
    let n = spacerValue.innerHTML;
    for (let i = n -1; i >= 0; i--) {
      let odometerValue = document.createElement("div");
      odometerValue.className = "odometer-value";
      odometerValue.innerHTML = i;
      item.appendChild(odometerValue);
    }
  })
}