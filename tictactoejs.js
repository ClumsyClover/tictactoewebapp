document.getElementById("startgamebtn").addEventListener("mouseover", function() {
  document.getElementById("startgamebtn").style.backgroundColor = "#8E98CB";
  document.getElementById("startgamebtn").style.transition = "0.2s";
});

document.getElementById("startgamebtn").addEventListener("mouseout", function() {
  document.getElementById("startgamebtn").style.backgroundColor = "#2D2D30";
  document.getElementById("startgamebtn").style.transition = "0.2s";
});

document.getElementById("startgamebtn").addEventListener("click", function() {
  document.getElementById("gamewindow").style.top = "200px";
  document.getElementById("gamewindow").style.visibility = "visible";
  document.getElementById("gamewindow").style.transition = "1.5s";
  document.getElementById("gamewindow").style.borderColor = "#8E98CB";
});


document.getElementById("tictactoeline1").style.top = "360px";
document.getElementById("tictactoeline1").style.left = "327px";

document.getElementById("tictactoeline2").style.top = "490px";
document.getElementById("tictactoeline2").style.left = "327px";

document.getElementById("tictactoeline3").style.top = "425px";
document.getElementById("tictactoeline3").style.left = "275px";
document.getElementById("tictactoeline3").style.transform = "rotate(90deg)";
document.getElementById("tictactoeline3").style.width = "430px";

document.getElementById("tictactoeline4").style.top = "425px";
document.getElementById("tictactoeline4").style.left = "449px";
document.getElementById("tictactoeline4").style.transform = "rotate(90deg)";
document.getElementById("tictactoeline4").style.width = "430px";

document.getElementById("cpulabel").style.top = "220px";
document.getElementById("cpulabel").style.left = "1150px";

document.getElementById("vslabel").style.top = "235px";
document.getElementById("vslabel").style.left = "1060px";
document.getElementById("vslabel").style.fontSize = "35px";

document.getElementById("youscorelabel").style.top = "290px";
document.getElementById("youscorelabel").style.left = "940px";

document.getElementById("cpuscorelabel").style.top = "290px";
document.getElementById("cpuscorelabel").style.left = "1185px";

document.getElementById("timersecslabel").style.top = "485px";
document.getElementById("timersecslabel").style.left = "1095px";

document.getElementById("timercolons").style.top = "481px";
document.getElementById("timercolons").style.left = "1076px";

document.getElementById("timerminslabel").style.top = "485px";
document.getElementById("timerminslabel").style.left = "1010px";

var timersecs = 0;
var timermins = 0;
var colonsint = 0;

setInterval(timersecsincrement, 1000);
setInterval(timercolonsanimation, 500);

function timercolonsanimation() {
  if(colonsint == "0"){
    document.getElementById("timercolons").style.color = "#FFFFFF";
    document.getElementById("timercolons").style.transition = "0.5s";
    colonsint = "1";
  }
  else{
    document.getElementById("timercolons").style.color = "#8E98CB";
    document.getElementById("timercolons").style.transition = "0.5s";
    colonsint = "0";
  }
};

function timersecsincrement() {
  if(timermins <= 59){
    if(timersecs >= 60){
      timersecs = 0;
      if(timermins < 9){
        timermins++;
        document.getElementById("timerminslabel").innerHTML = "0" + timermins;
      }
      else{
        timermins++;
        document.getElementById("timerminslabel").innerHTML = timermins;
      }
    }
    if(timersecs < 10){
      document.getElementById("timersecslabel").innerHTML = "0" + timersecs;
    }
    else{
      document.getElementById("timersecslabel").innerHTML = timersecs;
    }
    timersecs++;
  }
  else{
    timersecs = 0;
    timermins = 0;
    document.getElementById("timersecslabel").innerHTML = "00";
    document.getElementById("timerminslabel").innerHTML = "00";
  }
};

document.getElementById("reloadbtn").style.top = "580px";
document.getElementById("reloadbtn").style.left = "1184px";
document.getElementById("reloadbtn").style.backgroundImage =("url('reloadbtnicon.png')");

document.getElementById("reloadbtn").addEventListener("mouseover", function() {
  document.getElementById("reloadbtn").style.backgroundImage =("url('reloadbtniconhover.png')");
});
document.getElementById("reloadbtn").addEventListener("mouseout", function() {
  document.getElementById("reloadbtn").style.backgroundImage =("url('reloadbtnicon.png')");
});
document.getElementById("reloadbtn").addEventListener("click", function() {
  document.getElementById("reloadbtn").style.backgroundImage =("url('reloadbtniconhover.png')");
});

document.getElementById("pausebtn").style.top = "580px";
document.getElementById("pausebtn").style.left = "1099px";
document.getElementById("pausebtn").style.backgroundImage =("url('pausebtnicon.png')");

document.getElementById("pausebtn").addEventListener("mouseover", function() {
  document.getElementById("pausebtn").style.backgroundImage =("url('pausebtniconhover.png')");
});
document.getElementById("pausebtn").addEventListener("mouseout", function() {
  document.getElementById("pausebtn").style.backgroundImage =("url('pausebtnicon.png')");
});
document.getElementById("pausebtn").addEventListener("click", function() {
  document.getElementById("pausebtn").style.backgroundImage =("url('pausebtniconhover.png')");
});

document.getElementById("historybtn").style.top = "580px";
document.getElementById("historybtn").style.left = "1014px";
document.getElementById("historybtn").style.backgroundImage =("url('historybtnicon.png')");

document.getElementById("historybtn").addEventListener("mouseover", function() {
  document.getElementById("historybtn").style.backgroundImage =("url('historybtniconhover.png')");
});
document.getElementById("historybtn").addEventListener("mouseout", function() {
  document.getElementById("historybtn").style.backgroundImage =("url('historybtnicon.png')");
});
document.getElementById("historybtn").addEventListener("click", function() {
  document.getElementById("historybtn").style.backgroundImage =("url('historybtniconhover.png')");
});

document.getElementById("homebtn").style.top = "580px";
document.getElementById("homebtn").style.left = "929px";
document.getElementById("homebtn").style.backgroundImage =("url('homebtnicon.png')");

document.getElementById("homebtn").addEventListener("mouseover", function() {
  document.getElementById("homebtn").style.backgroundImage =("url('homebtniconhover.png')");
});
document.getElementById("homebtn").addEventListener("mouseout", function() {
  document.getElementById("homebtn").style.backgroundImage =("url('homebtnicon.png')");
});
document.getElementById("homebtn").addEventListener("click", function() {
  document.getElementById("homebtn").style.backgroundImage =("url('homebtniconhover.png')");
});

//fadeincommentary("Hi how was your day good afternoon");
var inputcommentarytext = "Hi how was your day good afternoon";
fadeincommentary();

function fadeincommentary() {
  document.getElementById("commentarylabel").style.color = "#8E98CB";
  document.getElementById("commentarylabel").style.transition = "0.5s";
  document.getElementById("commentarylabel").innerHTML = inputcommentarytext;
  document.getElementById("commentarylabel").style.color = "#FFFFFF";
};

function fadeincommentary2(){
  document.getElementById("commentarylabel").innerHTML = inputcommentarytext;
  document.getElementById("commentarylabel").style.color = "#FFFFFF";
  document.getElementById("commentarylabel").style.transition = "0.5s";
};

document.getElementById("gamewindow").style.top = "200px";
document.getElementById("tictactoeline1").style.top = "353px";     ////////
document.getElementById("tictactoeline2").style.top = "498px";    //////////
document.getElementById("tictactoeline3").style.top = "425px";
document.getElementById("tictactoeline4").style.top = "425px";
document.getElementById("scorepanel").style.top = "203px";
document.getElementById("youlabel").style.top = "220px";
document.getElementById("cpulabel").style.top = "220px";
document.getElementById("vslabel").style.top = "235px";
document.getElementById("youscorelabel").style.top = "290px";
document.getElementById("cpuscorelabel").style.top = "290px";
document.getElementById("commentarylabel").style.top = "390px";
document.getElementById("timersecslabel").style.top = "485px";
document.getElementById("timerminslabel").style.top = "485px";
document.getElementById("timercolons").style.top = "481px";
document.getElementById("reloadbtn").style.top = "580px";
document.getElementById("pausebtn").style.top = "580px";
document.getElementById("historybtn").style.top = "580px";
document.getElementById("homebtn").style.top = "580px";

document.getElementById("gamewindow").style.transition = "1.5s";
document.getElementById("tictactoeline1").style.transition = "1.5s";
document.getElementById("tictactoeline2").style.transition = "1.5s";
document.getElementById("tictactoeline3").style.transition = "1.5s";
document.getElementById("tictactoeline4").style.transition = "1.5s";
document.getElementById("scorepanel").style.transition = "1.5s";
document.getElementById("youlabel").style.transition = "1.5s";
document.getElementById("cpulabel").style.transition = "1.5s";
document.getElementById("vslabel").style.transition = "1.5s";
document.getElementById("youscorelabel").style.transition = "1.5s";
document.getElementById("cpuscorelabel").style.transition = "1.5s";
document.getElementById("commentarylabel").style.transition = "1.5s";
document.getElementById("timersecslabel").style.transition = "1.5s";
document.getElementById("timerminslabel").style.transition = "1.5s";
document.getElementById("timercolons").style.transition = "1.5s";
document.getElementById("reloadbtn").style.transition = "1.5s";
document.getElementById("pausebtn").style.transition = "1.5s";
document.getElementById("historybtn").style.transition = "1.5s";
document.getElementById("homebtn").style.transition = "1.5s";

document.getElementById("gamewindow").style.visibility = "visible";
document.getElementById("tictactoeline1").style.visibility = "visible";
document.getElementById("tictactoeline2").style.visibility = "visible";
document.getElementById("tictactoeline3").style.visibility = "visible";
document.getElementById("tictactoeline4").style.visibility = "visible";
document.getElementById("scorepanel").style.visibility = "visible";
document.getElementById("youlabel").style.visibility = "visible";
document.getElementById("cpulabel").style.visibility = "visible";
document.getElementById("vslabel").style.visibility = "visible";
document.getElementById("youscorelabel").style.visibility = "visible";
document.getElementById("cpuscorelabel").style.visibility = "visible";
document.getElementById("commentarylabel").style.visibility = "visible";
document.getElementById("timersecslabel").style.visibility = "visible";
document.getElementById("timerminslabel").style.visibility = "visible";
document.getElementById("timercolons").style.visibility = "visible";
document.getElementById("reloadbtn").style.visibility = "visible";
document.getElementById("pausebtn").style.visibility = "visible";
document.getElementById("historybtn").style.visibility = "visible";
document.getElementById("homebtn").style.visibility = "visible";

