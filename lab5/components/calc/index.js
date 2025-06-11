export class CalcComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML() {
        return `
            <div class="main-panel">
                <div class="checklist-container">
                    <div class="li-header">Чек-лист</div>
                    <ul class="checklist">
                        <li>Поменять калькулятор</li>
                        <li>Сделать ссылку на github</li>
                        <li>Надпись с автором</li>
                        <li>Список того, что нужно сделать</li>
                        <li>Сделать стилистику Spotify</li>
                        <li>Иконка на вкладке и лого</li>
                    </ul>
                </div>
                <div class="calc-background"> 
                    <!-- блок с экраном калькулятора, где будет выводиться результат вычислений. -->
                    <div id="result" class="result big">
                    0
                    </div>
            
                    <!-- блок с кнопками калькулятора. -->
                    <div>
                    <!--горизонтальный ряд из четырех кнопок-->
                    <div>  
                        <button id="btn_op_clear" class="my-btn secondary">C</button>    <!-- про тэг кнопки: https://www.w3schools.com/tags/tag_button.asp -->
                        <button id="btn_op_mul_10" class="my-btn secondary">*10</button>
                        <button id="btn_op_del_10" class="my-btn secondary">/10</button>
                        <button id="btn_op_backspace" class="my-btn primary execute">Back</button>
                    </div>
            
                    <div>
                        <button id="btn_digit_7" class="my-btn">7</button>
                        <button id="btn_digit_8" class="my-btn">8</button>
                        <button id="btn_digit_9" class="my-btn">9</button>
                        <button id="btn_op_mult" class="my-btn primary">x</button>
                        <button id="btn_op_div" class="my-btn secondary">/</button>
                    </div>
            
                    <div>
                        <button id="btn_digit_4" class="my-btn">4</button>
                        <button id="btn_digit_5" class="my-btn">5</button>
                        <button id="btn_digit_6" class="my-btn">6</button>
                        <button id="btn_op_minus" class="my-btn primary">-</button>
                        <button id="btn_op_change" class="my-btn secondary">+/-</button>
                    </div>
            
                    <div>
                        <button id="btn_digit_1" class="my-btn">1</button>
                        <button id="btn_digit_2" class="my-btn">2</button>
                        <button id="btn_digit_3" class="my-btn">3</button>
                        <button id="btn_op_plus" class="my-btn primary">+</button>
                        <button id="btn_op_mod" class="my-btn secondary">%</button>
                    </div>
            
                    <div>
                        <button id="btn_digit_0" class="my-btn">0</button>
                        <button id="btn_digit_dot" class="my-btn">.</button>
                        <button id="btn_op_sqrt" class="my-btn secondary">√</button>
                        <button id="btn_op_equal" class="my-btn primary execute">=</button>
                    </div>

                    <div>
                        <button id="btn_op_increment" class="my-btn secondary">+1</button>
                        <button id="btn_op_square" class="my-btn secondary">x²</button>
                        <button id="btn_op_fac" class="my-btn secondary">x!</button>
                        <button id="btn_op_zeros" class="my-btn primary execute">000</button>
                    </div>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}