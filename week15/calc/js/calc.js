let op;
        function calc() {
            let result;
            let num1 = Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);
            switch (op) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
            }
        document.getElementById("result").innerHTML = result;   
            
       if ((num2 == 0) && (op == '/' )) {
           document.getElementById("result").innerHTML = "На ноль делить нельзя!";
        }
        
        }