document.getElementById("gamewindow").style.borderColor = "#8E98CB";
document.getElementById("tictactoeline1").style.backgroundColor = "#FFFFFF";
document.getElementById("tictactoeline2").style.backgroundColor = "#FFFFFF";
document.getElementById("tictactoeline3").style.backgroundColor = "#FFFFFF";
document.getElementById("tictactoeline4").style.backgroundColor = "#FFFFFF";
document.getElementById("scorepanel").style.backgroundColor = "#8E98CB";
document.getElementById("youlabel").style.color = "#FFFFFF";
document.getElementById("cpulabel").style.color = "#FFFFFF";
document.getElementById("vslabel").style.color = "#FFFFFF";
document.getElementById("youscorelabel").style.color = "#FFFFFF";
document.getElementById("cpuscorelabel").style.color = "#FFFFFF";
document.getElementById("commentarylabel").style.color = "#FFFFFF";
document.getElementById("timersecslabel").style.color = "#FFFFFF";
document.getElementById("timerminslabel").style.color = "#FFFFFF";
document.getElementById("timercolons").style.color = "#FFFFFF";

document.getElementById("1-1").style.top = "212px";
document.getElementById("1-2").style.top = "212px";
document.getElementById("1-3").style.top = "212px";
document.getElementById("2-1").style.top = "357.5px";
document.getElementById("2-2").style.top = "357.5px";
document.getElementById("2-3").style.top = "357.5px";
document.getElementById("3-1").style.top = "502px";
document.getElementById("3-2").style.top = "502px";
document.getElementById("3-3").style.top = "502px";

document.getElementById("1-1").style.transition = "1.5s";
document.getElementById("1-2").style.transition = "1.5s";
document.getElementById("1-3").style.transition = "1.5s";
document.getElementById("2-1").style.transition = "1.5s";
document.getElementById("2-2").style.transition = "1.5s";
document.getElementById("2-3").style.transition = "1.5s";
document.getElementById("3-1").style.transition = "1.5s";
document.getElementById("3-2").style.transition = "1.5s";
document.getElementById("3-3").style.transition = "1.5s";

document.getElementById("1-1").addEventListener("click", function() {
  fadeinx();
});

var currentid = "";
var disablebtns = "0";

function disablebtns() {
  disablebtns = 1;
};

function enablebtns() {
  disablebtns = 0;
};

var noofuserturns = 0;

function fadeinx() {
  if(disablebtns == "0"){
    var allowbtnpress = 0;
    noofuserturns++;
    if(currentid == "oneone"){
      if(gamebtnspressed.oneone == "0"){
        allowbtnpress = 0;
        gamebtnspressed.oneone = "1";
        usercpubtnpress.oneone = "0";
        if(noofuserturns == 1){
          btnspressedid.first = "oneone";
        };
        if(noofuserturns == 2){
          btnspressedid.second= "oneone";
        };
        if(noofuserturns == 3){
          btnspressedid.third = "oneone";
        };
        if(noofuserturns == 4){
          btnspressedid.fourth = "oneone";
        };


      }
      else{
        allowbtnpress = 1;
      };
    };
    if(currentid == "onetwo"){
      if(gamebtnspressed.onetwo == "0"){
        allowbtnpress = 0;
        gamebtnspressed.onetwo = "1";
        usercpubtnpress.onetwo = "0";
        btnspressedid = "onetwo";
        if(noofuserturns == 1){
          btnspressedid.first = "onetwo";
        };
        if(noofuserturns == 2){
          btnspressedid.second= "onetwo";
        };
        if(noofuserturns == 3){
          btnspressedid.third = "onetwo";
        };
        if(noofuserturns == 4){
          btnspressedid.fourth = "onetwo";
        };
      }
      else{
        allowbtnpress = 1;
      };
    };
    if(currentid == "onethree"){
      if(gamebtnspressed.onethree == "0"){
        allowbtnpress = 0;
        gamebtnspressed.onethree = "1";
        usercpubtnpress.onethree = "0";
        btnspressedid = "onethree";
        if(noofuserturns == 1){
          btnspressedid.first = "onethree";
        };
        if(noofuserturns == 2){
          btnspressedid.second= "onethree";
        };
        if(noofuserturns == 3){
          btnspressedid.third = "onethree";
        };
        if(noofuserturns == 4){
          btnspressedid.fourth = "onethree";
        };
      }
      else{
        allowbtnpress = 1;
      };
    };
    if(currentid == "twoone"){
      if(gamebtnspressed.twoone == "0"){
        allowbtnpress = 0;
        gamebtnspressed.twoone = "1";
        usercpubtnpress.twoone = "0";
        btnspressedid = "twoone";
        if(noofuserturns == 1){
          btnspressedid.first = "twoone";
        };
        if(noofuserturns == 2){
          btnspressedid.second= "twoone";
        };
        if(noofuserturns == 3){
          btnspressedid.third = "twoone";
        };
        if(noofuserturns == 4){
          btnspressedid.fourth = "twoone";
        };
      }
      else{
        allowbtnpress = 1;
      };
    };
    if(currentid == "twotwo"){
      if(gamebtnspressed.twotwo == "0"){
        allowbtnpress = 0;
        gamebtnspressed.twotwo = "1";
        usercpubtnpress.twotwo = "0";
        btnspressedid = "twoone";
        if(noofuserturns == 1){
          btnspressedid.first = "twoone";
        };
        if(noofuserturns == 2){
          btnspressedid.second= "twoone";
        };
        if(noofuserturns == 3){
          btnspressedid.third = "twoone";
        };
        if(noofuserturns == 4){
          btnspressedid.fourth = "twoone";
        };
      }
      else{
        allowbtnpress = 1;
      };
    };
    if(currentid == "twothree"){
      if(gamebtnspressed.twothree == "0"){
        allowbtnpress = 0;
        gamebtnspressed.twothree = "1";
        usercpubtnpress.twothree = "0";
        btnspressedid = "twothree";
        if(noofuserturns == 1){
          btnspressedid.first = "twothree";
        };
        if(noofuserturns == 2){
          btnspressedid.second= "twothree";
        };
        if(noofuserturns == 3){
          btnspressedid.third = "twothree";
        };
        if(noofuserturns == 4){
          btnspressedid.fourth = "twothree";
        };
      }
      else{
        allowbtnpress = 1;
      };
    };
    if(currentid == "threeone"){
      if(gamebtnspressed.threeone == "0"){
        allowbtnpress = 0;
        gamebtnspressed.threeone = "1";
        usercpubtnpress.threeone = "0";
        btnspressedid = "threeone";
        if(noofuserturns == 1){
          btnspressedid.first = "threeone";
        };
        if(noofuserturns == 2){
          btnspressedid.second= "threeone";
        };
        if(noofuserturns == 3){
          btnspressedid.third = "threeone";
        };
        if(noofuserturns == 4){
          btnspressedid.fourth = "threeone";
        };
      }
      else{
        allowbtnpress = 1;
      };
    };
    if(currentid == "threetwo"){
      if(gamebtnspressed.threetwo == "0"){
        allowbtnpress = 0;
        gamebtnspressed.threetwo = "1";
        usercpubtnpress.threetwo = "0";
        btnspressedid = "threetwo";
        if(noofuserturns == 1){
          btnspressedid.first = "threetwo";
        };
        if(noofuserturns == 2){
          btnspressedid.second= "threetwo";
        };
        if(noofuserturns == 3){
          btnspressedid.third = "threetwo";
        };
        if(noofuserturns == 4){
          btnspressedid.fourth = "threetwo";
        };
      }
      else{
        allowbtnpress = 1;
      };
    };
    if(currentid == "threethree"){
      if(gamebtnspressed.threethree == "0"){
        allowbtnpress = 0;
        gamebtnspressed.threethree = "1";
        usercpubtnpress.threethree = "0";
        btnspressedid = "threethree";
        if(noofuserturns == 1){
          btnspressedid.first = "threethree";
        };
        if(noofuserturns == 2){
          btnspressedid.second= "threethree";
        };
        if(noofuserturns == 3){
          btnspressedid.third = "threethree";
        };
        if(noofuserturns == 4){
          btnspressedid.fourth = "threethree";
        };
      }
      else{
        allowbtnpress = 1;
      };
    };

    if(allowbtnpress == "0"){
      setTimeout(xicon1, 20);
      setTimeout(xicon2, 40);
      setTimeout(xicon3, 60);
      setTimeout(xicon4, 80);
      setTimeout(xicon5, 100);
      setTimeout(xicon6, 120);
      setTimeout(xicon7, 140);
      setTimeout(xicon8, 160);
      setTimeout(xicon9, 180);
      setTimeout(xicon10, 200);
      setTimeout(xicon11, 220);
      setTimeout(xicon12, 240);

      function xicon1() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon1.png)";
      };
      function xicon2() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon2.png)";
      };
      function xicon3() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon3.png)";
      };
      function xicon4() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon4.png)";
      };
      function xicon5() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon5.png)";
      };
      function xicon6() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon6.png)";
      };
      function xicon7() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon7.png)";
      };
      function xicon8() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon8.png)";
      };
      function xicon9() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon9.png)";
      };
      function xicon10() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon10.png)";
      };
      function xicon11() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon11.png)";
      };
      function xicon12() {
        document.getElementById(currentid).style.backgroundImage = "url(xicon12.png)";
      };
    };
    cpubtnpressai();
  };
};

var currentyid = "";


function fadeiny() {
  alert(currentyid);

  setTimeout(circleicon1, 20);
  setTimeout(circleicon2, 40);
  setTimeout(circleicon3, 60);
  setTimeout(circleicon4, 80);
  setTimeout(circleicon5, 100);
  setTimeout(circleicon6, 120);
  setTimeout(circleicon7, 140);
  setTimeout(circleicon8, 160);
  setTimeout(circleicon9, 180);
  setTimeout(circleicon10, 200);
  setTimeout(circleicon11, 220);
  setTimeout(circleicon12, 240);

  function circleicon1() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon1.png)";
  };
  function circleicon2() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon2.png)";
  };
  function circleicon3() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon3.png)";
  };
  function circleicon4() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon4.png)";
  };
  function circleicon5() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon5.png)";
  };
  function circleicon6() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon6.png)";
  };
  function circleicon7() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon7.png)";
  };
  function circleicon8() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon8.png)";
  };
  function circleicon9() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon9.png)";
  };
  function circleicon10() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon10.png)";
  };
  function circleicon11() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon11.png)";
  };
  function circleicon12() {
    document.getElementById(currentyid).style.backgroundImage = "url(yicon12.png)";
  };
};

document.getElementById("oneone").style.top = "232px";
document.getElementById("oneone").style.left = "357.7px";

document.getElementById("onetwo").style.top = "232px";
document.getElementById("onetwo").style.left = "525.5px";

document.getElementById("onethree").style.top = "232px";
document.getElementById("onethree").style.left = "695px";

document.getElementById("twoone").style.top = "377px";
document.getElementById("twoone").style.left = "357.7px";

document.getElementById("twotwo").style.top = "377px";
document.getElementById("twotwo").style.left = "525.5px";

document.getElementById("twothree").style.top = "377px";
document.getElementById("twothree").style.left = "695px";

document.getElementById("threeone").style.top = "523px";
document.getElementById("threeone").style.left = "357.7px";

document.getElementById("threetwo").style.top = "523px";
document.getElementById("threetwo").style.left = "525.5px";

document.getElementById("threethree").style.top = "523px";
document.getElementById("threethree").style.left = "695px";

