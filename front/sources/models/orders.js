import { URL } from '../consts';

class OrdersModel {
	constructor() {
		this._url = `${URL}/orders/`;
	}
	
	getItems(id) {
		return webix.ajax().get(`${this._url}${id}`);	
	}

	getIdList(id) {
		return webix.ajax().get(`${this._url}${id}/ids`);	
	}

	addOrder(order) {
		return webix.ajax().post(this._url, order);
	}

	updateUserOrders(ordersArr, userId) {
		webix.ajax().put(this._url, {orders: ordersArr, user_id: userId});
	}

	removeItem(id) {
		return webix.ajax().del(this._url, id);
	}
}

export default new OrdersModel();