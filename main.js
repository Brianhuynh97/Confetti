// //get all the grad divs
// const grad = document.querySelectorAll('.grad');

// // randomize the grads on the page
// let speed = [];
// let position = [];

// for (let i = 0; i < grad.length; i++) {
//   //set the position of the grad to a random location
//   let height = Math.floor(Math.random() * window.innerHeight);
//   let width = Math.random() * window.innerWidth;

//   grad[i].style.top = `${height}px`;
//   grad[i].style.left = `${width}px`;

//   //push a random speed between 10 + 15 into the speed array to determine how fast the grad will fall
//   speed.push(Math.ceil(Math.random() * 15) + 10);
//   //push the grads current top value into the position array
//   position.push(height);
// }

// // set the make it rain function
// function makeItRain() {



//   // $(this).on('mousemove', function (x) {
//   //   if (!started) {
//   //     clearInterval(idleInterval);
//   //     started = true;
//   //   }
//   //   newX = x.pageX;
//   // });

//   for (let i = 0; i < grad.length; i++) {

//     position[i] += speed[i];
//     grad[i].style.top = `${position[i]}px`;


//     if (position[i] > (window.innerHeight + 50)) {

//       position[i] = -75;
//       grad[i].style.left = `${Math.random() * window.innerWidth}px`;
//     }
//   }
// }

// //set the interval to re-run the makeItRain function every 100ms
// setInterval(makeItRain, 100);


// var gradPlayers = [];

// function makeItgrad() {
//   var grad = document.querySelectorAll('.grad');

//   if (!grad[0].animate) {
//     return false;
//   }

//   for (var i = 0, len = grad.length; i < len; ++i) {
//     var candycorn = grad[i];
//     candycorn.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
//     var scale = Math.random() * .7 + .3;
//     var player = candycorn.animate([
//       { transform: `translate3d(${(i / len * 100)}vw,-5vh,0) scale(${scale}) rotate(0turn)`, opacity: scale },
//       { transform: `translate3d(${(i / len * 100 + 10)}vw,105vh,0) scale(${scale}) rotate(${Math.random() > .5 ? '' : '-'}2turn)`, opacity: 1 }
//     ], {
//       duration: Math.random() * 3000 + 5000,
//       iterations: Infinity,
//       delay: -(Math.random() * 7000)
//     });

//     gradPlayers.push(player);
//   }
// }

window.onload = function () {

  'use strict';

  var scatter = {

    //get container element
    container: document.getElementById("scatter"),

    //get icons array
    icons: document.getElementsByClassName("icon"),

    //get radius
    getRad: function () {
      return this.icons[0].offsetHeight * 0.5;
    },

    //make array of y positions
    locs: [],

    //get ran y num
    ranY: function () {
      return Math.floor(Math.random() * (this.container.offsetHeight - this.getRad() * 2) + this.getRad());
    },

    //get ran y num
    ranX: function () {
      return Math.floor(Math.random() * (this.container.offsetWidth - this.getRad() * 2) + this.getRad());
    },

    //checkNum
    checkNum: function () {

      var x = this.ranX(),
        y = this.ranY();

      for (var i = 0; i < this.locs.length; i++) { //loop through once for each item in locs array
        if (x > this.locs[i][0] - this.getRad() && x <= this.locs[i][0] + this.getRad() &&
          y > this.locs[i][1] - this.getRad() && y <= this.locs[i][1] + this.getRad()) {
          this.checkNum(); //run this function again
          return; //leave function
        }

      }
      this.locs.push([x, y]); //add nums to locs
    },
    //loop through and check for conflict
    checkLoop: function () {
      for (var i = 0; i <= this.icons.length; i++) { //add num to array for each icon / incl one extra set
        this.checkNum();
      }
      this.move();
    },
    move: function () {
      for (var i = 0; i < this.icons.length; i++) {

        this.icons[i].style.left = this.locs[i + 1][0] + "px";
        this.icons[i].style.top = this.locs[i + 1][1] + "px";

        var rot8 = Math.floor(Math.random() * 720) - 360;

        this.icons[i].getElementsByTagName('p')[0].style.WebkitTransform = "rotate(" + rot8 + "deg)";
        this.icons[i].getElementsByTagName('p')[0].style.msTransform = "rotate(" + rot8 + "deg)";
        this.icons[i].getElementsByTagName('p')[0].style.transform = "rotate(" + rot8 + "deg)";
      }
    },
    go: function () {
      this.checkLoop();
    }
  };

  scatter.container.style.display = "block";
  scatter.go();

  window.onresize = function () {
    scatter.locs = []; //clear array vals
    scatter.go();
  };

  window.onclick = function () {
    scatter.locs = []; //clear array vals
    scatter.go();
  };

};
