import { BackButtonComponent } from "../../components/back-button/index.js";
import { CatPage } from "../cat/index.js";
import { MainPage } from "../main/index.js";
import { IvanPage } from "../ivan/index.js";

import { ajax } from "../../modules/ajax.js";
import { stockUrls } from "../../modules/stockUrls.js";

export class CatEditPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    async updateCat(updatedData) {
        const { data, status } = await ajax.patch(stockUrls.updateStockById(this.data.id), updatedData);
        return data;
    }

    async deleteCat() {
        const { data, status } = await ajax.delete(stockUrls.removeStockById(this.data.id));
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

    getEditFormHTML() {
        return (
            `
                <div class="container mt-4">
                    <form id="edit-cat-form">
                        <div class="mb-3">
                            <label for="cat-title" class="form-label">Название</label>
                            <input type="text" class="form-control" id="cat-title" value="${this.data.title}" required>
                        </div>
                        <div class="mb-3">
                            <label for="cat-text" class="form-label">Описание</label>
                            <textarea class="form-control" id="cat-text" rows="3" required>${this.data.text}</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="cat-src" class="form-label">URL изображения</label>
                            <input type="url" class="form-control" id="cat-src" value="${this.data.src}" required>
                        </div>
                        <div class="mb-3">
                            <img id="preview-image" src="${this.data.src}" alt="Предпросмотр" class="img-thumbnail" style="max-width: 200px;">
                        </div>
                        <button type="submit" class="btn btn-success">Сохранить изменения</button>
                    </form>
                </div>
            `
        );
    }

    clickBack() {
        const catPage = new CatPage(this.parent, this.data);
        catPage.render();
    }

    addEventListeners() {
        const srcInput = document.getElementById('cat-src');
        const previewImage = document.getElementById('preview-image');
        const deleteButton = document.getElementById('delete-button');
        const saveButton = document.querySelector('.buttons-container .btn-success');

        srcInput.addEventListener('input', (e) => {
            previewImage.src = e.target.value;
        });

        // Обработчик для кнопки сохранения (теперь находится в контейнере)
        saveButton.addEventListener('click', async (e) => {
            e.preventDefault();

            const updatedData = {
                title: document.getElementById('cat-title').value,
                text: document.getElementById('cat-text').value,
                src: document.getElementById('cat-src').value
            };

            await this.updateCat(updatedData);
            this.data = { ...this.data, ...updatedData };

            const catPage = new CatPage(this.parent, this.data);
            catPage.render();
        });

        deleteButton.addEventListener('click', async () => {
            await this.deleteCat();

            const mainPage = new MainPage(this.parent);
            mainPage.render();
        });
    }

    addNavigationListeners() {
        const home = this.parent.querySelector('.home');
        const global = this.parent.querySelector('.global-button');

        home.addEventListener('click', () => {
            const mainPage = new MainPage(this.parent);
            mainPage.render();
        });

        global.addEventListener('click', () => {
            const ivanPage = new IvanPage(this.parent);
            ivanPage.render();
        });
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';
        this.pageRoot.appendChild(buttonsContainer);

        const backButton = new BackButtonComponent(buttonsContainer);
        backButton.render(this.clickBack.bind(this));

        const formHTML = this.getEditFormHTML();
        this.pageRoot.insertAdjacentHTML('beforeend', formHTML);

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