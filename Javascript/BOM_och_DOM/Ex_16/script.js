document.getElementById("btn").onclick = function () {
  let uInput = document.getElementById("input-area").value;

  let finalNumber = 0;

  let temp = "";
  for (let i = 0; i < uInput.length; i++) {
    if (uInput[i] != " ") {
      temp += "" + uInput[i];
    } else {
      finalNumber += +temp;
      temp = "";
    }

    if (i + 1 == uInput.length) {
      finalNumber += +temp;
    }
  }

  document.getElementById("text-area").innerHTML = finalNumber;
};
