 
        let cgpa = 9;
        let internship;
        if (cgpa >= 9) {
            internship = "Internship in Google";
        } else if (cgpa >= 8) {
            internship = "Internship in TCS";
        } else if (cgpa >= 7) {
            internship = "Internship in Infosys";
        } else {
            internship = "In-house Internship";
        }
        document.getElementById("ifElseResult").innerText = internship;

        let a = 2;
        let switchText;
        switch (a) {
            
            case 1:
                switchText = "Case 1 match";
                break;
            case 2:
                switchText = "Case 2 match\nCase 3 match";
                break;
            case 3:
                switchText = "Case 3 match";
                break;
            default:
                switchText = "No Case match";
        }
        document.getElementById("switchResult").innerText = switchText;

        let num1 = 10,
            num2 = 5,
            operation = "+";
        let result;
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = (num2 !== 0) ? (num1 / num2) : "Cannot divide by zero";
                break;
            default:
                result = "Invalid Operation";
        }
        document.getElementById("calcResult").innerText = `10 ${operation} 5 = ${result}`;

        let forLoopOutput = "";
        for (let i = 1; i <= 5; i++) {
            forLoopOutput += i + " ";
        }
        document.getElementById("forLoopResult").innerText = forLoopOutput;

        let k = 2,
            whileLoopOutput = "";
        while (k <= 20) {
            whileLoopOutput += k + " ";
            k += 2;
        }
        document.getElementById("whileLoopResult").innerText = whileLoopOutput;

        let num = 2,
            doWhileOutput = "";
        do {
            doWhileOutput += num + " ";
            num++;
        } while (num <= 20);
    