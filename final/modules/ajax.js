class Ajax {
    /**
     * GET запрос
     * @param {string} url - Адрес запроса
     * @returns {Promise<any>} - Ответ сервера
     */
    async get(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return { data, status: response.status };
        } catch (error) {
            console.error('GET error:', error);
            return { data: null, status: 500 };
        }
    }

    /**
     * POST запрос
     * @param {string} url - Адрес запроса
     * @param {object} data - Данные для отправки
     * @returns {Promise<any>}
     */
    async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            return { data: responseData, status: response.status };
        } catch (error) {
            console.error('POST error:', error);
            return { data: null, status: 500 };
        }
    }

    /**
     * PATCH запрос
     * @param {string} url - Адрес запроса
     * @param {object} data - Данные для обновления
     * @returns {Promise<any>}
     */
    async patch(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            return { data: responseData, status: response.status };
        } catch (error) {
            console.error('PATCH error:', error);
            return { data: null, status: 500 };
        }
    }

    /**
     * DELETE запрос
     * @param {string} url - Адрес запроса
     * @returns {Promise<any>}
     */
    async delete(url) {
        try {
            const response = await fetch(url, { method: 'DELETE' });
            const responseData = await response.json();
            return { data: responseData, status: response.status };
        } catch (error) {
            console.error('DELETE error:', error);
            return { data: null, status: 500 };
        }
    }
}

export const ajax = new Ajax();


