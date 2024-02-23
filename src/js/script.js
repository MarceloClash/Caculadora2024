document.addEventListener("DOMContentLoaded", function () {
  let historyDiv = document.querySelector(".history");
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let history = "";

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      handleButtonClick(button.innerHTML);
    });
  });

  function handleButtonClick(value) {
    if (value === "C") {
      clearAll();
    } else if (value === "DEL") {
      deleteLastChar();
    } else if (value === "=") {
      evalueExpression();
    } else {
      appendToScreen(value);
    }
  }

  function clearAll() {
    screen.textContent = "";
    history = "";
    updateHistory();
  }

  function deleteLastChar() {
    let currentText = screen.textContent;
    screen.textContent = currentText.slice(0, -1);
  }

  function appendToScreen(value) {
    screen.textContent += value;
  }

  function evalueExpression() {
    try {
      {
        let expression = screen.textContent;
        let result = eval(expression);

        result = parseFloat(result.toFixed(5));

        history = expression + "=" + result;
        screen.textContent = result;
        updateHistory();
      }
    } catch (error) {
      screen.textContent = "Error";
    }
    function updateHistory() {
      historyDiv.textContent = history;
    }
  }
});
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const time = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").textContent = time;
  document.getElementById("clock").style.color = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  document.getElementById("body").style.backgroundColor = `#${Math.floor(
    (Math.random(0) * 16777215) / 4
  ).toString(16)}`;

  document.getElementById("bi").style.color = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;

  document.getElementById("ml").style.color = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}
updateClock();
setInterval(updateClock, 1000);
