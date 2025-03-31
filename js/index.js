// файл script.js
window.onload = function(){ 
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }
    document.getElementById("btn_op_mod").onclick = function() { 
        if (a === '') return
        selectedOperation = '%'
    }

    // унарные операции
    document.getElementById("btn_op_change").onclick = function() {
        num = b;
        if (b === '') {
            num = a;
        }
        
        num = ((+num) * -1).toString()
        changeNum(num);
    }
    document.getElementById("btn_op_sqrt").onclick = function() { 
        num = b;
        if (b === '') {
            num = a;
        }

        num = Math.sqrt(+a).toString();
        changeNum(num);
    }
    document.getElementById("btn_op_square").onclick = function() { 
        num = b;
        if (b === '') {
            num = a;
        }

        num = Math.pow(+num, 2).toString();
        changeNum(num);
    }
    document.getElementById("btn_op_fac").onclick = function() { 
        num = b;
        if (b === '') {
            num = a;
        }
        if (+num < 0) return;

        res = 1;
        for (let i = 1; i <= +num; ++i) {
            res *= i;
        }
        num = (res).toString();
        changeNum(num);
    }
    document.getElementById("btn_op_backspace").onclick = function() { 
        num = b;
        if (b === '') {
            num = a;
        }

        num = num.slice(0, -1);
        changeNum(num);
    }
    
    function changeNum(num) {
        if (b === '') {
            a = num;
        } else {
            b = num;
        }
        print(num);
    }

    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            case '%':
                expressionResult = (+a) % (+b)
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        print(a);
    }

    function print(arg) {
        outputElement.innerHTML = +arg
    }
};