class LikesModel {
	constructor() {
		this._data = [];
		this._url = 'http://localhost:3000/likes/';
	}

	getDataFromServer() {
		return webix.ajax().get(this._url);
	}

	addLike(userId, bookId) {
		const data = {
			userId: userId, 
			bookId: bookId
		};

		return webix.ajax().post(this._url, data);
	}
}

export default new LikesModel();