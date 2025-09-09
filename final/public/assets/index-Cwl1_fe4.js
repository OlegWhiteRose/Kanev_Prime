(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();class g{constructor(t){this.parent=t}getHTML(t){return`
                <div class="card mb-3" style="width: 540px;" id="${t.id}">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${t.src}" class="img-fluid" alt="картинка" style="width: 100%; height: 200px; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${t.title}</h5>
                                <p class="card-text">${t.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `}render(t){const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e)}}class u{constructor(t){this.parent=t}addListeners(t){document.getElementById("back-button").addEventListener("click",t)}getHTML(){return`
                <button id="back-button" class="btn btn-primary" type="button">Назад</button>
            `}render(t){const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.addListeners(t)}}class p{constructor(t){this.parent=t}getHTML(){return`
                <button class="btn btn-info" id="edit-button" style="color: white;">
                    Редактировать
                </button>
            `}addListener(t){document.getElementById("edit-button").addEventListener("click",t)}render(t){const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.addListener(t)}}class m{constructor(t,e){this.parent=t,this.catData=e}getHTML(){return this.catData?`
                <div class="container mt-4">
                    <form id="edit-cat-form">
                        <div class="mb-3">
                            <label for="cat-title" class="form-label">Название</label>
                            <input type="text" class="form-control" id="cat-title" value="${this.catData.title}" required>
                        </div>
                        <div class="mb-3">
                            <label for="cat-text" class="form-label">Описание</label>
                            <textarea class="form-control" id="cat-text" rows="3" required>${this.catData.text}</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="cat-src" class="form-label">URL изображения</label>
                            <input type="url" class="form-control" id="cat-src" value="${this.catData.src}" required>
                        </div>
                        <div class="mb-3">
                            <img id="preview-image" src="${this.catData.src}" alt="Предпросмотр" class="img-thumbnail" style="max-width: 200px;">
                        </div>
                        <button type="submit" class="btn btn-success">Сохранить изменения</button>
                    </form>
                </div>
            `:'<div class="container mt-4"><div class="text-center">Загрузка...</div></div>'}addEventListeners(){const t=document.getElementById("cat-src"),e=document.getElementById("preview-image");t&&e&&t.addEventListener("input",a=>{e.src=a.target.value})}getFormData(){return{title:document.getElementById("cat-title").value,text:document.getElementById("cat-text").value,src:document.getElementById("cat-src").value}}render(){const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.addEventListeners()}update(t){this.catData=t;const e=this.parent.querySelector(".container");e&&(e.outerHTML=this.getHTML(),this.addEventListeners())}}class v{async get(t){try{const e=await fetch(t);return{data:await e.json(),status:e.status}}catch(e){return console.error("GET error:",e),{data:null,status:500}}}async post(t,e){try{const a=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return{data:await a.json(),status:a.status}}catch(a){return console.error("POST error:",a),{data:null,status:500}}}async patch(t,e){try{const a=await fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return{data:await a.json(),status:a.status}}catch(a){return console.error("PATCH error:",a),{data:null,status:500}}}async delete(t){try{const e=await fetch(t,{method:"DELETE"});return{data:await e.json(),status:e.status}}catch(e){return console.error("DELETE error:",e),{data:null,status:500}}}}const r=new v;class b{constructor(){this.baseUrl="http://localhost:3000"}getStocks(){return`${this.baseUrl}/stocks`}getStockById(t){return`${this.baseUrl}/stocks/${t}`}createStock(){return`${this.baseUrl}/stocks`}removeStockById(t){return`${this.baseUrl}/stocks/${t}`}updateStockById(t){return`${this.baseUrl}/stocks/${t}`}}const c=new b;class f{constructor(t,e){this.parent=t,this.id=e,this.data=null,this.formComponent=null}async loadCatData(){const{data:t}=await r.get(c.getStockById(this.id));return this.data=t,t}async updateCat(t){const{data:e}=await r.patch(c.updateStockById(this.id),t);return e}async deleteCat(){const{data:t}=await r.delete(c.removeStockById(this.id));return t}get pageRoot(){return document.getElementById("edit-page")}getHTML(){return`
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
            `}clickBack(){new l(this.parent,this.id).render()}addEventListeners(){const t=document.getElementById("delete-button"),e=document.querySelector(".buttons-container .btn-success");e&&e.addEventListener("click",async a=>{a.preventDefault();const s=this.formComponent.getFormData();await this.updateCat(s),this.data={...this.data,...s},new l(this.parent,this.id).render()}),t&&t.addEventListener("click",async()=>{await this.deleteCat(),new o(this.parent).render()})}addNavigationListeners(){this.parent.querySelector(".home").addEventListener("click",()=>{new o(this.parent).render()})}async render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t);const e=document.createElement("div");e.className="buttons-container",this.pageRoot.appendChild(e),new u(e).render(this.clickBack.bind(this)),this.formComponent=new m(this.pageRoot,this.data),this.formComponent.render(),await this.loadCatData(),this.formComponent.update(this.data);const s=document.querySelector('#edit-cat-form button[type="submit"]');s&&e.appendChild(s);const n=document.createElement("button");n.className="btn btn-danger",n.textContent="Удалить карточку",n.id="delete-button",e.appendChild(n),this.addEventListeners(),this.addNavigationListeners()}}class l{constructor(t,e){this.parent=t,this.id=e}async getData(){const{data:t,status:e}=await r.get(c.getStockById(this.id));return e===200?t:null}get pageRoot(){return document.getElementById("product-page")}getHTML(){return`
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
            `}clickBack(){new o(this.parent).render()}clickEdit(){new f(this.parent,this.id).render()}addNavigationListeners(){this.parent.querySelector(".home").addEventListener("click",()=>{new o(this.parent).render()})}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),new u(this.pageRoot).render(this.clickBack.bind(this)),new p(this.pageRoot).render(this.clickEdit.bind(this)),(async()=>{const s=await this.getData();s&&new g(this.pageRoot).render(s)})(),this.addNavigationListeners()}}class h{constructor(t){this.parent=t}getHTML(t){let e=`${t.id}`;return e=e.trim(),`
                <div class="card" style="width: 300px; height: min-content;" id="${e}">
                    <img class="card-img-top" src="${t.src}" alt="картинка" style="width: 100%; height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${t.title}</h5>
                        <p class="card-text">${t.text}</p>
                        <button class="btn btn-success" id="click-card-${t.id}" data-id="${t.id}">Нажми на меня</button>
                    </div>
                </div>
            `}addListeners(t,e){document.getElementById(`click-card-${t.id}`).addEventListener("click",e)}render(t,e){const a=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",a),this.addListeners(t,e)}}class o{constructor(t){this.parent=t}async getData(){const{data:t,status:e}=await r.get(c.getStocks());return e===200?t:null}get pageRoot(){return document.getElementById("main-page")}getHTML(){return`
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
            `}clickCard(t){const e=t.target.dataset.id;new l(this.parent,e).render()}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.addEventListeners(),(async()=>{const e=await this.getData();e&&e.forEach(a=>{new h(this.pageRoot).render(a,this.clickCard.bind(this))})})()}addEventListeners(){this.parent.querySelector(".home").addEventListener("click",async()=>{this.parent.innerHTML="";const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.addEventListeners();const a=await this.getData();a&&a.forEach(s=>{new h(this.pageRoot).render(s,this.clickCard.bind(this))})})}}const y=document.getElementById("root"),L=new o(y);L.render();
