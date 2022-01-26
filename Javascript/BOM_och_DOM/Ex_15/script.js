document.getElementById("btn").onclick = function () {
  let userInput = document.getElementById("input-area").value;

  if (userInput == "" || isOnlyWhiteSpace(userInput)) {
    document.getElementById("text-area").innerHTML = "Field is empty :(";
    return;
  }

  let moreThanOneWord = isMOreThanOneWord(userInput);

  if (!moreThanOneWord) {
    document.getElementById("text-area").innerHTML = "Insert more than 1 word";
    return;
  }

  let allUpperCase = convertAllToUpperCase(userInput);

  document.getElementById("text-area").innerHTML = allUpperCase;
};

function isOnlyWhiteSpace(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] != " ") {
      return false;
    }
  }

  return true;
}

function isMOreThanOneWord(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] == ":" && i < text.length - 1 && text[i + 1] != " ") {
      return true;
    }
  }

  return false;
}

function convertAllToUpperCase(text) {
  let convertedWord = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] == ":") {
      convertedWord += "*";
    } else {
      convertedWord += text[i].toUpperCase();
    }
  }

  return convertedWord;
}
