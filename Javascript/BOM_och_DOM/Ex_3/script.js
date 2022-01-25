document.getElementById("btn_copyStars").onclick = function () {
  let newText = document.getElementById("input-area").value;
  document.getElementById("text-area").innerHTML = `*${newText}*`;
};
