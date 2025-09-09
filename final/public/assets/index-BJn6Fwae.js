(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();class m{constructor(t){this.parent=t}getHTML(t){return console.log(t),`
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
            `}render(t){console.log("here");const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e)}}class g{constructor(t){this.parent=t}addListeners(t){document.getElementById("back-button").addEventListener("click",t)}getHTML(){return`
                <button id="back-button" class="btn btn-primary" type="button">Назад</button>
            `}render(t){const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.addListeners(t)}}class v{constructor(t){this.parent=t}getHTML(){return`
                <button class="btn btn-warning mb-3" id="edit-button" style="color: white;">
                    Редактировать
                </button>
            `}addListener(t){document.getElementById("edit-button").addEventListener("click",t)}render(t){const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.addListener(t)}}class p{constructor(t){this.parent=t}getHTML(){return`
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
            `}addNavigationListeners(){this.parent.querySelector(".home").addEventListener("click",()=>{window.location.reload()})}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.addNavigationListeners()}}class b{async get(t){try{const e=await fetch(t);return{data:await e.json(),status:e.status}}catch(e){return console.error("GET error:",e),{data:null,status:500}}}async post(t,e){try{const a=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return{data:await a.json(),status:a.status}}catch(a){return console.error("POST error:",a),{data:null,status:500}}}async patch(t,e){try{const a=await fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return{data:await a.json(),status:a.status}}catch(a){return console.error("PATCH error:",a),{data:null,status:500}}}async delete(t){try{const e=await fetch(t,{method:"DELETE"});return{data:await e.json(),status:e.status}}catch(e){return console.error("DELETE error:",e),{data:null,status:500}}}}const o=new b;class f{constructor(){this.baseUrl="http://localhost:3000"}getStocks(){return`${this.baseUrl}/stocks`}getStockById(t){return`${this.baseUrl}/stocks/${t}`}createStock(){return`${this.baseUrl}/stocks`}removeStockById(t){return`${this.baseUrl}/stocks/${t}`}updateStockById(t){return`${this.baseUrl}/stocks/${t}`}}const d=new f;class L{constructor(t,e){this.parent=t,this.data=e}async updateCat(t){const{data:e,status:a}=await o.patch(d.updateStockById(this.data.id),t);return e}async deleteCat(){const{data:t,status:e}=await o.delete(d.removeStockById(this.data.id));return t}get pageRoot(){return document.getElementById("edit-page")}getHTML(){return`
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
            `}getEditFormHTML(){return`
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
            `}clickBack(){new l(this.parent,this.data).render()}addEventListeners(){const t=document.getElementById("cat-src"),e=document.getElementById("preview-image"),a=document.getElementById("delete-button"),s=document.querySelector(".buttons-container .btn-success");t.addEventListener("input",n=>{e.src=n.target.value}),s.addEventListener("click",async n=>{n.preventDefault();const i={title:document.getElementById("cat-title").value,text:document.getElementById("cat-text").value,src:document.getElementById("cat-src").value};await this.updateCat(i),this.data={...this.data,...i},new l(this.parent,this.data).render()}),a.addEventListener("click",async()=>{await this.deleteCat(),new c(this.parent).render()})}addNavigationListeners(){const t=this.parent.querySelector(".home"),e=this.parent.querySelector(".global-button");t.addEventListener("click",()=>{new c(this.parent).render()}),e.addEventListener("click",()=>{new p(this.parent).render()})}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t);const e=document.createElement("div");e.className="buttons-container",this.pageRoot.appendChild(e),new g(e).render(this.clickBack.bind(this));const s=this.getEditFormHTML();this.pageRoot.insertAdjacentHTML("beforeend",s);const n=document.querySelector('#edit-cat-form button[type="submit"]');n&&e.appendChild(n);const i=document.createElement("button");i.className="btn btn-danger",i.textContent="Удалить карточку",i.id="delete-button",e.appendChild(i),this.addEventListeners(),this.addNavigationListeners()}}class l{constructor(t,e){this.parent=t,this.data=e}async getData(){const{data:t,status:e}=await o.get(d.getStockById(this.data.id));return e===200?t:null}get pageRoot(){return document.getElementById("product-page")}getHTML(){return`
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
            `}clickBack(){new c(this.parent).render()}clickEdit(){new L(this.parent,this.data).render()}addNavigationListeners(){const t=this.parent.querySelector(".home"),e=this.parent.querySelector(".global-button");t.addEventListener("click",()=>{new c(this.parent).render()}),e.addEventListener("click",()=>{new p(this.parent).render()})}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),new g(this.pageRoot).render(this.clickBack.bind(this)),new v(this.pageRoot).render(this.clickEdit.bind(this)),(async()=>{const s=await this.getData();s&&new m(this.pageRoot).render(s)})(),this.addNavigationListeners()}}class u{constructor(t){this.parent=t}getHTML(t){let e=`${t.id}`;return e=e.trim(),`
                <div class="card" style="width: 300px; height: min-content;" id="${e}">
                    <img class="card-img-top" src="${t.src}" alt="картинка" style="width: 100%; height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${t.title}</h5>
                        <p class="card-text">${t.text}</p>
                        <button class="btn btn-success" id="click-card-${t.id}" data-id="${t.id}">Нажми на меня</button>
                    </div>
                </div>
            `}addListeners(t,e){document.getElementById(`click-card-${t.id}`).addEventListener("click",e)}render(t,e){const a=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",a),this.addListeners(t,e)}}class c{constructor(t){this.parent=t}async getData(){const{data:t,status:e}=await o.get(d.getStocks());return e===200?t:null}get pageRoot(){return document.getElementById("main-page")}getHTML(){return`
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
            `}clickCard(t){const e=document.getElementById(`${t.target.dataset.id}`),a=e.querySelector(".card-img-top").src,s=e.querySelector(".card-title").innerHTML,n=e.querySelector(".card-text").innerHTML,i=t.target.dataset.id,h={src:a,title:s,text:n,id:i};new l(this.parent,h).render()}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.addEventListeners(),(async()=>{const e=await this.getData();e&&e.forEach(a=>{new u(this.pageRoot).render(a,this.clickCard.bind(this))})})()}addEventListeners(){const t=this.parent.querySelector(".home"),e=this.parent.querySelector(".global-button");t.addEventListener("click",async()=>{this.parent.innerHTML="";const a=this.getHTML();this.parent.insertAdjacentHTML("beforeend",a),this.addEventListeners();const s=await this.getData();s&&s.forEach(n=>{new u(this.pageRoot).render(n,this.clickCard.bind(this))})}),e.addEventListener("click",()=>{this.parent.innerHTML="";const a=this.getIvanHTML();this.parent.insertAdjacentHTML("beforeend",a),this.addEventListeners()})}}const y=document.getElementById("root"),w=new c(y);w.render();
