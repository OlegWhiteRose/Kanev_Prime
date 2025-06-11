(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=e(a);fetch(a.href,n)}})();class u{constructor(t){this.parent=t}getHTML(t){return console.log(t),`
                <div class="card mb-3" style="width: 540px;" id="${t.id}">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${t.src}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${t.title}</h5>
                                <p class="card-text">${t.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `}render(t){console.log("here");const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e)}}class g{constructor(t){this.parent=t}addListeners(t){document.getElementById("back-button").addEventListener("click",t)}getHTML(){return`
                <button id="back-button" class="btn btn-primary" type="button">Назад</button>
            `}render(t){const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.addListeners(t)}}class p{async get(t){try{const e=await fetch(t);return{data:await e.json(),status:e.status}}catch(e){return console.error("GET error:",e),{data:null,status:500}}}async post(t,e){try{const s=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return{data:await s.json(),status:s.status}}catch(s){return console.error("POST error:",s),{data:null,status:500}}}async patch(t,e){try{const s=await fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return{data:await s.json(),status:s.status}}catch(s){return console.error("PATCH error:",s),{data:null,status:500}}}async delete(t){try{const e=await fetch(t,{method:"DELETE"});return{data:await e.json(),status:e.status}}catch(e){return console.error("DELETE error:",e),{data:null,status:500}}}}const i=new p;class m{constructor(){this.baseUrl="http://localhost:3000"}getStocks(){return`${this.baseUrl}/stocks`}getStockById(t){return`${this.baseUrl}/stocks/${t}`}createStock(){return`${this.baseUrl}/stocks`}removeStockById(){return`${this.baseUrl}/stocks/${id}`}updateStockById(){return`${this.baseUrl}/stocks/${id}`}}const d=new m;class v{constructor(t,e){this.parent=t,this.data=e}async getData(){const{data:t,status:e}=await i.get(d.getStockById(this.data.id));return e===200?t:null}get pageRoot(){return document.getElementById("product-page")}getHTML(){return`
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
            `}clickBack(){new l(this.parent).render()}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),new g(this.pageRoot).render(this.clickBack.bind(this)),(async()=>{const s=await this.getData();s&&new u(this.pageRoot).render(s)})()}}class o{constructor(t){this.parent=t}getHTML(t){let e=`${t.id}`;return e=e.trim(),`
                <div class="card" style="width: 300px; height: min-content;" id="${e}">
                    <img class="card-img-top" src="${t.src}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${t.title}</h5>
                        <p class="card-text">${t.text}</p>
                        <button class="btn btn-success" id="click-card-${t.id}" data-id="${t.id}">Нажми на меня</button>
                    </div>
                </div>
            `}addListeners(t,e){document.getElementById(`click-card-${t.id}`).addEventListener("click",e)}render(t,e){const s=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",s),this.addListeners(t,e)}}class l{constructor(t){this.parent=t}async getData(){const{data:t,status:e}=await i.get(d.getStocks());return e===200?t:null}get pageRoot(){return document.getElementById("main-page")}getHTML(){return`
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
            `}getIvanHTML(){return`
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
            `}clickCard(t){const e=document.getElementById(`${t.target.dataset.id}`),s=e.querySelector(".card-img-top").src,a=e.querySelector(".card-title").innerHTML,n=e.querySelector(".card-text").innerHTML,c=t.target.dataset.id,h={src:s,title:a,text:n,id:c};new v(this.parent,h).render()}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.addEventListeners(),(async()=>{const e=await this.getData();e&&e.forEach(s=>{new o(this.pageRoot).render(s,this.clickCard.bind(this))})})()}addEventListeners(){const t=this.parent.querySelector(".home"),e=this.parent.querySelector(".global-button");t.addEventListener("click",async()=>{this.parent.innerHTML="";const s=this.getHTML();this.parent.insertAdjacentHTML("beforeend",s),this.addEventListeners();const a=await this.getData();a&&a.forEach(n=>{new o(this.pageRoot).render(n,this.clickCard.bind(this))})}),e.addEventListener("click",()=>{this.parent.innerHTML="";const s=this.getIvanHTML();this.parent.insertAdjacentHTML("beforeend",s),this.addEventListeners()})}}const b=document.getElementById("root"),f=new l(b);f.render();
