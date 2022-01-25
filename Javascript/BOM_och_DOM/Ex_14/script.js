let counter = 3;
let bounceUp = true;

document.getElementById("btn_Bounce").onclick = function () {
  if (counter >= 5) {
    bounceUp = false;
  }
  if (counter <= 1) {
    bounceUp = true;
  }

  if (bounceUp) {
    document.getElementById("text-area").innerHTML = ++counter;
  } else {
    document.getElementById("text-area").innerHTML = --counter;
  }
};
