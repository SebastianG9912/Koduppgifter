document.getElementById("btn_Copy").onclick = function () {
  let mainText = document.getElementById("input-area1").value;
  let wrapperText = document.getElementById("input-area2").value;

  document.getElementById(
    "text-area"
  ).innerHTML = `${wrapperText}${mainText}${wrapperText}`;
};
