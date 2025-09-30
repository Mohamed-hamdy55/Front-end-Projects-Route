
main = () => {
    "use strict";
    
    // take user input and print it back to the screen
    const form1 = document.getElementById("testForm-1");
    form1.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("userInput-1").value;
        document.getElementById("output-1").innerText = userInput;
    });

    // take user input and check if it's divisible by 3 and 4
    const form2 = document.getElementById("testForm-2");
    form2.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("userInput-2").value;
        if (userInput !== "") {
            if (userInput % 3 === 0 && userInput % 4 === 0) {
                document.getElementById("output-2").innerText = "Yes";
            } else {
                document.getElementById("output-2").innerText = "No";
            }
        } else {
            document.getElementById("output-2").innerText = "";
        }
    });

    // take two user inputs and print the largest one
    const form3 = document.getElementById("testForm-3");
    form3.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput1 = document.getElementById("userInput-3a").value;
        const userInput2 = document.getElementById("userInput-3b").value;
        if (userInput1 !== "" && userInput2 !== "") {
            document.getElementById("output-3").innerText = Math.max(Number(userInput1), Number(userInput2));
        } else {
            document.getElementById("output-3").innerText = "";
        }
    });

    // take user input and check if it's positive, negative, or zero
    const form4 = document.getElementById("testForm-4");
    form4.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("userInput-4").value;
        if (userInput !== "") {
            document.getElementById("output-4").innerText = userInput > 0
                ? "Positive" : userInput < 0
                    ? "Negative" : "Zero";
        } else {
            document.getElementById("output-4").innerText = "";
        }
    });

    // take three user inputs and print the largest one, and the smallest one
    const form5 = document.getElementById("testForm-5");
    form5.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput1 = document.getElementById("userInput-5a").value;
        const userInput2 = document.getElementById("userInput-5b").value;
        const userInput3 = document.getElementById("userInput-5c").value;
        if (userInput1 !== "" && userInput2 !== "" && userInput3 !== "") {
            document.getElementById("output-5").innerText = ` Max ${Math.max(Number(userInput1), Math.max(Number(userInput2), Number(userInput3)))}, Min: ${Math.min(Number(userInput1), Math.min(Number(userInput2), Number(userInput3)))}`    ;
        } else {
            document.getElementById("output-5").innerText = "";
        }
    });

    // Take user input and print if the number is even or odd
    const form6 = document.getElementById("testForm-6");
    form6.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("userInput-6").value;
        if (userInput !== "") {
            document.getElementById("output-6").innerText = userInput % 2 === 0 ? "Even" : "Odd";
        } else {
            document.getElementById("output-6").innerText = "";
        }
    });

    // Take user input and check if it is a vowel or consonant
    const form7 = document.getElementById("testForm-7");
    form7.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("userInput-7").value;
        if (userInput !== "") {
            document.getElementById("output-7").innerText = "aeiou".includes(userInput.toLowerCase()) ? "Vowel" : "Consonant";
        } else {
            document.getElementById("output-7").innerText = "";
        }
    });

    // Take user input and print all numbers between 1 and that number
    const form8 = document.getElementById("testForm-8");
    form8.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("userInput-8").value;
        if (userInput !== "") {
            document.getElementById("output-8").innerText = Array.from({ length: userInput }, (_, i) => i + 1).join(", ");
        } else {
            document.getElementById("output-8").innerText = "";
        }
    });

    // Take user input and print a multiplication table up to 12.
    const form9 = document.getElementById("testForm-9");
    form9.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("userInput-9").value;
        if (userInput !== "") {
            document.getElementById("output-9").innerText = Array.from({ length: 12 }, (_, i) => `${userInput * (i + 1)}`).join(", ");
        } else {
            document.getElementById("output-9").innerText = "";
        }
    });

    // Take user input and print all even numbers between 1 to this number
    const form10 = document.getElementById("testForm-10");
    form10.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("userInput-10").value;
        if (userInput !== "") {
            document.getElementById("output-10").innerText = Array.from({ length: Math.floor(userInput / 2) }, (_, i) => (i + 1) * 2).join(", ");
        } else {
            document.getElementById("output-10").innerText = "";
        }
    });

    // Take 2 user inputs, base and exponent, and print the result of base raised to the power of exponent
    const form11 = document.getElementById("testForm-11");
    form11.addEventListener("submit", (event) => {
        event.preventDefault();
        const base = document.getElementById("userInput-11a").value;
        const exponent = document.getElementById("userInput-11b").value;
        if (base !== "" && exponent !== "") {
            document.getElementById("output-11").innerText = Math.pow(base, exponent);
        } else {
            document.getElementById("output-11").innerText = "";
        }
    });

    // Take 5 user inputs for marks and calculate total, average and percentage
    const form12 = document.getElementById("testForm-12");
    form12.addEventListener("submit", (event) => {
        event.preventDefault();
        const marks = [
            document.getElementById("userInput-12a").value,
            document.getElementById("userInput-12b").value,
            document.getElementById("userInput-12c").value,
            document.getElementById("userInput-12d").value,
            document.getElementById("userInput-12e").value  
        ].map(Number);
        const total = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = total / marks.length;
        const percentage = (total / (marks.length * 100)) * 100;
        document.getElementById("output-12").innerText = `Total: ${total}, Average: ${average}, Percentage: ${percentage}%`;
    });

    // Take user input and print the number of days in the month.
    const form13 = document.getElementById("testForm-13");
    form13.addEventListener("submit", (event) => {
        event.preventDefault();
        const month = document.getElementById("userInput-13").value;
        const monthsWithDays ={
            "1": 31,
            "2": 28, // Simplified, not considering leap years
            "3": 31,
            "4": 30,
            "5": 31,
            "6": 30,
            "7": 31,
            "8": 31,
            "9": 30,
            "10": 31,
            "11": 30,
            "12": 31
        }
        document.getElementById("output-13").innerText = `${monthsWithDays[month] || 0}`;
    });

    // Take 5 user inputs for marks and calculate total, average and percentage, for each subject
    const form14 = document.getElementById("testForm-14");
    form14.addEventListener("submit", (event) => {
        event.preventDefault();
        const subjects = {
            "Physics" : document.getElementById("userInput-14a").value, 
            "Chemistry" : document.getElementById("userInput-14b").value,
            "Biology" : document.getElementById("userInput-14c").value,
            "Mathematics" : document.getElementById("userInput-14d").value,
            "Computer" : document.getElementById("userInput-14e").value
        };
        const percentages = {};
        for (const subject in subjects) {
            const mark = subjects[subject];
            const percentage = (mark / 100) * 100;
            percentages[subject] = percentage;
        }
        document.getElementById("output-14").innerText = `Percentages: ${Array.from(Object.entries(percentages), ([subject, percentage]) => `${subject}: ${percentage}%`).join(", ")}`;

    });

    // Take user input and print the number of days in the month, With Switch Case
    const form15 = document.getElementById("testForm-15");
    form15.addEventListener("submit", (event) => {
        event.preventDefault();
        const month = document.getElementById("userInput-15").value;
        const monthsWithDays = {
            "1": 31,
            "2": 28, // Simplified, not considering leap years
            "3": 31,
            "4": 30,
            "5": 31,
            "6": 30,
            "7": 31,
            "8": 31,
            "9": 30,
            "10": 31,
            "11": 30,
            "12": 31
        }
        let days;
        switch (monthsWithDays[month]) {
            case 31:
                days = 31;
                break;
            case 28:
                days = 28;
                break;
            case 30:
                days = 30;
                break;
            default:
                days = 0;
        }
        document.getElementById("output-15").innerText = `${days}`;
    });

    // Take user input and check if it is a vowel or consonant, With Switch Case
    const form16 = document.getElementById("testForm-16");
    form16.addEventListener("submit", (event) => {
        event.preventDefault();
        const char = document.getElementById("userInput-16").value.toLowerCase();
        
        if (char === "") {
            document.getElementById("output-16").innerText = "";
            return;
        }
        
        let result;
        switch (char) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                result = "Vowel";
                break;
            default:
                result = "Consonant";
        }
        document.getElementById("output-16").innerText = `${result}`;
        
        // Other ways to do it:
        // switch("aeiou".includes(char)) {
        //     case true:
        //         result = "Vowel";
        //         break;
        //     case false:
        //         result = "Consonant";
        //         break;
        //     default:
        //         result = "";
        // }
        // document.getElementById("output-16").innerText = `${result}`;

    });

}

document.addEventListener("DOMContentLoaded", main());