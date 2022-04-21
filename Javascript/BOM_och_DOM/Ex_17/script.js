document.getElementById("btn").onclick = function () {
  let numbers = document.getElementById("input-area1").value;
  let toAdd = document.getElementById("input-area2").value;

  let fullWord = "";

  let temp = "";
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == ",") {
      temp = +temp + +toAdd;
      fullWord += temp;
      temp = "";

      if (i + 1 != numbers.length) {
        fullWord += ",";
      }
    } else {
      temp += numbers[i];
    }
  }
  temp = +temp + +toAdd;
  fullWord += temp;

  document.getElementById("text-area").innerHTML = fullWord;
};
