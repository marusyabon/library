import { JetView } from 'webix-jet';

export default class Settings extends JetView {
	config() {
		const button = {
			view: 'button',
			id: 'saveChanges',
			value: 'Save',
			type: 'form',
			inputWidth: 100,
			click: () => { }
		};

		const userData = {
			view: 'form',
			localId: 'userDataForm',
			elements: [
				{ view: 'text', name: 'userId', localId: 'user_id', hidden: true },
				{ view: 'text', name: 'firstname', localId: 'firstname'},
				{ view: 'text', name: 'lastname', localId: 'lastname'},
				{ view: 'text', name: 'passport_id', localId: 'passport_id'},
				{ view: 'text', name: 'birth_date', localId: 'birth_date'},
				{ view: 'text', name: 'address', localId: 'address'},
				{ view: 'text', name: 'phone_number', localId: 'phone_number'},
				{ view: 'text', name: 'email', localId: 'email'},
				button
			]
		};

		return {
			rows: [userData]
		};
	}

	init() {
		const userData = this.app._userData;
		this.$$('userDataForm').setValues(userData);
	}
}