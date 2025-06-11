import {CatPage} from "../cat/index.js";
import { CatCardComponent } from "../../components/cat-card/index.js";

import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    getData() {
        ajax.get(stockUrls.getStocks(), (data) => {
            data.forEach((item) => {
                const catCard = new CatCardComponent(this.pageRoot)
                catCard.render(item, this.clickCard.bind(this))
            })
        });
    }

    get pageRoot() {
        return document.getElementById('main-page')
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
                    <button class="global-button">
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
                        <div id="main-page" class="d-flex flex-wrap main-page"></div>
                    </div>
                </div>
            `
        )
    }

    getIvanHTML() {
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
                    <button class="global-button">
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

    clickCard(e) {
        const card = document.getElementById(`${e.target.dataset.id}`);
        const src = card.querySelector('.card-img-top').src;
        const title = card.querySelector('.card-title').innerHTML;
        const text = card.querySelector('.card-text').innerHTML;
        const id = e.target.dataset.id;
        const cardContent = {
            src,
            title,
            text,
            id
        };

        const catPage = new CatPage(this.parent, cardContent)
        catPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        this.addEventListeners();

        this.getData();
    }

    addEventListeners() {
        const home = this.parent.querySelector('.home');
        const global = this.parent.querySelector('.global-button');

        home.addEventListener('click', () => {
            this.parent.innerHTML = ''
            this.parent.innerHTML = ''

            const html = this.getHTML()
            this.parent.insertAdjacentHTML('beforeend', html)

            this.addEventListeners();

            const data = this.getData()
            data.forEach((item) => {
                const catCard = new CatCardComponent(this.pageRoot)
                catCard.render(item, this.clickCard.bind(this))
            })
        });

        global.addEventListener('click', () => {
            this.parent.innerHTML = ''
            const html = this.getIvanHTML()
            this.parent.insertAdjacentHTML('beforeend', html)

            this.addEventListeners();
        });
    }
}

