$(document).ready(function() {
  var countDown = null;
  var breakTime = parseInt($("#bMinutes").html(), 10);
  var resetBreakTime = parseInt($("#breakMinutes").html(), 10);
  var resetSession = parseInt($("#sessionMinutes").html(), 10);

  // Add functionality to buttons to add and subtract break length, session length, work length

  $("#subtractSessionMinutes").click(function() {
    var sessionMinutes = parseInt($("#sessionMinutes").html(), 10);
    var newValue = sessionMinutes - 1;
    $("#sessionMinutes").html(newValue);
    //$("#minutes").html(newValue);
  });

  $("#addSessionMinutes").click(function() {
    var sessionMinutes = parseInt($("#sessionMinutes").html(), 10);
    var newValue = sessionMinutes + 1;
    $("#sessionMinutes").html(newValue);
    //$("#minutes").html(newValue);
  });

  $("#subtractBreakMinutes").click(function() {
    var breakMinutes = parseInt($("#breakMinutes").html(), 10);
    var newValue = breakMinutes - 1;
    $("#breakMinutes").html(newValue);
    //$("#bMinutes").html(newValue);
  });

  $("#addBreakMinutes").click(function() {
    var breakMinutes = parseInt($("#breakMinutes").html(), 10);
    var newValue = breakMinutes + 1;
    $("#breakMinutes").html(newValue);
    //$("#bMinutes").html(newValue);
  });


  $("#startButton").click(function() {
    var minutes = parseInt($("#sessionMinutes").html(), 10);
    var seconds = (minutes * 60) % 60;
    $("#workTime, #resetButton").fadeIn("slow");
    $("#start, #breakTime, #sessionLength, #breakButton, #subtractSessionMinutes, #addSessionMinutes, #subtractBreakMinutes, #addBreakMinutes").fadeOut("slow");
    function myClock() {
      $("#sessionMinutes").html(minutes);
      $("#seconds").html(seconds);
      if (seconds === 0) {
        $("#seconds").html("0" + seconds);
        minutes -= 1;
        seconds = 59;
      } else if (seconds < 10) {
        $("#seconds").html("0" + seconds);
        seconds -= 1;
      } else if (minutes < 0) {
        clearInterval(countDown);
        $("#sessionMinutes").html("0");
        $("#seconds").html("00");
        $("#breakButton").show();
        $("#bMinutes").html(breakTime);
        //play notification sound
        $("#notification1")[0].play();
      } else {
        seconds -= 1;
      }
    }
    countDown = setInterval(myClock, 1000);
  });

  $("#breakButton").click(function() {
    var bMinutes = parseInt($("#breakMinutes").html(), 10);
    var bSeconds = (bMinutes * 60) % 60;
    $("#breakTime, #resetButton").fadeIn("slow");
    $("#workTime, #start, #breakLength, #sessionLength, #breakButton, #subtractSessionMinutes, #addSessionMinutes, #subtractBreakMinutes, #addBreakMinutes").fadeOut("slow");
    function myClock() {
      $("#breakMinutes").html(bMinutes);
      $("#bSeconds").html(bSeconds);
      if (bSeconds === 0) {
        $("#bSeconds").html("0" + bSeconds);
        bMinutes -= 1;
        bSeconds = 59;
      } else if (bSeconds < 10) {
        $("#bSeconds").html("0" + bSeconds);
        bSeconds -= 1;
      } else if (bMinutes < 0) {
        clearInterval(countDown);
        //$("#start").fadeIn("slow");
        $("#breakMinutes").html("0");
        $("#bSeconds").html("00");
        //$("#breakMinutes").html(resetSession);
        //play notification sound
        $("#notification2")[0].play();
      } else {
        bSeconds -= 1;
      }
    }
    countDown = setInterval(myClock, 1000);
  });

  $("#resetButton").click(function() {
    clearInterval(countDown);
    $("#breakLength, #sessionLength, #start, #breakButton, #breakTime, #workTime, #subtractSessionMinutes, #addSessionMinutes, #subtractBreakMinutes, #addBreakMinutes").fadeIn("slow");
    $("#sessionMinutes").html(resetSession);
    $("#minutes").html(resetSession);
    $("#seconds").html("00");
    $("#breakMinutes").html(resetBreakTime);
    $("#bSeconds").html("00");
  });
});
