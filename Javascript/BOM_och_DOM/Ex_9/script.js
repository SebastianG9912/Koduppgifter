document.getElementById("btn_GreaterCheck").onclick = function () {
  let a = document.getElementById("input-area1").value;
  let b = document.getElementById("input-area2").value;

  let output = document.getElementById("text-area");
  if (Number(a) > +b) {
    output.innerHTML = "Yes";
  } else {
    output.innerHTML = "No";
  }
};
