let isOff = true;

document.getElementById("btn_Toggle").onclick = function () {
  let text = document.getElementById("text-area");

  if (isOff) {
    text.innerHTML = "On";
    isOff = false;
  } else {
    text.innerHTML = "Off";
    isOff = true;
  }
};
