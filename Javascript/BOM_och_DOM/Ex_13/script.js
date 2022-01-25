let counter = 4;

document.getElementById("btn_Increase").onclick = function () {
  if (counter > 5) {
    counter = 1;
  }

  document.getElementById("text-area").innerHTML = counter;
  counter++;
};
