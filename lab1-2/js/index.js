window.onload = function(){ 
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    document.addEventListener('click', (event) => {
        if (event.target.id == 'btn_op_equal') {
            const text = outputElement.innerHTML.trim();
            if (text) {
                const num = parseInt(text);
                const hex = num.toString(16).padStart(6, '0');
                console.log(hex);
                outputElement.style.color = `#${hex}`;
            }
        } else {
            outputElement.style.color = '#000';
        }
    });
    

    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                if (a == '0' || a == '') {
                    if (digit == '.') {
                        a = '0.';
                    } else {
                        a = digit;
                    }
                } else {
                    a += digit;
                }
                print(a);
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                if (b == '0' && digit != '.') {
                    if (digit == '.') {
                        b = '0.';
                    } else {
                        b = digit;
                    }
                } else {
                    b += digit;
                }
                print(b);     
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
    document.getElementById("btn_op_zeros").onclick = function() {
        num = b;
        if (b === '') {
            num = a;
        }
        if(+num == 0) {
            return;
        }

        if(+num != 0) {
            num += '000';
        }
        
        changeNum(num);
    }
    document.getElementById("btn_op_increment").onclick = function() {
        num = b;
        if (b === '') {
            num = a;
        }
        
        num = ((+num) + 1).toString()
        changeNum(num);
    }
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
        if (+num < 0) return;

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
        if(num.length <= 1) {
            return;
        }

        num = num.slice(0, -1);
        changeNum(num);
    }
    document.getElementById("btn_op_mul_10").onclick = function() { 
        num = b;
        if (b === '') {
            num = a;
        }

        num = (+num * 10).toString();
        changeNum(num);
    }
    document.getElementById("btn_op_del_10").onclick = function() { 
        num = b;
        if (b === '') {
            num = a;
        }

        num = (+num / 10).toString();
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
        print('0');
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
        // Отображение переданного текста
        outputElement.innerHTML = arg;
        
        // Очистка ранее установленных классов размера шрифта
        outputElement.classList.remove('big', 'medium', 'small');
        
        // Применение класса в зависимости от длины текста
        if (arg.length > 28) {
            outputElement.classList.add('small');
        } else if (arg.length > 20) {
            outputElement.classList.add('medium');
        } else {
            outputElement.classList.add('big');
        }
    }

    function print(arg) {
        outputElement.innerHTML = arg;
        outputElement.classList.remove('big', 'medium', 'small');
    
        if (arg.length > 28) {
            outputElement.classList.add('small');
        } else if (arg.length > 20) {
            outputElement.classList.add('medium');
        } else {
            outputElement.classList.add('big');
        }
    }
};