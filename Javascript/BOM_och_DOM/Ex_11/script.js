let counter = 0;

function IncreaseCounter() {
  counter++;
}

function DecreaseCounter() {
  counter--;
}

document.getElementById("btn_IncreaseByOne").onclick = function () {
  IncreaseCounter();
  document.getElementById("text-area").innerHTML = counter;
};

document.getElementById("btn_DecreaseByOne").onclick = function () {
  DecreaseCounter();
  document.getElementById("text-area").innerHTML = counter;
};
