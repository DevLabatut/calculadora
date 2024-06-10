function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLastChar() {
  var displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.substring(
    0,
    displayValue.length - 1
  );
}

function calculate() {
  var displayValue = document.getElementById("display").value;
  try {
    var result = eval(displayValue);
    document.getElementById("display").value = result;
  } catch (error) {
    alert("Erro na expressão!");
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    (key >= "0" && key <= "9") ||
    key === "." ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "^"
  ) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLastChar();
  }
});
