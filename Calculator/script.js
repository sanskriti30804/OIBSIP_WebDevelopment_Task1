const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharacter = ["%", "*", "+", "-", "/", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        try {
            let expression = output
                .replace(/%/g, "/100")
                .replace(/√(\d+(\.\d+)?|\([^)]+\))/g, "sqrt($1)");

            output = math.evaluate(expression).toString();
        } catch (err) {
            output = "Error";
        }
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else if (btnValue === "√") {
        output += "√";
    } else {
        if (output === "" && specialCharacter.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", () => calculate(button.innerText));
});
