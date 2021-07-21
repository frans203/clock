let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

updateClock = () => {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`;
  //   6 => (360/60), 360degrees divided by 60 seconds, 6deg per second
  let sDeg = 6 * second - 90;
  let mDeg = 6 * minute - 90;
  //   30 => (360/12), 360degrees divided by 12 hours, 30deg per hour
  let hDeg = 30 * hour - 90;
  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
};

function fixZero(time) {
  return time < 10 ? "0" + time : time;
}

setInterval(updateClock, 1000);
updateClock();
