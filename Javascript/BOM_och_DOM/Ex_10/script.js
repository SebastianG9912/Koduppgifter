let counter = 0;
document.getElementById("text-area").innerHTML = counter;

document.getElementById("btn_IncreaseByOne").onclick = function () {
  IncreaseCounter();
  document.getElementById("text-area").innerHTML = counter;
};

function IncreaseCounter() {
  counter++;
}
