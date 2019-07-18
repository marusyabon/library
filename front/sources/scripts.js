const toggleElement = (condition, element) => {
	if (condition) {
		element.show();
	}
	else {
		element.hide();
	}
};

export {toggleElement};