const toggleElement = (condition, element) => {
	if (condition) {
		element.show();
	}
	else {
		element.hide();
	}
};

const addItem = (Model, data, successAction) => {
	Model.addItem(data).then((response) => {

		const status = response.json().serverStatus;
		if(status == 2) {
			Model.getDataFromServer().then(() => {
				successAction;
			});			
		}
	});
};

const updateItem = (Model, data, successAction) => {
	Model.updateItem(data).then((response) => {

		const status = response.json().serverStatus;
		if(status == 2) {
			successAction;
		}
	});
};

export {toggleElement, addItem, updateItem};