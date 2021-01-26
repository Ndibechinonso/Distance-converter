

const input = document.querySelector(".input");
const resultDisplay = document.querySelector(".resultDisplay");
const convertFrom = document.querySelector("#unconvUnits");
const convertTo = document.querySelector("#convUnits");
const clearBtn = document.querySelector("#all-clear");
const calcBtn = document.querySelector("#calc");

const converter = new Converter(resultDisplay);


calcBtn.addEventListener("click", () => {
  converter.inputValue(input.value);
  converter.convertInput(convertFrom.value, convertTo.value);
  converter.diplayAnswer();
});

clearBtn.addEventListener("click", () => {
    converter.clear()
});
