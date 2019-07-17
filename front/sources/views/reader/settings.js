import { JetView } from 'webix-jet';
import UsersModel from '../../models/users';

export default class Settings extends JetView {
	config() {
		const button = {
			view: 'button',
			id: 'saveChanges',
			value: 'Save',
			type: 'form',
			inputWidth: 100,
			click: () => {
				this.saveForm();
			}
		};

		const userData = {
			view: 'form',
			localId: 'userDataForm',
			elements: [
				{ view: 'text', name: 'id', localId: 'user_id', hidden: true },
				{ view: 'text', label: 'First name',name: 'user_name', labelWidth: 90, labelAlign: 'right'},
				{ view: 'text', label: 'Last name',name: 'user_surname', labelWidth: 90, labelAlign: 'right'},
				{ view: 'text', label: 'Passport ID',name: 'passport_ID', labelWidth: 90, labelAlign: 'right'},
				{ view: 'datepicker', label: 'Birth date',name: 'birth_date', localId: 'birth_date', labelWidth: 90, labelAlign: 'right'},
				{ view: 'text', label: 'Address',name: 'address', labelWidth: 90, labelAlign: 'right'},
				{ view: 'text', label: 'Phone',name: 'phone_numbers', labelWidth: 90, labelAlign: 'right'},
				{ view: 'text', label: 'Email',name: 'email', labelWidth: 90, labelAlign: 'right'},
				button
			]
		};

		return {
			rows: [userData]
		};
	}

	init() {
		const id = this.getParam("id", true);

		UsersModel.getItem(id).then((data) => {
			const userData = data.json()[0];
			userData.birth_date = new Date (userData.birth_date);
			this.$$('userDataForm').setValues(userData);
		});	
	}

	saveForm () {
		const data = this.$$('userDataForm').getValues();
		UsersModel.updateItem(data).then((response) => {
			const status = response.json().serverStatus;
			if(status == 2) {
				this.webix.message('New data saved');
			}
		});
	}
}