var countDownDate = new Date("Nov 26, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdowndays").innerHTML = days + " days";
  document.getElementById("countdownhours").innerHTML = hours + " hours";
  document.getElementById("countdownminutes").innerHTML = minutes + " minutes";
  document.getElementById("countdownseconds").innerHTML = seconds + " seconds";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdowndays").innerHTML = "Countdown Ended";
    document.getElementById("countdownhours").innerHTML = "";
    document.getElementById("countdownminutes").innerHTML = "";
    document.getElementById("countdownseconds").innerHTML = "";
  }
}, 1000);
