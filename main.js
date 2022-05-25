//get all the grad divs
const grad = document.querySelectorAll('.grad');

// randomize the grads on the page
let speed = [];
let position = [];

for (let i = 0; i < grad.length; i++) {
  //set the position of the grad to a random location
  let height = Math.floor(Math.random() * window.innerHeight);
  let width = Math.random() * window.innerWidth;

  grad[i].style.top = `${height}px`;
  grad[i].style.left = `${width}px`;

  //push a random speed between 10 + 15 into the speed array to determine how fast the grad will fall
  speed.push(Math.ceil(Math.random() * 15) + 10);
  //push the grads current top value into the position array
  position.push(height);
}

// set the make it rain function
function makeItRain() {

  for (let i = 0; i < grad.length; i++) {

    position[i] += speed[i];
    grad[i].style.top = `${position[i]}px`;


    if (position[i] > (window.innerHeight + 50)) {

      position[i] = -75;
      grad[i].style.left = `${Math.random() * window.innerWidth}px`;
    }
  }
}

//set the interval to re-reun the makeItRain function every 100ms
setInterval(makeItRain, 100);
