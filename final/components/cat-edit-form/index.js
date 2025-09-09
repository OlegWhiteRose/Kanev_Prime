export class CatEditFormComponent {
    constructor(parent, catData) {
        this.parent = parent;
        this.catData = catData;
    }

    getHTML() {
        if (!this.catData) {
            return '<div class="container mt-4"><div class="text-center">Загрузка...</div></div>';
        }
        
        return (
            `
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
            `
        );
    }

    addEventListeners() {
        const srcInput = document.getElementById('cat-src');
        const previewImage = document.getElementById('preview-image');

        if (srcInput && previewImage) {
            srcInput.addEventListener('input', (e) => {
                previewImage.src = e.target.value;
            });
        }
    }

    getFormData() {
        return {
            title: document.getElementById('cat-title').value,
            text: document.getElementById('cat-text').value,
            src: document.getElementById('cat-src').value
        };
    }

    render() {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addEventListeners();
    }

    update(newCatData) {
        this.catData = newCatData;
        const container = this.parent.querySelector('.container');
        if (container) {
            container.outerHTML = this.getHTML();
            this.addEventListeners();
        }
    }
}