import { JetView } from 'webix-jet';
import UsersModel from '../../models/users';
import {toggleElement, addItem, updateItem} from '../../scripts'; 

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
							{ view: 'combo', label: 'Role', name: 'capabilities_id', labelWidth: 90, labelAlign: 'right', options: [
								{id: 1, value: 'reader'},
								{id: 2, value: 'labrarian'},
								{id: 3, value: 'admin'}
							] },
							{ view: 'text', label: 'Passport ID', name: 'passport_ID', labelWidth: 90, labelAlign: 'right' },
							{ view: 'datepicker', label: 'Birth date', name: 'birth_date', localId: 'birth_date', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Address', name: 'address', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Phone', name: 'phone_numbers', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Email', name: 'email', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Password', name: 'account_password', localId: 'initial_password', labelWidth: 90, labelAlign: 'right' },
						],
						rules: {
							'capabilities_id': webix.rules.isNotEmpty,
							'email': webix.rules.isNotEmpty,
							'account_password': webix.rules.isNotEmpty,
						}
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

		const successAction = (message) => {
			this.webix.message(message);
			this.hideWindow();
		};
		
		if(this.form.validate()) {
			if(this.isNew) {
				addItem(UsersModel, data, successAction('Saved'));				
			}

			else {
				updateItem(UsersModel, data, successAction('Updated'));
			}
		}		
	}

	hideWindow() {
		this.form.clearValidation();
		this.form.clear();
		this.getRoot().hide();
	}
}