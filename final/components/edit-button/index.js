export class EditButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return (
            `
                <button class="btn btn-warning mb-3" id="edit-button" style="color: white;">
                    Редактировать
                </button>
            `
        );
    }

    addListener(listener) {
        document
            .getElementById('edit-button')
            .addEventListener('click', listener);
    }

    render(listener) {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListener(listener);
    }
}