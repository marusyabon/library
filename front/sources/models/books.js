import { URL } from '../consts';

class BooksModel {
	constructor() {
		this._data = [];
		this._url = `${URL}/books/`;
	}

	getDataFromServer(id) {
		const user_id = {user_id: id};
		return webix.ajax().get(this._url, user_id);
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