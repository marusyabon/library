class BooksModel {
	constructor() {
		this._data = [];
		this._url = 'http://localhost:3000/books/';
	}

	getDataFromServer() {
		return webix.ajax().get(this._url);
	}
}

export default new BooksModel();