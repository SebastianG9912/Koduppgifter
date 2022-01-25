document.getElementById("btn_CopyUpper").onclick = function () {
  let newText = document.getElementById("input-area").value.toUpperCase();
  document.getElementById("text-area").innerHTML = newText;
};

document.getElementById("btn_CopyStars").onclick = function () {
  let newText = document.getElementById("input-area").value;
  document.getElementById("text-area").innerHTML = `*${newText}*`;
};
