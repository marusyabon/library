import { URL } from '../consts';

class UsersModel {
	constructor() {
		this._url = `${URL}/users/`;
	}

	getDataFromServer() {
		return webix.ajax().get(this._url);
	}
	
	getItem(id) {
		return webix.ajax().get(`${this._url}${id}`);	
	}

	addItem(data) {
		return webix.ajax().post(this._url, data);
	}

	updateItem(data) {
		return webix.ajax().put(this._url, data);
	}
}

export default new UsersModel();