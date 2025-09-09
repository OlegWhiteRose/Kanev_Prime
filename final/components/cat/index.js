export class CatComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        console.log(data);
        return (
            `
                <div class="card mb-3" style="width: 540px;" id="${data.id}">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data.src}" class="img-fluid" alt="картинка" style="width: 100%; height: 200px; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    render(data) {
        console.log('here');
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}
