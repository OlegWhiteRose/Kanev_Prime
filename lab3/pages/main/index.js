import {CatPage} from "../cat/index.js";
import { CatCardComponent } from "../../components/cat-card/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    getData() {
        return [
            {
                id: 1,
                src: "https://media.istockphoto.com/id/623368750/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D1%82-%D0%B1%D0%B8%D1%80%D0%BC%D0%B0-%D0%B2-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80%D0%B5.jpg?s=612x612&w=0&k=20&c=Hv5tC5NE8ie-fK9RnSa9PEF-HJlRJ-g2e7q4F2y2oKc=",
                title: "Кот",
                text: "Священный кот"
            },
            {
                id: 2,
                src: "https://media.istockphoto.com/id/525982936/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%BC%D0%B0%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B5-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0-%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F-%D0%B2%D0%B2%D0%B5%D1%80%D1%85.jpg?s=612x612&w=0&k=20&c=hPC7In-efj3RllC542LI8fXENuq72cSIoONEbBqkLC0=",
                title: "Кошка",
                text: "Сомалийская кошка"
            },
            {
                id: 3,
                src: "https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=yEEyxvdyb-jUxnHmr8nXSf9qQPS0WfkhBITLVIaj7OY=",
                title: "Кот",
                text: "Британский короткошерстый"
            },
            {
                id: 4,
                src: "https://media.istockphoto.com/id/1886176449/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%B4%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%82.jpg?s=612x612&w=0&k=20&c=POD7TQBFX0ktZrny672d-cPIxw00hvtQl9NHwh97OXA=",
                title: "Кот",
                text: "Белый персидский"
            },
            {
                id: 5,
                src: "https://media.istockphoto.com/id/1071204136/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BC%D0%BF%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%B1%D0%B5%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B8%D0%B3%D1%80%D0%B0%D1%8E%D1%82.jpg?s=612x612&w=0&k=20&c=MkwQYNferCtvWJk2h4SgA0w-OdY3tUpagIAyw0DeJPs=",
                title: "Кошка",
                text: "Бенгальская смешная"
            },
            {
                id: 6,
                src: "https://media.istockphoto.com/id/1134696734/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B2%D0%B0-%D0%B8%D0%B3%D1%80%D0%B8%D0%B2%D1%8B%D1%85-%D0%BA%D0%BE%D1%82%D1%8F%D1%82%D0%B0.jpg?s=612x612&w=0&k=20&c=f87uw5spJ9fnXdfuS6qLWFcWOqds7F_7qQhogWCJmpY=",
                title: "Два кота",
                text: "Два игривых котенка"
            },
            {
                id: 7,
                src: "https://media.istockphoto.com/id/597265568/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B5-%D0%B2%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-curl-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0-%D0%BB%D0%B5%D0%B6%D0%B8%D1%82-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%81%D1%82%D0%BE%D0%BB%D0%B5.jpg?s=612x612&w=0&k=20&c=JjDCtAvN2cXHs4KY_qDHFW5VrNndonJsSwgAOBn2beY=",
                title: "Кот",
                text: "Американский кот"
            },
            {
                id: 8,
                src: "https://media.istockphoto.com/id/909106260/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D1%8B%D0%B9-%D0%BA%D0%BE%D1%82%D0%B5%D0%BD%D0%BE%D0%BA-%D0%BB%D1%8E%D0%B1%D0%B8%D1%82-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%B5%D0%B3%D0%BE-%D0%B3%D0%BB%D0%B0%D0%B4%D1%8F%D1%82-%D0%BF%D0%BE-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B9-%D1%80%D1%83%D0%BA%D0%B5.jpg?s=612x612&w=0&k=20&c=6bozVyOsX3rozDA500V8wvnVkbHHkr_e6hajpoLgXW4=",
                title: "Кот",
                text: "Счастливый кот"
            },
            {
                id: 9,
                src: "https://media.istockphoto.com/id/688581436/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%BE%D0%B1%D1%82%D0%B5%D0%B9%D0%BB-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B8-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D1%8C-%D0%BF%D0%BB%D0%B0%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D0%B8.jpg?s=612x612&w=0&k=20&c=DrnZZo3t-k66IWGYJoJewqra6s12muBq37BTPxUZN5k=",
                title: "Кошка",
                text: "Бобтейл кошка в огороде"
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
        const cardContent = {
            src,
            title,
            text
        };

        const catPage = new CatPage(this.parent, cardContent)
        catPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        this.addEventListeners();

        const data = this.getData()
        data.forEach((item) => {
            const catCard = new CatCardComponent(this.pageRoot)
            catCard.render(item, this.clickCard.bind(this))
        })
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

