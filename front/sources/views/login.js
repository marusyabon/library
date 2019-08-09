import {JetView} from 'webix-jet';
import Authorization from '../authorization';

export default class LoginPage extends JetView{
	config(){

		const loginForm = {
			view: 'form',
			localId: 'loginForm',
			width: 300,
			elements: [
				{ view: 'text', label: 'Username', name: 'username' },
				{ view: 'text', type: 'password', label: 'Password', name: 'password' },
				{
					margin: 5, cols: [
						{ view: 'button', localId: 'loginBtn', value: 'Login', type: 'form' },
						{ view: 'button', value: 'Cancel' }
					]
				}
			]
		};

		const link = {
			view: 'button',
			value: 'Create an account',
			click: () => {
				this.show('/register');
			}
		};

		return { 
			cols: [
				{},
				{	
					rows: [
						{},
						loginForm,
						link,
						{}
					]
				},
				{}
			]			
		};
	}

	init() {
		this.$$('loginBtn').attachEvent('onItemClick', () => {
			const values = this.$$('loginForm').getValues();
			const authorization = new Authorization();

			authorization.login(values).then((response) => {	
				if (response) {
					const userData = response.json().user;
					const id = userData.id;

					switch (userData.role_name) {
						case 'admin': 
							this.show(`admin.index?id=${id}`);
							break;
						case 'librarian': 
							this.show(`librarian.index?id=${id}/librarian.library`);
							break;
						case 'reader': 
							this.show(`reader.index?id=${id}/reader.main`);
							break;
					}
				}
				else {
					webix.message(response);
				}
			});				
		});
	}
}