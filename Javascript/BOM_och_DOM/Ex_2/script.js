document.getElementById("btn_copy").onclick = function () {
  let newText = document.getElementById("input-area").value;
  document.getElementById("text-area").innerHTML = newText;
};
