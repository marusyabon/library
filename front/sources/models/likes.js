import { URL } from '../consts';

class LikesModel {
	constructor() {
		this._data = [];
		this._url = `${URL}/likes/`;
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

	removeLike(userId, bookId) {
		const data = {
			userId: userId,
			bookId: bookId
		};

		return webix.ajax().del(this._url, data);
	}
}

export default new LikesModel();