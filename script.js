


const input = document.querySelector(".input");
const resultDisplay = document.querySelector(".resultDisplay");
const unconvUnits = document.querySelector("#unconvUnits");
const convUnits = document.querySelector("#convUnits");
const clearBtn = document.querySelector("#all-clear");
const calcBtn = document.querySelector("#calc");
const reverse = document.querySelector(".reverse")
const converter = new Converter(resultDisplay);


calcBtn.addEventListener("click", () => {
    converter.convertInput(input.value, unconvUnits.value, convUnits.value);
    if (input.value <= 0) return
    if (unconvUnits.value === convUnits.value) {
        result = input.value
    }
    else if (unconvUnits.value === "km" && convUnits.value === "m") {

        result = input.value * 1000
    }
    else if (unconvUnits.value === "km" && convUnits.value === "cm") {
        result = input.value * 100000

    }
    else if (unconvUnits.value === "km" && convUnits.value === "ml") {
        result = input.value * 0.621371192
    }

    else if (unconvUnits.value === "m" && convUnits.value === "km") {
        result = input.value / 10000
    }
    else if (unconvUnits.value === "m" && convUnits.value === "cm") {
        result = input.value * 100
    }
    else if (unconvUnits.value === "m" && convUnits.value === "ml") {
        result = input.value * 0.000621371192
    }

    else if (unconvUnits.value === "cm" && convUnits.value === "km") {
        result = input.value / 100000
    }
    else if (unconvUnits.value === "cm" && convUnits.value === "m") {
        result = input.value / 100
    }
    else if (unconvUnits.value === "cm" && convUnits.value === "ml") {
        result = input.value / 160934.4
    }

    else if (unconvUnits.value === "ml" && convUnits.value === "km") {
        result = input.value * 1.609344
    }
    else if (unconvUnits.value === "ml" && convUnits.value === "cm") {
        result = input.value * 160934.4
    }
    else if (unconvUnits.value === "ml" && convUnits.value === "m") {
        result = input.value * 1609.344
    }
    converter.diplayAnswer(result);
    resultDisplay.innerHTML = `${input.value} ${unconvUnits.value} = <br> ${result} ${convUnits.value}`


});

clearBtn.addEventListener("click", () => {
    converter.clear()

});

reverse.addEventListener("click", () => {

    if (input.value <= 0) return

    if (unconvUnits.value === "km" && convUnits.value === "m") {

        result = input.value / 1000
    }
    else if (unconvUnits.value === "km" && convUnits.value === "cm") {
        result = input.value / 100000

    }
    else if (unconvUnits.value === "km" && convUnits.value === "ml") {
        result = input.value / 0.621371192
    }

    else if (unconvUnits.value === "m" && convUnits.value === "km") {
        result = input.value * 10000
    }
    else if (unconvUnits.value === "m" && convUnits.value === "cm") {
        result = input.value / 100
    }
    else if (unconvUnits.value === "m" && convUnits.value === "ml") {
        result = input.value / 0.000621371192
    }

    else if (unconvUnits.value === "cm" && convUnits.value === "km") {
        result = input.value * 100000
    }
    else if (unconvUnits.value === "cm" && convUnits.value === "m") {
        result = input.value * 100
    }
    else if (unconvUnits.value === "cm" && convUnits.value === "ml") {
        result = input.value * 160934.4
    }

    else if (unconvUnits.value === "ml" && convUnits.value === "km") {
        result = input.value / 1.609344
    }
    else if (unconvUnits.value === "ml" && convUnits.value === "cm") {
        result = input.value / 160934.4
    }
    else if (unconvUnits.value === "ml" && convUnits.value === "m") {
        result = input.value / 1609.344
    }

    resultDisplay.innerHTML = `${input.value} ${convUnits.value} = <br> ${result} ${unconvUnits.value}`
})