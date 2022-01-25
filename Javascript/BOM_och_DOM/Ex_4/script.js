document.getElementById("btn_copyUpper").onclick = function () {
  let newText = document.getElementById("input-area").value;
  let newToUpper = newText.toUpperCase();
  document.getElementById("text-area").innerHTML = `${newToUpper}`;
};
