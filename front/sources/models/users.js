class UsersModel {
	constructor() {
		this._data = [];
		this._url = 'http://localhost:3000/users/';
	}

	getDataFromServer() {
		return webix.ajax().get(this._url);
	}
	
	// async sendDataToServer(saveData) {
	// 	const responseData = await webix.ajax().post(this._saveUrl, saveData);
	// 	return responseData.json();
	// }

	// getCollection() {
	// 	return this._data;
	// }

	// getItem(id) {
	// 	return this._data.find(item => item.id === id.row);
	// }

	// async addItem(item) {
	// 	const responseData = await webix.ajax().post(this._saveUrl, item);
	// 	this._data.push(webix.copy(responseData.json().data));
	// 	return responseData.json();
	// }

	// async updateItem(id, item) {
	// 	const response = await webix.ajax().put(this._saveUrl, item);
	// 	return response.json();
	// }
}

export default new UsersModel();