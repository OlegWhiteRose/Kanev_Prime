import { BackButtonComponent } from "../../components/back-button/index.js";
import { CatEditFormComponent } from "../../components/cat-edit-form/index.js";
import { CatPage } from "../cat/index.js";
import { MainPage } from "../main/index.js";

import { ajax } from "../../modules/ajax.js";
import { stockUrls } from "../../modules/stockUrls.js";

export class CatEditPage {
    constructor(parent, catId) {
        this.parent = parent;
        this.id = catId;
        this.data = null;
        this.formComponent = null;
    }

    async loadCatData() {
        const { data } = await ajax.get(stockUrls.getStockById(this.id));
        this.data = data;
        return data;
    }

    async updateCat(updatedData) {
        const { data } = await ajax.patch(stockUrls.updateStockById(this.id), updatedData);
        return data;
    }

    async deleteCat() {
        const { data } = await ajax.delete(stockUrls.removeStockById(this.id));
        return data;
    }

    get pageRoot() {
        return document.getElementById('edit-page');
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
                        <div id="edit-page" class="edit-page"></div>
                    </div>
                </div>
            `
        );
    }

    clickBack() {
        const catPage = new CatPage(this.parent, this.id);
        catPage.render();
    }

    addEventListeners() {
        const deleteButton = document.getElementById('delete-button');
        const saveButton = document.querySelector('.buttons-container .btn-success');

        if (saveButton) {
            saveButton.addEventListener('click', async (e) => {
                e.preventDefault();

                const updatedData = this.formComponent.getFormData();

                await this.updateCat(updatedData);
                this.data = { ...this.data, ...updatedData };

                const catPage = new CatPage(this.parent, this.id);
                catPage.render();
            });
        }

        if (deleteButton) {
            deleteButton.addEventListener('click', async () => {
                await this.deleteCat();

                const mainPage = new MainPage(this.parent);
                mainPage.render();
            });
        }
    }

    addNavigationListeners() {
        const home = this.parent.querySelector('.home');

        home.addEventListener('click', () => {
            const mainPage = new MainPage(this.parent);
            mainPage.render();
        });
    }

    async render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';
        this.pageRoot.appendChild(buttonsContainer);

        const backButton = new BackButtonComponent(buttonsContainer);
        backButton.render(this.clickBack.bind(this));

        this.formComponent = new CatEditFormComponent(this.pageRoot, this.data);
        this.formComponent.render();

        await this.loadCatData();

        this.formComponent.update(this.data);

        const saveButton = document.querySelector('#edit-cat-form button[type="submit"]');
        if (saveButton) {
            buttonsContainer.appendChild(saveButton);
        }

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger';
        deleteButton.textContent = 'Удалить карточку';
        deleteButton.id = 'delete-button';
        buttonsContainer.appendChild(deleteButton);

        this.addEventListeners();
        this.addNavigationListeners();
    }
}

