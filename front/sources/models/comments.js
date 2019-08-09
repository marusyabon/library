import { URL } from '../consts';

class CommentsModel {
	constructor() {
		this._url = `${URL}/files/`;
	}

	getDataFromServer() {
		return webix.ajax().get(this._url);
	}
	
	getItems(id) {
		return webix.ajax().get(`${this._url}${id}`);	
	}

	addItem(data) {
		return webix.ajax().post(this._url, data);
	}

	updateItem(data) {
		return webix.ajax().put(this._url, data);
	}
}

export default new CommentsModel();