document.getElementById("btn_Addition").onclick = function () {
  let add1 = document.getElementById("input-area1").value;
  let add2 = document.getElementById("input-area2").value;

  let fullAdd = +add1 + +add2;

  document.getElementById("text-area").innerHTML = fullAdd;
};
