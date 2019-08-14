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

const formatDate = (dbDate) => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const currentDay = new Date().getDate();
	const currentHours = new Date().getHours();
	const currentDateTime = new Date();

	const commentsYear = new Date(dbDate).getFullYear();
	const commentsMonth = new Date(dbDate).getMonth();
	const commentsDay = new Date(dbDate).getDate();
	const commentsHours = new Date(dbDate).getHours();
	const commentsDateTime = new Date(dbDate);

	let formatDate = webix.Date.strToDate("%i:%s");

	if (currentYear > commentsYear) {
		formatDate = webix.Date.dateToStr("%d-%m-%y");
	}
	else if(currentMonth > commentsMonth) {
		formatDate = webix.Date.dateToStr("%m-%d");
	}
	else if(currentDay > commentsDay) {
		formatDate = webix.Date.dateToStr("%D, %H:%i");
	}
	else if (currentHours > commentsHours){
		formatDate = webix.Date.dateToStr("%H:%i");
	}
	else {
		const time = (currentDateTime - commentsDateTime)/60000;
		return `${Math.round(time)} minute(s) ago`;
	}
	
	return formatDate(new Date(dbDate));

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

export {toggleElement, addItem, updateItem, formatDate};