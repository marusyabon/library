class BooksModel {
	constructor() {
		this._data = [];
		this._url = 'http://localhost:3000/books/';
	}

	getDataFromServer() {
		return webix.ajax().get(this._url);
	}

	addItem(data) {
		return webix.ajax().post(this._url, data);
	}

	updateItem(data) {
		return webix.ajax().put(this._url, data);
	}

	removeItem(id) {
		return webix.ajax().del(this._url, id);
	}
}

export default new BooksModel();