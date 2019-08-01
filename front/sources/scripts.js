import {SUCCESS} from './consts';

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
		if(status == SUCCESS) {
			Model.getDataFromServer().then(() => {
				successAction();
			});			
		}
	});
};

const updateItem = (Model, data, successAction) => {
	Model.updateItem(data).then((response) => {

		const status = response.json().serverStatus;
		if(status == SUCCESS) {
			successAction();
		}
	});
};

webix.protoUI({
	name: "activeList",
	defaults: {
		autoheight: true,
		borderless: true,
		type: {
			height: 30
		}
	}
}, webix.ui.list);

export {toggleElement, addItem, updateItem};