document.getElementById("1-1").addEventListener("click", function() {
  currentid = "oneone";
  fadeinx();
});
document.getElementById("1-2").addEventListener("click", function() {
  currentid = "onetwo";
  fadeinx();
});
document.getElementById("1-3").addEventListener("click", function() {
  currentid = "onethree";
  fadeinx();
});
document.getElementById("2-1").addEventListener("click", function() {
  currentid = "twoone";
  fadeinx();
});
document.getElementById("2-2").addEventListener("click", function() {
  currentid = "twotwo";
  fadeinx();
});
document.getElementById("2-3").addEventListener("click", function() {
  currentid = "twothree";
  fadeinx();
});
document.getElementById("3-1").addEventListener("click", function() {
  currentid = "threeone";
  fadeinx();
});
document.getElementById("3-2").addEventListener("click", function() {
  currentid = "threetwo";
  fadeinx();
});
document.getElementById("3-3").addEventListener("click", function() {
  currentid = "threethree";
  fadeinx();
});

document.getElementById("oneone").addEventListener("click", function() {
  currentid = "oneone";
  fadeinx();
});
document.getElementById("onetwo").addEventListener("click", function() {
  currentid = "onetwo";
  fadeinx();
});
document.getElementById("onethree").addEventListener("click", function() {
  currentid = "onethree";
  fadeinx();
});
document.getElementById("twoone").addEventListener("click", function() {
  currentid = "twoone";
  fadeinx();
});
document.getElementById("twotwo").addEventListener("click", function() {
  currentid = "twotwo";
  fadeinx();
});
document.getElementById("twothree").addEventListener("click", function() {
  currentid = "twothree";
  fadeinx();
});
document.getElementById("threeone").addEventListener("click", function() {
  currentid = "threeone";
  fadeinx();
});
document.getElementById("threetwo").addEventListener("click", function() {
  currentid = "threetwo";
  fadeinx();
});
document.getElementById("threethree").addEventListener("click", function() {
  currentid = "threethree";
  fadeinx();
});

var gamebtnspressed = {
  oneone: "0",
  onetwo: "0",
  onethree: "0",
  twoone: "0",
  twotwo: "0",
  twothree: "0",
  threeone: "0",
  threetwo: "0",
  threethree: "0"
};

function resetbtnspressed() {
  gamebtnspressed.oneone = "0";
  gamebtnspressed.onetwo = "0";
  gamebtnspressed.onethree = "0";
  gamebtnspressed.twoone = "0";
  gamebtnspressed.twotwo = "0";
  gamebtnspressed.twothree = "0";
  gamebtnspressed.threeone = "0";
  gamebtnspressed.threetwo = "0";
  gamebtnspressed.threethree = "0";
};

var usercpubtnpress = {        ////// 0 - USER, 1 - CPU
  oneone: "",
  onetwo: "",
  onethree: "",
  twoone: "",
  twotwo: "",
  twothree: "",
  threeone: "",
  threetwo: "",
  threethree: ""
};

function usercpubtnpressreset() {
  usercpubtnpress.oneone = "",
  usercpubtnpress.onetwo = "",
  usercpubtnpress.onethree = "",
  usercpubtnpress.twoone = "",
  usercpubtnpress.twotwo = "",
  usercpubtnpress.twothree = "",
  usercpubtnpress.threeone = "",
  usercpubtnpress.threetwo = "",
  usercpubtnpress.threethree = ""
};

var matchresults = {
  you : "0",
  cpu : "0"
};

var drawcheckerreasult = 0;

function drawchecker() {
  var drawcheckerbool = 1;
  if(usercpubtnpress.oneone == "0" && usercpubtnpress.twotwo == "0" && usercpubtnpress.threethree == ""|| usercpubtnpress.twotwo == "0" && usercpubtnpress.threethree == "0" && usercpubtnpress.oneone == ""|| usercpubtnpress.oneone == "0" && usercpubtnpress.threethree == "0" && usercpubtnpress.twotwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.onethree == "0" && usercpubtnpress.twotwo == "0" && usercpubtnpress.threethree == ""|| usercpubtnpress.twotwo == "0" && usercpubtnpress.threeone == "0" && usercpubtnpress.onethree == ""|| usercpubtnpress.onethree == "0" && usercpubtnpress.threeone == "0" && usercpubtnpress.twotwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.oneone == "0" && usercpubtnpress.onetwo == "0" && usercpubtnpress.onethree == ""|| usercpubtnpress.onetwo == "0" && usercpubtnpress.onethree == "0" && usercpubtnpress.oneone == ""|| usercpubtnpress.oneone == "0" && usercpubtnpress.onethree == "0" && usercpubtnpress.onetwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.onetwo == "0" && usercpubtnpress.twotwo == "0" && usercpubtnpress.threetwo == ""|| usercpubtnpress.twotwo == "0" && usercpubtnpress.threetwo == "0" && usercpubtnpress.onetwo == ""|| usercpubtnpress.onetwo == "0" && usercpubtnpress.threetwo == "0" && usercpubtnpress.twotwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.onethree == "0" && usercpubtnpress.twothree == "0" && usercpubtnpress.threethree == ""|| usercpubtnpress.twothree == "0" && usercpubtnpress.threethree == "0" && usercpubtnpress.onethree == ""|| usercpubtnpress.onethree == "0" && usercpubtnpress.threethree == "0" && usercpubtnpress.twothree == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.oneone == "0" && usercpubtnpress.onetwo == "0" && usercpubtnpress.onethree == ""|| usercpubtnpress.onetwo == "0" && usercpubtnpress.onethree == "0" && usercpubtnpress.oneone == ""|| usercpubtnpress.oneone == "0" && usercpubtnpress.onethree == "0" && usercpubtnpress.onetwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.twoone == "0" && usercpubtnpress.twotwo == "0" && usercpubtnpress.twothree == ""|| usercpubtnpress.twotwo == "0" && usercpubtnpress.threethree == "0" && usercpubtnpress.twoone == ""|| usercpubtnpress.twoone == "0" && usercpubtnpress.twothree == "0" && usercpubtnpress.twotwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.threeone == "0" && usercpubtnpress.threetwo == "0" && usercpubtnpress.threethree == ""|| usercpubtnpress.threetwo == "0" && usercpubtnpress.threethree == "0" && usercpubtnpress.threeone == ""|| usercpubtnpress.threeone == "0" && usercpubtnpress.threethree == "0" && usercpubtnpress.threetwo == ""){
      drawcheckerbool = 0;
  };


  if(usercpubtnpress.oneone == "1" && usercpubtnpress.twotwo == "1" && usercpubtnpress.threethree == ""|| usercpubtnpress.twotwo == "1" && usercpubtnpress.threethree == "1" && usercpubtnpress.oneone == ""|| usercpubtnpress.oneone == "1" && usercpubtnpress.threethree == "1" && usercpubtnpress.twotwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.onethree == "1" && usercpubtnpress.twotwo == "1" && usercpubtnpress.threethree == ""|| usercpubtnpress.twotwo == "1" && usercpubtnpress.threeone == "1" && usercpubtnpress.onethree == ""|| usercpubtnpress.onethree == "1" && usercpubtnpress.threeone == "1" && usercpubtnpress.twotwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.oneone == "1" && usercpubtnpress.onetwo == "1" && usercpubtnpress.onethree == ""|| usercpubtnpress.onetwo == "1" && usercpubtnpress.onethree == "1" && usercpubtnpress.oneone == ""|| usercpubtnpress.oneone == "1" && usercpubtnpress.onethree == "1" && usercpubtnpress.onetwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.onetwo == "1" && usercpubtnpress.twotwo == "1" && usercpubtnpress.threetwo == ""|| usercpubtnpress.twotwo == "1" && usercpubtnpress.threetwo == "1" && usercpubtnpress.onetwo == ""|| usercpubtnpress.onetwo == "1" && usercpubtnpress.threetwo == "1" && usercpubtnpress.twotwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.onethree == "1" && usercpubtnpress.twothree == "1" && usercpubtnpress.threethree == ""|| usercpubtnpress.twothree == "1" && usercpubtnpress.threethree == "1" && usercpubtnpress.onethree == ""|| usercpubtnpress.onethree == "1" && usercpubtnpress.threethree == "1" && usercpubtnpress.twothree == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.oneone == "1" && usercpubtnpress.onetwo == "1" && usercpubtnpress.onethree == ""|| usercpubtnpress.onetwo == "1" && usercpubtnpress.onethree == "1" && usercpubtnpress.oneone == ""|| usercpubtnpress.oneone == "1" && usercpubtnpress.onethree == "1" && usercpubtnpress.onetwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.twoone == "1" && usercpubtnpress.twotwo == "1" && usercpubtnpress.twothree == ""|| usercpubtnpress.twotwo == "1" && usercpubtnpress.threethree == "1" && usercpubtnpress.twoone == ""|| usercpubtnpress.twoone == "1" && usercpubtnpress.twothree == "1" && usercpubtnpress.twotwo == ""){
      drawcheckerbool = 0;
  };
  if(usercpubtnpress.threeone == "1" && usercpubtnpress.threetwo == "1" && usercpubtnpress.threethree == ""|| usercpubtnpress.threetwo == "1" && usercpubtnpress.threethree == "1" && usercpubtnpress.threeone == ""|| usercpubtnpress.threeone == "1" && usercpubtnpress.threethree == "1" && usercpubtnpress.threetwo == ""){
      drawcheckerbool = 0;
  };

  if(drawcheckerbool == 0){
    drawcheckerreasult = 0;
  };
  if(drawcheckerbool == 1){
    drawcheckerreasult = 1;
  };
};

var gamecompletioncheckerreasult = 0;

var gamewinnercheckerreasult = "";

function gamewinnerchecker() {      //// 0 - USER, 1 - CPU
  if(usercpubtnpress.oneone == "0" && usercpubtnpress.twotwo == "0" && usercpubtnpress.threethree == "0" || usercpubtnpress.onethree == "0" && usercpubtnpress.twotwo == "0" && usercpubtnpress.threeone == "0" || usercpubtnpress.oneone == "0" && usercpubtnpress.twoone == "0" && usercpubtnpress.threeone == "0" || usercpubtnpress.onetwo == "0" && usercpubtnpress.twotwo == "0" && usercpubtnpress.threetwo == "0" || usercpubtnpress.onethree == "0" && usercpubtnpress.twothree == "0" && usercpubtnpress.threethree == "0" || usercpubtnpress.oneone == "0" && usercpubtnpress.onetwo == "0" && usercpubtnpress.onethree == "0" || usercpubtnpress.twoone == "0" && usercpubtnpress.twotwo == "0" && usercpubtnpress.twothree == "0" || usercpubtnpress.threeone == "0" && usercpubtnpress.threetwo == "0" && usercpubtnpress.threethree == "0"){
    gamewinnercheckerreasult = 0;
  };
  if(usercpubtnpress.oneone == "1" && usercpubtnpress.twotwo == "1" && usercpubtnpress.threethree == "1" || usercpubtnpress.onethree == "1" && usercpubtnpress.twotwo == "1" && usercpubtnpress.threeone == "1" || usercpubtnpress.oneone == "1" && usercpubtnpress.twoone == "1" && usercpubtnpress.threeone == "1" || usercpubtnpress.onetwo == "1" && usercpubtnpress.twotwo == "1" && usercpubtnpress.threetwo == "1" || usercpubtnpress.onethree == "1" && usercpubtnpress.twothree == "1" && usercpubtnpress.threethree == "1" || usercpubtnpress.oneone == "1" && usercpubtnpress.onetwo == "1" && usercpubtnpress.onethree == "1" || usercpubtnpress.twoone == "1" && usercpubtnpress.twotwo == "1" && usercpubtnpress.twothree == "1" || usercpubtnpress.threeone == "1" && usercpubtnpress.threetwo == "1" && usercpubtnpress.threethree == "1"){
    gamewinnercheckerreasult = 1;
  };
};

