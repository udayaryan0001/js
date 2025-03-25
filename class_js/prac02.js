 
        var num1 = 10;
        var num2 = 5;
        var operator = "+";  

        document.write("Num1: " + num1 + "<br>");
        document.write("Num2: " + num2 + "<br>");
        document.write("Operator: " + operator + "<br>");

        document.write("Result: ");

        switch (operator) {
            case "+":
                document.write(num1 + num2);
                break;
            case "-":
                document.write(num1 - num2);
                break;
            case "*":
                document.write(num1 * num2);
                break;
            case "%":
                document.write(num1 % num2);
                break;
            case "**":
                document.write(num1 ** num2);  
                break;
            default:
                document.write("Invalid operator");
        }
    