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
					let token = response.json().token;
					token = token.split(' ')[1];
					const base64Url = token.split('.')[1];
					const userData = JSON.parse(window.atob(base64Url));
					this.app._userData = userData;
					const id = userData.id;

					if(userData.role === 'admin') {
						this.show(`admin.index?id=${id}`);
					}					
					if(userData.role === 'librarian') {
						this.show(`librarian.index?id=${id}/librarian.library`);
					}			
					if(userData.role === 'reader') {
						this.show(`reader.index?id=${id}/reader.main`);
					}			
				}
				else {
					webix.message(response);
				}
			});				
		});
	}
}