function gamecompletionchecker() {
  if(gamebtnspressed.oneone == "1" && gamebtnspressed.onetwo == "1" && gamebtnspressed.onethree == "1" && gamebtnspressed.onethree == "1"  && gamebtnspressed.twoone == "1" && gamebtnspressed.twotwo == "1" && gamebtnspressed.twothree == "1" && gamebtnspressed.threeone == "1" && gamebtnspressed.threetwo == "1" && gamebtnspressed.threethree == "1"){
    gamecompletioncheckerreasult = 1;
  }
  else{
    gamecompletioncheckerreasult = 0;
  };
};

function postsinglegamecompletion() {

};

function postmatchcompletion() {

};

function postsinglegamedrawn() {

};

function cpubtnpressai() {

  var btnspressedid = {
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: ""
  };
  var cpubtnspressed = {
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: ""
  }
  gamecompletionchecker();
  if(gamecompletioncheckerreasult == "0"){
      drawchecker();
      if(drawcheckerreasult == "0"){
        var btnsuserpressedno = 0;
        if(usercpubtnpress.oneone == "0"){
          btnsuserpressedno++;
          if(btnspressedid.first == ""){
            btnspressedid.first = "oneone";
          }
          else if(btnspressedid.second == ""){
            btnspressedid.second = "oneone";
          }
          else if(btnspressedid.third == ""){
            btnspressedid.third = "oneone";
          }
          else if(btnspressedid.fourth == ""){
            btnspressedid.fourth = "oneone";
          }
          else{
            btnspressedid.fifth = "oneone";
          };
        };
        if(usercpubtnpress.onetwo == "0"){
          btnsuserpressedno++;
          if(btnspressedid.first == ""){
            btnspressedid.first = "onetwo";
          }
          else if(btnspressedid.second == ""){
            btnspressedid.second = "onetwo";
          }
          else if(btnspressedid.third == ""){
            btnspressedid.third = "onetwo";
          }
          else if(btnspressedid.fourth == ""){
            btnspressedid.fourth = "onetwo";
          }
          else{
            btnspressedid.fifth = "onetwo";
          };
        };
        if(usercpubtnpress.onethree == "0"){
          btnsuserpressedno++;
          if(btnspressedid.first == ""){
            btnspressedid.first = "onethree";
          }
          else if(btnspressedid.second == ""){
            btnspressedid.second = "onethree";
          }
          else if(btnspressedid.third == ""){
            btnspressedid.third = "onethree";
          }
          else if(btnspressedid.fourth == ""){
            btnspressedid.fourth = "onethree";
          }
          else{
            btnspressedid.fifth = "onethree";
          };
        };
        if(usercpubtnpress.twoone == "0"){
          btnsuserpressedno++;
          if(btnspressedid.first == ""){
            btnspressedid.first = "twoone";
          }
          else if(btnspressedid.second == ""){
            btnspressedid.second = "twoone";
          }
          else if(btnspressedid.third == ""){
            btnspressedid.third = "twoone";
          }
          else if(btnspressedid.fourth == ""){
            btnspressedid.fourth = "twoone";
          }
          else{
            btnspressedid.fifth = "twoone";
          };
        };
        if(usercpubtnpress.twotwo == "0"){
          btnsuserpressedno++;
          if(btnspressedid.first == ""){
            btnspressedid.first = "twotwo";
          }
          else if(btnspressedid.second == ""){
            btnspressedid.second = "twotwo";
          }
          else if(btnspressedid.third == ""){
            btnspressedid.third = "twotwo";
          }
          else if(btnspressedid.fourth == ""){
            btnspressedid.fourth = "twotwo";
          }
          else{
            btnspressedid.fifth = "twotwo";
          };
        };
        if(usercpubtnpress.twothree == "0"){
          btnsuserpressedno++;
          if(btnspressedid.first == ""){
            btnspressedid.first = "twothree";
          }
          else if(btnspressedid.second == ""){
            btnspressedid.second = "twothree";
          }
          else if(btnspressedid.third == ""){
            btnspressedid.third = "twothree";
          }
          else if(btnspressedid.fourth == ""){
            btnspressedid.fourth = "twothree";
          }
          else{
            btnspressedid.fifth = "twothree";
          };
        };
        if(usercpubtnpress.threeone == "0"){
          btnsuserpressedno++;
          if(btnspressedid.first == ""){
            btnspressedid.first = "threeone";
          }
          else if(btnspressedid.second == ""){
            btnspressedid.second = "threeone";
          }
          else if(btnspressedid.third == ""){
            btnspressedid.third = "threeone";
          }
          else if(btnspressedid.fourth == ""){
            btnspressedid.fourth = "threeone";
          }
          else{
            btnspressedid.fifth = "threeone";
          };
        };
        if(usercpubtnpress.threetwo == "0"){
          btnsuserpressedno++;
          if(btnspressedid.first == ""){
            btnspressedid.first = "threetwo";
          }
          else if(btnspressedid.second == ""){
            btnspressedid.second = "threetwo";
          }
          else if(btnspressedid.third == ""){
            btnspressedid.third = "threetwo";
          }
          else if(btnspressedid.fourth == ""){
            btnspressedid.fourth = "threetwo";
          }
          else{
            btnspressedid.fifth = "threetwo";
          };
        };
        if(usercpubtnpress.threethree == "0"){
          btnsuserpressedno++;
          if(btnspressedid.first == ""){
            btnspressedid.first = "threethree";
          }
          else if(btnspressedid.second == ""){
            btnspressedid.second = "threethree";
          }
          else if(btnspressedid.third == ""){
            btnspressedid.third = "threethree";
          }
          else if(btnspressedid.fourth == ""){
            btnspressedid.fourth = "threethree";
          }
          else{
            btnspressedid.fifth = "threethree";
          };
        };

        var buttontopressid = "";
        //var algorithmno = 2;

        var combinationp1 = "";
        var combinationp2 = "";

        if(btnsuserpressedno == 0){
          //algorithmno = 1;
          var randombtnpressint = Math.floor(Math.random() * 9);
          if(randombtnpressint == 0){
            buttontopressid = "oneone";
          };
          if(randombtnpressint == 1){
            buttontopressid = "onetwo";
          };
          if(randombtnpressint == 2){
            buttontopressid = "onethree";
          };
          if(randombtnpressint == 3){
            buttontopressid = "twoone";
          };
          if(randombtnpressint == 4){
            buttontopressid = "twotwo";
          };
          if(randombtnpressint == 5){
            buttontopressid = "twothree";
          };
          if(randombtnpressint == 6){
            buttontopressid = "threeone";
          };
          if(randombtnpressint == 7){
            buttontopressid = "threetwo";
          };
          if(randombtnpressint == 8){
            buttontopressid = "threethree";
          };
          cpubtnspressed.first = buttontopressid;
          combinationp1 = buttontopressid;
        };

        if(btnsuserpressedno == 1){
          if(cpubtnspressed.first == ""){
            if(btnspressedid.first == "oneone"){
              var randombtnpress = Math.floor(Math.random() * 8);
              if(randombtnpress == 0){
                buttontopressid = "onetwo";
              };
              if(randombtnpress == 1){
                buttontopressid = "onethree";
              };
              if(randombtnpress == 2){
                buttontopressid = "twoone";
              };
              if(randombtnpress == 3){
                buttontopressid = "twotwo";
              };
              if(randombtnpress == 4){
                buttontopressid = "twothree";
              };
              if(randombtnpress == 5){
                buttontopressid = "threeone";
              };
              if(randombtnpress == 6){
                buttontopressid = "threetwo";
              };
              if(randombtnpress == 7){
                buttontopressid = "threethree";
              };
            };
            if(btnspressedid.first == "onetwo"){
              var randombtnpress = Math.floor(Math.random() * 8);
              if(randombtnpress == 0){
                buttontopressid = "oneone";
              };
              if(randombtnpress == 1){
                buttontopressid = "onethree";
              };
              if(randombtnpress == 2){
                buttontopressid = "twoone";
              };
              if(randombtnpress == 3){
                buttontopressid = "twotwo";
              };
              if(randombtnpress == 4){
                buttontopressid = "twothree";
              };
              if(randombtnpress == 5){
                buttontopressid = "threeone";
              };
              if(randombtnpress == 6){
                buttontopressid = "threetwo";
              };
              if(randombtnpress == 7){
                buttontopressid = "threethree";
              };
            };
            if(btnspressedid.first == "onethree"){
              var randombtnpress = Math.floor(Math.random() * 8);
              if(randombtnpress == 0){
                buttontopressid = "oneone";
              };
              if(randombtnpress == 1){
                buttontopressid = "onetwo";
              };
              if(randombtnpress == 2){
                buttontopressid = "twoone";
              };
              if(randombtnpress == 3){
                buttontopressid = "twotwo";
              };
              if(randombtnpress == 4){
                buttontopressid = "twothree";
              };
              if(randombtnpress == 5){
                buttontopressid = "threeone";
              };
              if(randombtnpress == 6){
                buttontopressid = "threetwo";
              };
              if(randombtnpress == 7){
                buttontopressid = "threethree";
              };
            };
            if(btnspressedid.first == "twoone"){
              var randombtnpress = Math.floor(Math.random() * 8);
              if(randombtnpress == 0){
                buttontopressid = "oneone";
              };
              if(randombtnpress == 1){
                buttontopressid = "onetwo";
              };
              if(randombtnpress == 2){
                buttontopressid = "onethree";
              };
              if(randombtnpress == 3){
                buttontopressid = "twotwo";
              };
              if(randombtnpress == 4){
                buttontopressid = "twothree";
              };
              if(randombtnpress == 5){
                buttontopressid = "threeone";
              };
              if(randombtnpress == 6){
                buttontopressid = "threetwo";
              };
              if(randombtnpress == 7){
                buttontopressid = "threethree";
              };
            };
            if(btnspressedid.first == "twotwo"){
              var randombtnpress = Math.floor(Math.random() * 8);
              if(randombtnpress == 0){
                buttontopressid = "oneone";
              };
              if(randombtnpress == 1){
                buttontopressid = "onetwo";
              };
              if(randombtnpress == 2){
                buttontopressid = "onethree";
              };
              if(randombtnpress == 3){
                buttontopressid = "twoone";
              };
              if(randombtnpress == 4){
                buttontopressid = "twothree";
              };
              if(randombtnpress == 5){
                buttontopressid = "threeone";
              };
              if(randombtnpress == 6){
                buttontopressid = "threetwo";
              };
              if(randombtnpress == 7){
                buttontopressid = "threethree";
              };
            };
            if(btnspressedid.first == "twothree"){
              var randombtnpress = Math.floor(Math.random() * 8);
              if(randombtnpress == 0){
                buttontopressid = "oneone";
              };
              if(randombtnpress == 1){
                buttontopressid = "onetwo";
              };
              if(randombtnpress == 2){
                buttontopressid = "onethree";
              };
              if(randombtnpress == 3){
                buttontopressid = "twoone";
              };
              if(randombtnpress == 4){
                buttontopressid = "twotwo";
              };
              if(randombtnpress == 5){
                buttontopressid = "threeone";
              };
              if(randombtnpress == 6){
                buttontopressid = "threetwo";
              };
              if(randombtnpress == 7){
                buttontopressid = "threethree";
              };
            };
            if(btnspressedid.first == "threeone"){
              var randombtnpress = Math.floor(Math.random() * 8);
              if(randombtnpress == 0){
                buttontopressid = "oneone";
              };
              if(randombtnpress == 1){
                buttontopressid = "onetwo";
              };
              if(randombtnpress == 2){
                buttontopressid = "onethree";
              };
              if(randombtnpress == 3){
                buttontopressid = "twoone";
              };
              if(randombtnpress == 4){
                buttontopressid = "twotwo";
              };
              if(randombtnpress == 5){
                buttontopressid = "twothree";
              };
              if(randombtnpress == 6){
                buttontopressid = "threetwo";
              };
              if(randombtnpress == 7){
                buttontopressid = "threethree";
              };
            };
            if(btnspressedid.first == "threetwo"){
              var randombtnpress = Math.floor(Math.random() * 8);
              if(randombtnpress == 0){
                buttontopressid = "oneone";
              };
              if(randombtnpress == 1){
                buttontopressid = "onetwo";
              };
              if(randombtnpress == 2){
                buttontopressid = "onethree";
              };
              if(randombtnpress == 3){
                buttontopressid = "twoone";
              };
              if(randombtnpress == 4){
                buttontopressid = "twotwo";
              };
              if(randombtnpress == 5){
                buttontopressid = "twothree";
              };
              if(randombtnpress == 6){
                buttontopressid = "threeone";
              };
              if(randombtnpress == 7){
                buttontopressid = "threethree";
              };
            };
            if(btnspressedid.first == "threethree"){
              var randombtnpress = Math.floor(Math.random() * 8);
              if(randombtnpress == 0){
                buttontopressid = "oneone";
              };
              if(randombtnpress == 1){
                buttontopressid = "onetwo";
              };
              if(randombtnpress == 2){
                buttontopressid = "onethree";
              };
              if(randombtnpress == 3){
                buttontopressid = "twoone";
              };
              if(randombtnpress == 4){
                buttontopressid = "twotwo";
              };
              if(randombtnpress == 5){
                buttontopressid = "twothree";
              };
              if(randombtnpress == 6){
                buttontopressid = "threeone";
              };
              if(randombtnpress == 7){
                buttontopressid = "threetwo";
              };
            };
            cpubtnspressed.first = buttontopressid;
            combinationp1 = buttontopressid;
          };
          if(cpubtnspressed.first != ""){
            //if(btnspressedid.first == "oneone"){          ///suspicon
              var randomsecondpressint = Math.floor(Math.random() * 2);
              if(randomsecondpressint == 0){        ///////next block
                var error = 0;
                while(error == 0){
                  if(cpubtnspressed.first == "oneone"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "onetwo"){
                        error = 1;
                        buttontopressid = "onetwo";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "twotwo"){
                        error = 1;
                        buttontopressid = "twotwo";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "twoone"){
                        error = 1;
                        buttontopressid = "twoone";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "onetwo"){
                    var randombtnpress = Math.floor(Math.random() * 5);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "oneone"){
                        error = 1;
                        buttontopressid = "oneone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "twoone"){
                        error = 1;
                        buttontopressid = "twoone";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "twotwo"){
                        error = 1;
                        buttontopressid = "twotwo";
                      };
                    };
                    if(randombtnpress == 3){
                      if(btnspressedid.first != "twothree"){
                        error = 1;
                        buttontopressid = "twothree";
                      };
                    };
                    if(randombtnpress == 4){
                      if(btnspressedid.first != "onethree"){
                        error = 1;
                        buttontopressid = "onethree";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "onethree"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "onetwo"){
                        error = 1;
                        buttontopressid = "onetwo";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "twotwo"){
                        error = 1;
                        buttontopressid = "twotwo";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "twothree"){
                        error = 1;
                        buttontopressid = "twothree";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "twoone"){
                    var randombtnpress = Math.floor(Math.random() * 5);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "oneone"){
                        error = 1;
                        buttontopressid = "oneone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "onetwo"){
                        error = 1;
                        buttontopressid = "onetwo";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "twotwo"){
                        error = 1;
                        buttontopressid = "twotwo";
                      };
                    };
                    if(randombtnpress == 3){
                      if(btnspressedid.first != "threetwo"){
                        error = 1;
                        buttontopressid = "threetwo";
                      };
                    };
                    if(randombtnpress == 4){
                      if(btnspressedid.first != "threeone"){
                        error = 1;
                        buttontopressid = "threeone";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "twotwo"){
                    var randombtnpress = Math.floor(Math.random() * 8);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "oneone"){
                        error = 1;
                        buttontopressid = "oneone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "onetwo"){
                        error = 1;
                        buttontopressid = "onetwo";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "onethree"){
                        error = 1;
                        buttontopressid = "onethree";
                      };
                    };
                    if(randombtnpress == 3){
                      if(btnspressedid.first != "twothree"){
                        error = 1;
                        buttontopressid = "twothree";
                      };
                    };
                    if(randombtnpress == 4){
                      if(btnspressedid.first != "threethree"){
                        error = 1;
                        buttontopressid = "threethree";
                      };
                    };
                    if(randombtnpress == 5){
                      if(btnspressedid.first != "threetwo"){
                        error = 1;
                        buttontopressid = "threetwo";
                      };
                    };
                    if(randombtnpress == 6){
                      if(btnspressedid.first != "threeone"){
                        error = 1;
                        buttontopressid = "threeone";
                      };
                    };
                    if(randombtnpress == 7){
                      if(btnspressedid.first != "twoone"){
                        error = 1;
                        buttontopressid = "twoone";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "twothree"){
                    var randombtnpress = Math.floor(Math.random() * 5);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "onethree"){
                        error = 1;
                        buttontopressid = "onethree";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "onetwo"){
                        error = 1;
                        buttontopressid = "onetwo";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "twotwo"){
                        error = 1;
                        buttontopressid = "twotwo";
                      };
                    };
                    if(randombtnpress == 3){
                      if(btnspressedid.first != "threetwo"){
                        error = 1;
                        buttontopressid = "threetwo";
                      };
                    };
                    if(randombtnpress == 4){
                      if(btnspressedid.first != "threethree"){
                        error = 1;
                        buttontopressid = "threethree";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "threeone"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "twoone"){
                        error = 1;
                        buttontopressid = "twoone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "twotwo"){
                        error = 1;
                        buttontopressid = "twotwo";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "threetwo"){
                        error = 1;
                        buttontopressid = "threetwo";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "threetwo"){
                    var randombtnpress = Math.floor(Math.random() * 5);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "threeone"){
                        error = 1;
                        buttontopressid = "threeone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "twoone"){
                        error = 1;
                        buttontopressid = "twoone";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "twotwo"){
                        error = 1;
                        buttontopressid = "twotwo";
                      };
                    };
                    if(randombtnpress == 3){
                      if(btnspressedid.first != "twothree"){
                        error = 1;
                        buttontopressid = "twothree";
                      };
                    };
                    if(randombtnpress == 4){
                      if(btnspressedid.first != "threethree"){
                        error = 1;
                        buttontopressid = "threethree";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "threethree"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "threetwo"){
                        error = 1;
                        buttontopressid = "threetwo";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "twotwo"){
                        error = 1;
                        buttontopressid = "twotwo";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "twothree"){
                        error = 1;
                        buttontopressid = "twothree";
                      };
                    };
                  };
                };
                cpubtnspressed.second = buttontopressid;
              };
              if(randomsecondpressint == 1){                        ///////next of next block
                var error = 0;
                while(error == 0){
                  if(cpubtnspressed.first == "oneone"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "onethree"){
                        error = 1;
                        buttontopressid = "onethree";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "threethree"){
                        error = 1;
                        buttontopressid = "threethree";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "threeone"){
                        error = 1;
                        buttontopressid = "threeone";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "onetwo"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "oneone"){
                        error = 1;
                        buttontopressid = "oneone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "threetwo"){
                        error = 1;
                        buttontopressid = "threetwo";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "onethree"){
                        error = 1;
                        buttontopressid = "onethree";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "onethree"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "oneone"){
                        error = 1;
                        buttontopressid = "oneone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "threeone"){
                        error = 1;
                        buttontopressid = "threeone";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "threethree"){
                        error = 1;
                        buttontopressid = "threethree";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "twoone"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "oneone"){
                        error = 1;
                        buttontopressid = "oneone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "twothree"){
                        error = 1;
                        buttontopressid = "twothree";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "threeone"){
                        error = 1;
                        buttontopressid = "threeone";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "twotwo"){
                    var randombtnpress = Math.floor(Math.random() * 8);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "oneone"){
                        error = 1;
                        buttontopressid = "oneone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "onetwo"){
                        error = 1;
                        buttontopressid = "onetwo";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "onethree"){
                        error = 1;
                        buttontopressid = "onethree";
                      };
                    };
                    if(randombtnpress == 3){
                      if(btnspressedid.first != "twothree"){
                        error = 1;
                        buttontopressid = "twothree";
                      };
                    };
                    if(randombtnpress == 4){
                      if(btnspressedid.first != "threethree"){
                        error = 1;
                        buttontopressid = "threethree";
                      };
                    };
                    if(randombtnpress == 5){
                      if(btnspressedid.first != "threetwo"){
                        error = 1;
                        buttontopressid = "threetwo";
                      };
                    };
                    if(randombtnpress == 6){
                      if(btnspressedid.first != "threeone"){
                        error = 1;
                        buttontopressid = "threeone";
                      };
                    };
                    if(randombtnpress == 7){
                      if(btnspressedid.first != "twoone"){
                        error = 1;
                        buttontopressid = "twoone";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "twothree"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "onethree"){
                        error = 1;
                        buttontopressid = "onethree";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "twoone"){
                        error = 1;
                        buttontopressid = "twoone";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "threethree"){
                        error = 1;
                        buttontopressid = "threethree";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "threeone"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "oneone"){
                        error = 1;
                        buttontopressid = "oneone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "onethree"){
                        error = 1;
                        buttontopressid = "onethree";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "threethree"){
                        error = 1;
                        buttontopressid = "threethree";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "threetwo"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "threeone"){
                        error = 1;
                        buttontopressid = "threeone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "onetwo"){
                        error = 1;
                        buttontopressid = "onetwo";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "threethree"){
                        error = 1;
                        buttontopressid = "threethree";
                      };
                    };
                  };
                  if(cpubtnspressed.first == "threethree"){
                    var randombtnpress = Math.floor(Math.random() * 3);
                    if(randombtnpress == 0){
                      if(btnspressedid.first != "threeone"){
                        error = 1;
                        buttontopressid = "threeone";
                      };
                    };
                    if(randombtnpress == 1){
                      if(btnspressedid.first != "oneone"){
                        error = 1;
                        buttontopressid = "oneone";
                      };
                    };
                    if(randombtnpress == 2){
                      if(btnspressedid.first != "onethree"){
                        error = 1;
                        buttontopressid = "onethree";
                      };
                    };
                  };
                };
              };
              cpubtnspressed.second = buttontopressid;
          };
        };

        if(btnsuserpressedno == 2){
          if(cpubtnspressed.second == ""){
            var randomsecondpressint = Math.floor(Math.random() * 2);
            if(randomsecondpressint == 0){        ///////next block
              var error = 0;
              while(error == 0){
                if(cpubtnspressed.first == "oneone"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                      error = 1;
                      buttontopressid = "onetwo";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                      error = 1;
                      buttontopressid = "twotwo";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                      error = 1;
                      buttontopressid = "twoone";
                    };
                  };
                };
                if(cpubtnspressed.first == "onetwo"){
                  var randombtnpress = Math.floor(Math.random() * 5);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                      error = 1;
                      buttontopressid = "oneone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                      error = 1;
                      buttontopressid = "twoone";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                      error = 1;
                      buttontopressid = "twotwo";
                    };
                  };
                  if(randombtnpress == 3){
                    if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                      error = 1;
                      buttontopressid = "twothree";
                    };
                  };
                  if(randombtnpress == 4){
                    if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                      error = 1;
                      buttontopressid = "onethree";
                    };
                  };
                };
                if(cpubtnspressed.first == "onethree"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                      error = 1;
                      buttontopressid = "onetwo";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                      error = 1;
                      buttontopressid = "twotwo";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                      error = 1;
                      buttontopressid = "twothree";
                    };
                  };
                };
                if(cpubtnspressed.first == "twoone"){
                  var randombtnpress = Math.floor(Math.random() * 5);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                      error = 1;
                      buttontopressid = "oneone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                      error = 1;
                      buttontopressid = "onetwo";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                      error = 1;
                      buttontopressid = "twotwo";
                    };
                  };
                  if(randombtnpress == 3){
                    if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                      error = 1;
                      buttontopressid = "threetwo";
                    };
                  };
                  if(randombtnpress == 4){
                    if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                      error = 1;
                      buttontopressid = "threeone";
                    };
                  };
                };
                if(cpubtnspressed.first == "twotwo"){
                  var randombtnpress = Math.floor(Math.random() * 8);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                      error = 1;
                      buttontopressid = "oneone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                      error = 1;
                      buttontopressid = "onetwo";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                      error = 1;
                      buttontopressid = "onethree";
                    };
                  };
                  if(randombtnpress == 3){
                    if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                      error = 1;
                      buttontopressid = "twothree";
                    };
                  };
                  if(randombtnpress == 4){
                    if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                      error = 1;
                      buttontopressid = "threethree";
                    };
                  };
                  if(randombtnpress == 5){
                    if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                      error = 1;
                      buttontopressid = "threetwo";
                    };
                  };
                  if(randombtnpress == 6){
                    if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                      error = 1;
                      buttontopressid = "threeone";
                    };
                  };
                  if(randombtnpress == 7){
                    if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                      error = 1;
                      buttontopressid = "twoone";
                    };
                  };
                };
                if(cpubtnspressed.first == "twothree"){
                  var randombtnpress = Math.floor(Math.random() * 5);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                      error = 1;
                      buttontopressid = "onethree";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                      error = 1;
                      buttontopressid = "onetwo";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                      error = 1;
                      buttontopressid = "twotwo";
                    };
                  };
                  if(randombtnpress == 3){
                    if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                      error = 1;
                      buttontopressid = "threetwo";
                    };
                  };
                  if(randombtnpress == 4){
                    if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                      error = 1;
                      buttontopressid = "threethree";
                    };
                  };
                };
                if(cpubtnspressed.first == "threeone"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                      error = 1;
                      buttontopressid = "twoone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                      error = 1;
                      buttontopressid = "twotwo";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                      error = 1;
                      buttontopressid = "threetwo";
                    };
                  };
                };
                if(cpubtnspressed.first == "threetwo"){
                  var randombtnpress = Math.floor(Math.random() * 5);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                      error = 1;
                      buttontopressid = "threeone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                      error = 1;
                      buttontopressid = "twoone";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                      error = 1;
                      buttontopressid = "twotwo";
                    };
                  };
                  if(randombtnpress == 3){
                    if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                      error = 1;
                      buttontopressid = "twothree";
                    };
                  };
                  if(randombtnpress == 4){
                    if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                      error = 1;
                      buttontopressid = "threethree";
                    };
                  };
                };
                if(cpubtnspressed.first == "threethree"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                      error = 1;
                      buttontopressid = "threetwo";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                      error = 1;
                      buttontopressid = "twotwo";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                      error = 1;
                      buttontopressid = "twothree";
                    };
                  };
                };
              };
              cpubtnspressed.second = buttontopressid;
            };
            if(randomsecondpressint == 1){                        ///////next of next block
              var error = 0;
              while(error == 0){
                if(cpubtnspressed.first == "oneone"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                      error = 1;
                      buttontopressid = "onethree";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                      error = 1;
                      buttontopressid = "threethree";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                      error = 1;
                      buttontopressid = "threeone";
                    };
                  };
                };
                if(cpubtnspressed.first == "onetwo"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                      error = 1;
                      buttontopressid = "oneone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                      error = 1;
                      buttontopressid = "threetwo";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                      error = 1;
                      buttontopressid = "onethree";
                    };
                  };
                };
                if(cpubtnspressed.first == "onethree"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                      error = 1;
                      buttontopressid = "oneone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                      error = 1;
                      buttontopressid = "threeone";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                      error = 1;
                      buttontopressid = "threethree";
                    };
                  };
                };
                if(cpubtnspressed.first == "twoone"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                      error = 1;
                      buttontopressid = "oneone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                      error = 1;
                      buttontopressid = "twothree";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                      error = 1;
                      buttontopressid = "threeone";
                    };
                  };
                };
                if(cpubtnspressed.first == "twotwo"){
                  var randombtnpress = Math.floor(Math.random() * 8);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                      error = 1;
                      buttontopressid = "oneone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                      error = 1;
                      buttontopressid = "onetwo";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                      error = 1;
                      buttontopressid = "onethree";
                    };
                  };
                  if(randombtnpress == 3){
                    if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                      error = 1;
                      buttontopressid = "twothree";
                    };
                  };
                  if(randombtnpress == 4){
                    if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                      error = 1;
                      buttontopressid = "threethree";
                    };
                  };
                  if(randombtnpress == 5){
                    if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                      error = 1;
                      buttontopressid = "threetwo";
                    };
                  };
                  if(randombtnpress == 6){
                    if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                      error = 1;
                      buttontopressid = "threeone";
                    };
                  };
                  if(randombtnpress == 7){
                    if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                      error = 1;
                      buttontopressid = "twoone";
                    };
                  };
                };
                if(cpubtnspressed.first == "twothree"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                      error = 1;
                      buttontopressid = "onethree";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                      error = 1;
                      buttontopressid = "twoone";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                      error = 1;
                      buttontopressid = "threethree";
                    };
                  };
                };
                if(cpubtnspressed.first == "threeone"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                      error = 1;
                      buttontopressid = "oneone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                      error = 1;
                      buttontopressid = "onethree";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                      error = 1;
                      buttontopressid = "threethree";
                    };
                  };
                };
                if(cpubtnspressed.first == "threetwo"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                      error = 1;
                      buttontopressid = "threeone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                      error = 1;
                      buttontopressid = "onetwo";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                      error = 1;
                      buttontopressid = "threethree";
                    };
                  };
                };
                if(cpubtnspressed.first == "threethree"){
                  var randombtnpress = Math.floor(Math.random() * 3);
                  if(randombtnpress == 0){
                    if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                      error = 1;
                      buttontopressid = "threeone";
                    };
                  };
                  if(randombtnpress == 1){
                    if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                      error = 1;
                      buttontopressid = "oneone";
                    };
                  };
                  if(randombtnpress == 2){
                    if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                      error = 1;
                      buttontopressid = "onethree";
                    };
                  };
                };
              };
            };
            cpubtnspressed.second = buttontopressid;
          };

          //if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "onetwo") || (cpubtnspressed.second == "onetwo" && cpubtnspressed.first == "oneone")){

          //};
          //if((cpubtnspressed.second == "onetwo" && cpubtnspressed.first == "onethree") || (cpubtnspressed.second == "onethree" && cpubtnspressed.first == "onetwo")){

          //};

          ////
          if(cpubtnspressed.second != ""){
            var randomalgorithmint = Math.floor(Math.random() * 2);
            if(randomalgorithmint == 0){           //////////////// OBSTRUCT USER MOVE IF POSSIBLE OR ELSE NEXT ALOGRITHM - ALORITHM
              if((btnspressedid.second == "oneone" && btnspressedid.first == "onetwo") || (btnspressedid.second == "onetwo" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onetwo" && btnspressedid.first == "onethree") || (btnspressedid.second == "onethree" && btnspressedid.first == "onetwo")){
                if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "twoone" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "twoone")){
                if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree"){
                  buttontopressid = "twothree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "twotwo" && btnspressedid.first == "twothree") || (btnspressedid.second == "twothree" && btnspressedid.first == "twotwo")){
                if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"){
                  buttontopressid = "twoone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threeone" && btnspressedid.first == "threetwo") || (btnspressedid.second == "threetwo" && btnspressedid.first == "threeone")){
                if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threetwo" && btnspressedid.first == "threethree") || (btnspressedid.second == "threethree" && btnspressedid.first == "threetwo")){
                if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone"){
                  buttontopressid = "onethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "oneone" && btnspressedid.first == "twoone") || (btnspressedid.second == "twoone" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone"){
                  buttontopressid = "threeone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threeone" && btnspressedid.first == "twoone") || (btnspressedid.second == "twoone" && btnspressedid.first == "threeone")){
                if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onetwo" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "onetwo")){
                if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo"){
                  buttontopressid = "threetwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threetwo" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "threetwo")){
                if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"){
                  buttontopressid = "onetwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onethree" && btnspressedid.first == "twothree") || (btnspressedid.second == "twothree" && btnspressedid.first == "onethree")){
                if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threethree" && btnspressedid.first == "twothree") || (btnspressedid.second == "twothree" && btnspressedid.first == "threethree")){
                if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "oneone" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threethree" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "threethree")){
                if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onethree" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "onethree")){
                if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone"){
                  buttontopressid = "threeone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threeone" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "threeone")){
                if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "oneone" && btnspressedid.first == "threeone") || (btnspressedid.second == "threeone" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"){
                  buttontopressid = "twoone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onetwo" && btnspressedid.first == "threetwo") || (btnspressedid.second == "threetwo" && btnspressedid.first == "onetwo")){
                if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onethree" && btnspressedid.first == "threethree") || (btnspressedid.second == "threethree" && btnspressedid.first == "onethree")){
                if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree"){
                  buttontopressid = "twothree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "oneone" && btnspressedid.first == "onethree") || (btnspressedid.second == "onethree" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"){
                  buttontopressid = "onetwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "twoone" && btnspressedid.first == "twothree") || (btnspressedid.second == "twothree" && btnspressedid.first == "twoone")){
                if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threeone" && btnspressedid.first == "threethree") || (btnspressedid.second == "threethree" && btnspressedid.first == "threeone")){
                if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo"){
                  buttontopressid = "threetwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "oneone" && btnspressedid.first == "threethree") || (btnspressedid.second == "threethree" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onethree" && btnspressedid.first == "threeone") || (btnspressedid.second == "threeone" && btnspressedid.first == "onethree")){
                if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              cpubtnspressed.third = buttontopressid;
            };

            var thirdalgorithmpass = 0;

            if(randomalgorithmint == 1){            /////////////// CONTINUE PREVIOUS MOVE - ALOGRITHM
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "onetwo") || (cpubtnspressed.second == "onetwo" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onetwo" && cpubtnspressed.first == "onethree") || (cpubtnspressed.second == "onethree" && cpubtnspressed.first == "onetwo")){
                if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "twoone" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "twoone")){
                if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                  buttontopressid = "twothree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "twothree") || (cpubtnspressed.second == "twothree" && cpubtnspressed.first == "twotwo")){
                if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                  buttontopressid = "twoone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threeone" && cpubtnspressed.first == "threetwo") || (cpubtnspressed.second == "threetwo" && cpubtnspressed.first == "threeone")){
                if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threetwo" && cpubtnspressed.first == "threethree") || (cpubtnspressed.second == "threethree" && cpubtnspressed.first == "threetwo")){
                if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                  buttontopressid = "onethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "twoone") || (cpubtnspressed.second == "twoone" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                  buttontopressid = "threeone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threeone" && cpubtnspressed.first == "twoone") || (cpubtnspressed.second == "twoone" && cpubtnspressed.first == "threeone")){
                if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onetwo" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "onetwo")){
                if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                  buttontopressid = "threetwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threetwo" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "threetwo")){
                if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                  buttontopressid = "onetwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onethree" && cpubtnspressed.first == "twothree") || (cpubtnspressed.second == "twothree" && cpubtnspressed.first == "onethree")){
                if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threethree" && cpubtnspressed.first == "twothree") || (cpubtnspressed.second == "twothree" && cpubtnspressed.first == "threethree")){
                if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threethree" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "threethree")){
                if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onethree" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "onethree")){
                if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                  buttontopressid = "threeone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threeone" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "threeone")){
                if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "threeone") || (cpubtnspressed.second == "threeone" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                  buttontopressid = "twoone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onetwo" && cpubtnspressed.first == "threetwo") || (cpubtnspressed.second == "threetwo" && cpubtnspressed.first == "onetwo")){
                if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onethree" && cpubtnspressed.first == "threethree") || (cpubtnspressed.second == "threethree" && cpubtnspressed.first == "onethree")){
                if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                  buttontopressid = "twothree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "onethree") || (cpubtnspressed.second == "onethree" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                  buttontopressid = "onetwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "twoone" && cpubtnspressed.first == "twothree") || (cpubtnspressed.second == "twothree" && cpubtnspressed.first == "twoone")){
                if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threeone" && cpubtnspressed.first == "threethree") || (cpubtnspressed.second == "threethree" && cpubtnspressed.first == "threeone")){
                if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                  buttontopressid = "threetwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "threethree") || (cpubtnspressed.second == "threethree" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onethree" && cpubtnspressed.first == "threeone") || (cpubtnspressed.second == "threeone" && cpubtnspressed.first == "onethree")){
                if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              cpubtnspressed.third = buttontopressid;
            };
          };
          if(thirdalgorithmpass == 1){             /////THIRD ALGOTHM
            var randombtnpress = Math.floor(Math.random() * 2);
            if(randombtnpress == 0){          ////////// cpubtnspressed.FIRST
              var error = 0;
              var loops = 0;
              while(error == 0){
                loops++;
                if(cpubtnspressed.first == "oneone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "onetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.two != "threetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "onethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twoone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.two != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twotwo"){
                  var randomcombination = Math.floor(Math.random() * 8);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.two != "threetwo"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.two != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 3){
                    if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 4){
                    if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.two != "onetwo"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 5){
                    if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.two != "twoone"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 6){
                    if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 7){
                    if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twothree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.two != "twoone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "threeone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };v
                };
                if(cpubtnspressed.first == "threetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.two != "onetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second!= "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "threethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
              };
            };
            if(randombtnpress == 1){            /////// cpubtnspressed.SECOND
              var error = 0;
              var loops = 0;
              while(error == 0){
                loops++;
                if(cpubtnspressed.second == "oneone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "onetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.two != "threetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.first != "first" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "onethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.first != "first" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "first" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twoone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.two != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twotwo"){
                  var randomcombination = Math.floor(Math.random() * 8);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.two != "threetwo"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.two != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 3){
                    if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 4){
                    if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.two != "onetwo"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 5){
                    if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.two != "twoone"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 6){
                    if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 7){
                    if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twothree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.two != "twoone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "threeone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };v
                };
                if(cpubtnspressed.second == "threetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.two != "onetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second!= "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "threethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
              };
            };
            cpubtnspressed.third = buttontopressid;
          };
          };
        };

        if(btnsuserpressedno == 3){
          if(cpubtnspressed.third == ""){
            var randomalgorithmint = Math.floor(Math.random() * 3);
            if(randomalgorithmint == 0){           //////////////// OBSTRUCT USER MOVE IF POSSIBLE OR ELSE NEXT ALOGRITHM - ALORITHM
              if((btnspressedid.second == "oneone" && btnspressedid.first == "onetwo") || (btnspressedid.second == "onetwo" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onetwo" && btnspressedid.first == "onethree") || (btnspressedid.second == "onethree" && btnspressedid.first == "onetwo")){
                if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "twoone" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "twoone")){
                if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree"){
                  buttontopressid = "twothree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "twotwo" && btnspressedid.first == "twothree") || (btnspressedid.second == "twothree" && btnspressedid.first == "twotwo")){
                if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"){
                  buttontopressid = "twoone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threeone" && btnspressedid.first == "threetwo") || (btnspressedid.second == "threetwo" && btnspressedid.first == "threeone")){
                if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threetwo" && btnspressedid.first == "threethree") || (btnspressedid.second == "threethree" && btnspressedid.first == "threetwo")){
                if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone"){
                  buttontopressid = "onethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "oneone" && btnspressedid.first == "twoone") || (btnspressedid.second == "twoone" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone"){
                  buttontopressid = "threeone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threeone" && btnspressedid.first == "twoone") || (btnspressedid.second == "twoone" && btnspressedid.first == "threeone")){
                if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onetwo" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "onetwo")){
                if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo"){
                  buttontopressid = "threetwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threetwo" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "threetwo")){
                if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"){
                  buttontopressid = "onetwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onethree" && btnspressedid.first == "twothree") || (btnspressedid.second == "twothree" && btnspressedid.first == "onethree")){
                if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threethree" && btnspressedid.first == "twothree") || (btnspressedid.second == "twothree" && btnspressedid.first == "threethree")){
                if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "oneone" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threethree" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "threethree")){
                if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onethree" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "onethree")){
                if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone"){
                  buttontopressid = "threeone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threeone" && btnspressedid.first == "twotwo") || (btnspressedid.second == "twotwo" && btnspressedid.first == "threeone")){
                if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "oneone" && btnspressedid.first == "threeone") || (btnspressedid.second == "threeone" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"){
                  buttontopressid = "twoone";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onetwo" && btnspressedid.first == "threetwo") || (btnspressedid.second == "threetwo" && btnspressedid.first == "onetwo")){
                if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onethree" && btnspressedid.first == "threethree") || (btnspressedid.second == "threethree" && btnspressedid.first == "onethree")){
                if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree"){
                  buttontopressid = "twothree";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "oneone" && btnspressedid.first == "onethree") || (btnspressedid.second == "onethree" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"){
                  buttontopressid = "onetwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "twoone" && btnspressedid.first == "twothree") || (btnspressedid.second == "twothree" && btnspressedid.first == "twoone")){
                if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "threeone" && btnspressedid.first == "threethree") || (btnspressedid.second == "threethree" && btnspressedid.first == "threeone")){
                if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo"){
                  buttontopressid = "threetwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "oneone" && btnspressedid.first == "threethree") || (btnspressedid.second == "threethree" && btnspressedid.first == "oneone")){
                if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              if((btnspressedid.second == "onethree" && btnspressedid.first == "threeone") || (btnspressedid.second == "threeone" && btnspressedid.first == "onethree")){
                if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  randomalgorithmint = 1;
                };
              };
              cpubtnspressed.third = buttontopressid;
            };

            var thirdalgorithmpass = 0;

            if(randomalgorithmint == 1){            /////////////// CONTINUE PREVIOUS MOVE - ALOGRITHM
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "onetwo") || (cpubtnspressed.second == "onetwo" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onetwo" && cpubtnspressed.first == "onethree") || (cpubtnspressed.second == "onethree" && cpubtnspressed.first == "onetwo")){
                if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "twoone" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "twoone")){
                if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                  buttontopressid = "twothree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "twothree") || (cpubtnspressed.second == "twothree" && cpubtnspressed.first == "twotwo")){
                if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                  buttontopressid = "twoone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threeone" && cpubtnspressed.first == "threetwo") || (cpubtnspressed.second == "threetwo" && cpubtnspressed.first == "threeone")){
                if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threetwo" && cpubtnspressed.first == "threethree") || (cpubtnspressed.second == "threethree" && cpubtnspressed.first == "threetwo")){
                if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                  buttontopressid = "onethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "twoone") || (cpubtnspressed.second == "twoone" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                  buttontopressid = "threeone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threeone" && cpubtnspressed.first == "twoone") || (cpubtnspressed.second == "twoone" && cpubtnspressed.first == "threeone")){
                if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onetwo" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "onetwo")){
                if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                  buttontopressid = "threetwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threetwo" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "threetwo")){
                if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                  buttontopressid = "onetwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onethree" && cpubtnspressed.first == "twothree") || (cpubtnspressed.second == "twothree" && cpubtnspressed.first == "onethree")){
                if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threethree" && cpubtnspressed.first == "twothree") || (cpubtnspressed.second == "twothree" && cpubtnspressed.first == "threethree")){
                if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "threethree" && btnspressedid.second != "threethree"){
                  buttontopressid = "threethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threethree" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "threethree")){
                if(btnspressedid.first != "oneone" && btnspressedid.second != "oneone"){
                  buttontopressid = "oneone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onethree" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "onethree")){
                if(btnspressedid.first != "threeone" && btnspressedid.second != "threeone"){
                  buttontopressid = "threeone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threeone" && cpubtnspressed.first == "twotwo") || (cpubtnspressed.second == "twotwo" && cpubtnspressed.first == "threeone")){
                if(btnspressedid.first != "onethree" && btnspressedid.second != "onethree"){
                  buttontopressid = "onethree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "threeone") || (cpubtnspressed.second == "threeone" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "twoone" && btnspressedid.second != "twoone"){
                  buttontopressid = "twoone";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onetwo" && cpubtnspressed.first == "threetwo") || (cpubtnspressed.second == "threetwo" && cpubtnspressed.first == "onetwo")){
                if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onethree" && cpubtnspressed.first == "threethree") || (cpubtnspressed.second == "threethree" && cpubtnspressed.first == "onethree")){
                if(btnspressedid.first != "twothree" && btnspressedid.second != "twothree"){
                  buttontopressid = "twothree";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "onethree") || (cpubtnspressed.second == "onethree" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo"){
                  buttontopressid = "onetwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "twoone" && cpubtnspressed.first == "twothree") || (cpubtnspressed.second == "twothree" && cpubtnspressed.first == "twoone")){
                if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "threeone" && cpubtnspressed.first == "threethree") || (cpubtnspressed.second == "threethree" && cpubtnspressed.first == "threeone")){
                if(btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo"){
                  buttontopressid = "threetwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "oneone" && cpubtnspressed.first == "threethree") || (cpubtnspressed.second == "threethree" && cpubtnspressed.first == "oneone")){
                if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              if((cpubtnspressed.second == "onethree" && cpubtnspressed.first == "threeone") || (cpubtnspressed.second == "threeone" && cpubtnspressed.first == "onethree")){
                if(btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo"){
                  buttontopressid = "twotwo";
                }
                else{
                  thirdalgorithmpass = 1;
                };
              };
              cpubtnspressed.third = buttontopressid;
            };

          if(thirdalgorithmpass == 1){             /////THIRD ALGOTHM
            var randombtnpress = Math.floor(Math.random() * 2);
            if(randombtnpress == 0){          ////////// cpubtnspressed.FIRST
              var error = 0;
              var loops = 0;
              while(error == 0){
                loops++;
                if(cpubtnspressed.first == "oneone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "onetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.two != "threetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "onethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twoone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.two != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twotwo"){
                  var randomcombination = Math.floor(Math.random() * 8);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.two != "threetwo"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.two != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 3){
                    if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 4){
                    if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.two != "onetwo"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 5){
                    if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.two != "twoone"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 6){
                    if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 7){
                    if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twothree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.two != "twoone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "threeone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };v
                };
                if(cpubtnspressed.first == "threetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.two != "onetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second!= "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "threethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
              };
            };
            if(randombtnpress == 1){            /////// cpubtnspressed.SECOND
              var error = 0;
              var loops = 0;
              while(error == 0){
                loops++;
                if(cpubtnspressed.second == "oneone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "onetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.two != "threetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.first != "first" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "onethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.first != "first" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "first" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twoone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.two != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twotwo"){
                  var randomcombination = Math.floor(Math.random() * 8);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.two != "threetwo"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.two != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 3){
                    if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 4){
                    if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.two != "onetwo"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 5){
                    if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.two != "twoone"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 6){
                    if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 7){
                    if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twothree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.two != "twoone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "threeone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };v
                };
                if(cpubtnspressed.second == "threetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.two != "threethree"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.two != "onetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second!= "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "threethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && cpubtnspressed.first != "onethree" && btnspressedid.first != "onethree" && btnspressedid.two != "onethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && cpubtnspressed.first != "oneone" && btnspressedid.first != "oneone" && btnspressedid.two != "oneone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && cpubtnspressed.first != "threeone" && btnspressedid.first != "threeone" && btnspressedid.two != "threeone"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
              };
            };
            cpubtnspressed.third = buttontopressid;
          };
          };

          if(cpubtnspressed.third != ""){
            var randombtnpress = Math.floor(Math.random() * 3);      ///////////////////////////
            if(randombtnpress == 0){          ////////// cpubtnspressed.FIRST
              var error = 0;
              var loops = 0;
              while(error == 0){
                loops++;
                if(cpubtnspressed.first == "oneone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree"&& btnspressedid.third != "threethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "onetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "onethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twoone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twotwo"){
                  var randomcombination = Math.floor(Math.random() * 8);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "onetwo";
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 3){
                    if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != threeone && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 4){
                    if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 5){
                    if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 6){
                    if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 7){
                    if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twothree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "threeone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "threetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second!= "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "threethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"&& cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
              };
            };
            if(randombtnpress == 1){            /////// cpubtnspressed.SECOND
              var error = 0;
              var loops = 0;
              while(error == 0){
                loops++;
                if(cpubtnspressed.second == "oneone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree"&& btnspressedid.third != "threethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "onetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "onethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twoone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twotwo"){
                  var randomcombination = Math.floor(Math.random() * 8);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "onetwo";
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 3){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != threeone && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 4){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 5){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 6){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 7){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twothree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "threeone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "threetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second!= "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "threethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"&& cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
              };
            };
            if(randombtnpress == 2){            /////// cpubtnspressed.THIRD
              var error = 0;
              var loops = 0;
              while(error == 0){
                loops++;
                if(cpubtnspressed.third == "oneone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree"&& btnspressedid.third != "threethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "onetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "onethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "twoone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "twotwo"){
                  var randomcombination = Math.floor(Math.random() * 8);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "onetwo";
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 3){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != threeone && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 4){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 5){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 6){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 7){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "twothree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "threeone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "threetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second!= "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "threethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"&& cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
              };
            };
            cpubtnspressed.fourth = buttontopressid;
          };
        };
        if(btnsuserpressedno == 4){
          if(cpubtnspressed.fourth == ""){
            var randombtnpress = Math.floor(Math.random() * 3);      ///////////////////////////
            if(randombtnpress == 0){          ////////// cpubtnspressed.FIRST
              var error = 0;
              var loops = 0;
              while(error == 0){
                loops++;
                if(cpubtnspressed.first == "oneone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree"&& btnspressedid.third != "threethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "onetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "onethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twoone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twotwo"){
                  var randomcombination = Math.floor(Math.random() * 8);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "onetwo";
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 3){
                    if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != threeone && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 4){
                    if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 5){
                    if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 6){
                    if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 7){
                    if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "twothree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "threeone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "threetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second!= "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.first == "threethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"&& cpubtnspressed.second != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.second != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.second != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.second != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
              };
            };
            if(randombtnpress == 1){            /////// cpubtnspressed.SECOND
              var error = 0;
              var loops = 0;
              while(error == 0){
                loops++;
                if(cpubtnspressed.second == "oneone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree"&& btnspressedid.third != "threethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "onetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "onethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twoone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twotwo"){
                  var randomcombination = Math.floor(Math.random() * 8);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "onetwo";
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 3){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != threeone && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 4){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 5){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 6){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 7){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "twothree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "threeone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.third != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "threetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "onetwo" && cpubtnspressed.third != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second!= "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.third != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.second == "threethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"&& cpubtnspressed.first != "onethree" && cpubtnspressed.third != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.third != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "oneone" && cpubtnspressed.third != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.third != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "threeone" && cpubtnspressed.third != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.third != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
              };
            };
            if(randombtnpress == 2){            /////// cpubtnspressed.THIRD
              var error = 0;
              var loops = 0;
              while(error == 0){
                loops++;
                if(cpubtnspressed.third == "oneone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree"&& btnspressedid.third != "threethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "onetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "onethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree"  && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "twoone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone"  && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo"  && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "twotwo"){
                  var randomcombination = Math.floor(Math.random() * 8);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo"){
                      buttontopressid = "onetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo"  && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"){
                      buttontopressid = "onetwo";
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone"  && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "oneone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone"  && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone" && loops >= 3){
                        buttontopressid = "oneone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 3){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != threeone && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree"  && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 4){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo"  && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 5){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 6){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 7){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "twothree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "onethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree" && loops >= 3){
                        buttontopressid = "onetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "threeone"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twoone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twoone" && cpubtnspressed.second != "twoone" && btnspressedid.first != "twoone" && btnspressedid.second != "twoone" && btnspressedid.third != "twoone" && loops >= 3){
                        buttontopressid = "twoone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "threetwo"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree"){
                      buttontopressid = "threeone";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone" && loops >= 3){
                        buttontopressid = "threeone";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "onetwo" && cpubtnspressed.second != "onetwo" && btnspressedid.first != "onetwo" && btnspressedid.second != "onetwo" && btnspressedid.third != "onetwo"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second!= "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threethree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threethree" && cpubtnspressed.second != "threethree" && btnspressedid.first != "threethree" && btnspressedid.second != "threethree" && btnspressedid.third != "threethree" && loops >= 3){
                        buttontopressid = "threethree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
                if(cpubtnspressed.third == "threethree"){
                  var randomcombination = Math.floor(Math.random() * 3);
                  if(randomcombination == 0){
                    if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree"&& cpubtnspressed.first != "onethree" && cpubtnspressed.second != "onethree" && btnspressedid.first != "onethree" && btnspressedid.second != "onethree" && btnspressedid.third != "onethree"){
                      buttontopressid = "twothree";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twothree" && cpubtnspressed.second != "twothree" && btnspressedid.first != "twothree" && btnspressedid.second != "twothree" && btnspressedid.third != "twothree" && loops >= 3){
                        buttontopressid = "twothree";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 1){
                    if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && cpubtnspressed.first != "oneone" && cpubtnspressed.second != "oneone" && btnspressedid.first != "oneone" && btnspressedid.second != "oneone" && btnspressedid.third != "oneone"){
                      buttontopressid = "twotwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "twotwo" && cpubtnspressed.second != "twotwo" && btnspressedid.first != "twotwo" && btnspressedid.second != "twotwo" && btnspressedid.third != "twotwo" && loops >= 3){
                        buttontopressid = "twotwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                  if(randomcombination == 2){
                    if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && cpubtnspressed.first != "threeone" && cpubtnspressed.second != "threeone" && btnspressedid.first != "threeone" && btnspressedid.second != "threeone" && btnspressedid.third != "threeone"){
                      buttontopressid = "threetwo";
                      error = 1;
                    }
                    else{
                      if(cpubtnspressed.first != "threetwo" && cpubtnspressed.second != "threetwo" && btnspressedid.first != "threetwo" && btnspressedid.second != "threetwo" && btnspressedid.third != "threetwo" && loops >= 3){
                        buttontopressid = "threetwo";
                        error = 1;
                      }
                      else{
                        error = 0;
                      };
                    };
                  };
                };
              };
            };
            cpubtnspressed.fourth = buttontopressid;
          };
          if(cpubtnspressed.fourth != ""){

          };
          console.log(buttontopressid);
          currentyid = buttontopressid;              /////////
          fadeiny();
        };

  }
  else{
    gamewinnerchecker();
  };
};
