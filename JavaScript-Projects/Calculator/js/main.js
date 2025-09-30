main = () => {
    "use strict";

    const calculatorForm = document.getElementById("calculator-form");
    const outputDiv = document.getElementById("screen");
    const buttons = document.querySelectorAll(".btn");
    let expression = "";

    // Prevent form submission
    calculatorForm.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.getAttribute("data-value");
            switch(value) {
                case "C":
                    expression = "";
                    outputDiv.textContent = "0";
                    break;
                case "del":
                    expression = expression.slice(0, -1);
                    outputDiv.textContent = expression || "0";
                    break;
                case "=":
                    try {
                        const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
                        const result = Function('"use strict";return (' + sanitizedExpression + ')')();
                        outputDiv.textContent = result.toString();
                        expression = result.toString();                        
                    } catch {
                        outputDiv.textContent = "Error";
                        expression = "";
                    }
                    break;
                case "+/-":
                    if (expression) {
                        if (expression.startsWith("-")) {
                            expression = expression.slice(1);
                        } else {
                            expression = "-" + expression;
                        }
                    }
                    outputDiv.textContent = expression;
                    break;
                default:
                    expression += value;
                    outputDiv.textContent = expression;
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", main);
