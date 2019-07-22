class BooksModel {
	constructor() {
		this._data = [];
		this._url = 'http://localhost:3000/books/';
	}

	getDataFromServer() {
		return webix.ajax().get(this._url);
	}

	removeItem(id) {
		return webix.ajax().del(this._url, id);
	}
}

export default new BooksModel();