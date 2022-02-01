let btnDiss = document.getElementById("btnDissapearDiv");

btnDiss.onclick = HideDivText;

function HideDivText(event) {
  document.getElementById("text").hidden = true;
}

let btnRand = document.getElementById("btnRandColour");

btnRand.addEventListener("click", RandomizeBGColour);

function RandomizeBGColour(event) {
  let randBG = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randBG;
}

btnRand.addEventListener("click", AddParagraph);

function AddParagraph(event) {
  document.body.insertAdjacentHTML("beforeend", /*html*/ `<p>Add text</p>`);
}

for (let e of document.querySelectorAll("*")) {
  e.addEventListener("click", (ele) => console.log(e.tagName));
}
