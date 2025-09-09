export class IvanPage {
    constructor(parent) {
        this.parent = parent;
    }
        
    getHTML() {
        return (
            `
                <nav class="panel upper-panel">
                    <div class="logo-home">
                        <a href="#" class="logo">
                            <img src="img/calc.jpeg" width="64px">
                        </a>
                        <a href="#" class="home">
                            <img src="img/9073942_home_icon.svg" width="22px">
                        </a>
                    </div>
                    <button class="global-button" onclick="window.location.href='ivan.html'">
                        <div class="main-text author">Автор: Сысоев Иван ИУ5</div>
                    </button>
                    <a href="https://github.com/OlegWhiteRose/" class="main-text github">github</a>
                </nav>

                <div class="content">
                    <nav class="panel left-panel">
                        <button class="plus">+</button>
                        <a class="tg">
                            <img src="img/tg.svg" class="tg">
                        </a>
                    </nav>

                    <div class="main-panel">
                        <h1 class="some-text">Иван Сысоев ИУ5-41Б ICS BMSTU Student</h1>
                    </div>
                </div>
            `
        )
    }

    addNavigationListeners() {
        const home = this.parent.querySelector('.home');

        home.addEventListener('click', () => {
            window.location.reload();
        });
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addNavigationListeners();
    }
}

