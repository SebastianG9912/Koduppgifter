document.getElementById("btn_Addition").onclick = function () {
  let toAdd = document.getElementById("input-area").value;
  let added = +toAdd + 300;

  document.getElementById("text-area").innerHTML = added;
};
