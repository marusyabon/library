const toggleElement = (condition, element) => {
	if (condition) {
		element.show();
	}
	else {
		element.hide();
	}
};

const addToDb = (Model, data, successAction) => {debugger
	Model.addItem(data).then((response) => {

		const status = response.json().serverStatus;
		if(status == 2) {
			successAction;
			this.hideWindow();
		}
	});
};

export {toggleElement, addToDb};