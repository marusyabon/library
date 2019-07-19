import { JetView } from 'webix-jet';
import UsersModel from '../../models/users';
import {toggleElement} from '../../scripts'; 

export default class UserForm extends JetView {
	config() {
		return {
			view: 'window',
			localId: 'userWindow',
			head: 'Edit user',
			width: 600,
			position: 'center',
			body: {
				rows: [
					{
						view: 'form',
						localId: 'userForm',
						elements: [
							{ view: 'text', name: 'id', localId: 'id', hidden: true },
							{ view: 'text', label: 'First name', name: 'user_name', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Last name', name: 'user_surname', labelWidth: 90, labelAlign: 'right' },
							{ view: 'combo', label: 'Role', name: 'role_name', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Passport ID', name: 'passport_ID', labelWidth: 90, labelAlign: 'right' },
							{ view: 'datepicker', label: 'Birth date', name: 'birth_date', localId: 'birth_date', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Address', name: 'address', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Phone', name: 'phone_numbers', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Email', name: 'email', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Password', name: 'account_password', localId: 'initial_password', labelWidth: 90, labelAlign: 'right' },
						]
					},					
					{
						margin: 20,
						paddingY: 10,
						cols: [
							{},
							{
								view: 'button', value: 'Save', type: 'form', localId: 'saveBtn', width: 100,
								click: () => {
									this.saveForm();
								}
							},
							{
								view: 'button', value: 'Cancel', width: 100,
								click: () => {
									this.hideWindow();
								}
							},
							{}
						]
					}
				]
			}
		};
	}

	init() {
		this.form = this.$$('userForm');
		this.window = this.$$('userWindow');
	}

	showWindow(user) {	
		this.isNew = user ? false : true;	

		if(this.isNew) {
			this.window.getHead().setHTML('Add user');
			this.window.getHead().refresh();
		}
		else {
			this.form.setValues(user);
		}

		const initial_password = this.$$('initial_password');
		toggleElement(this.isNew, initial_password);
		

		this.getRoot().show();
	}

	saveForm() {
		const data = this.form.getValues();

		if(this.isNew) {
			UsersModel.addItem(data).then((response) => {
				const status = response.json().serverStatus;
				if(status == 2) {
					this.webix.message('Saved');
					this.hideWindow();
				}
			});
		}

		else {
			UsersModel.updateItem(data).then((response) => {
				const status = response.json().serverStatus;
				if(status == 2) {
					this.webix.message('Updated');
					this.hideWindow();
				}
			});
		}
	}

	hideWindow() {
		this.form.clear();
		this.getRoot().hide();
	}
}