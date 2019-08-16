import { URL } from '../consts';

class OrdersModel {
	constructor() {
		this._url = `${URL}/orders/`;
	}
	
	getItems(id) {
		return webix.ajax().get(`${this._url}${id}`);	
	}

	addOrder(order) {
		return webix.ajax().post(this._url, order);
	}

	updateItem(data) {
		return webix.ajax().put(this._url, data);
	}
	
	removeItem(id) {
		return webix.ajax().del(this._url, id);
	}
}

export default new OrdersModel();