import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 1"
            },
            {
                id: 2,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 2"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
        ]
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

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}

