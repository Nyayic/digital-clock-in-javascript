function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById("hours").textContent = pad(hours);
    document.getElementById("minutes").textContent = pad(minutes);
    document.getElementById("seconds").textContent = pad(seconds);
  }
  function pad(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  setInterval(updateClock, 1000);