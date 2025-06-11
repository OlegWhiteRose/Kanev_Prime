import {CatComponent} from "../../components/cat/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";

import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";

export class CatPage {
    constructor(parent, data) {
        this.parent = parent
        this.data = data
    }

    async getData() {
        const { data, status } = await ajax.get(stockUrls.getStockById(this.data.id));

        if (status === 200) {
            return data;
        } else {
            return null;
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
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
                        <div id="product-page" class="product-page"></div>
                    </div>
                </div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
    
        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        (async () => {
            const data = await this.getData();

            if (data) {
                const stock = new CatComponent(this.pageRoot)
                stock.render(data)
            }
        })();
    }
}
