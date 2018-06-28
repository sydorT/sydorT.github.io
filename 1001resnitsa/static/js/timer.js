$(document).ready(function () {
  initTimer();

  function initTimer() {
    var minutes = "12";
    var seconds = "0";

    if (localStorage.getItem('time') !== null) {
      var time = JSON.parse(localStorage.getItem('time'));
      minutes = time.minutes;
      seconds = time.seconds;
    }

    document.getElementById('timer').innerHTML =
      minutes + ":" + seconds;

    startTimer();

    function startTimer() {
      var presentTime = document.getElementById('timer').innerHTML;
      var timeArray = presentTime.split(/[:]+/);
      var m = timeArray[0];
      var s = checkSecond((timeArray[1] - 1));
      if (s == 59) { m = m - 1 }
      if (m < 0) {
        return false;
      }

      document.getElementById('timer').innerHTML =
        m + ":" + s;
      setTimeout(startTimer, 1000);
      localStorage.setItem('time', JSON.stringify({ minutes: m, seconds: s }));
    }

    function checkSecond(sec) {
      if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
      if (sec < 0) { sec = "59" };
      return sec;
    }
  }
});