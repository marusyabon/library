import {JetView} from 'webix-jet';
import Authorization from '../../authorization';
import UsersModel from '../../models/users';
import UserForm from './userForm';

export default class TopView extends JetView{
	config(){

		const header = {
			type:'header', 
			template: 'Users list'
		};

		const logout = {
			view:'button', 
			localId:'logoutBtn', 
			value:'Logout', 
			width: 100,
			type:'form'
		};

		const dtable = {
			view: 'datatable',
			localId: 'usersList',
			columns: [
				{
					id: 'id',
					hidden: 1
				},
				{
					id: 'full_name',
					header: 'Name',
					minWidth: 180,
					fillspace: 1.5
				},
				{
					id: 'role_name',
					header: 'Role',
					width: 90
				},
				{
					id: 'passport_ID',
					header: 'Passport ID',
					width: 130
				},
				{
					id: 'birth_date',
					header: 'Birth date',
					width: 130
				},
				{
					id: 'address',
					header: 'Address',
					minWidth: 180,
					fillspace: 1.5
				},
				{
					id: 'phone_numbers',
					header: 'Phone number',
					width: 190
				},
				{
					id: 'email',
					header: 'Email',
					width: 180
				},
				{
					id: 'edit', 
					header: 'Edit', 
					width: 50,
					template: '{common.editIcon()}'
				}
			],
			onClick: {
				'wxi-pencil': (e, id) => {
					this.editUser(id);
				}
			}
		};

		const addUserBtn = {
			view: 'button',
			value: 'Add user',
			type: 'form',
			width: 100,
			click: () => {
				this.addUser();
			}
		};

		const ui = {
			rows:[
				{ 
					type: 'clean',
					cols: [header, logout] 
				},
				dtable,
				{
					cols: [
						{}, addUserBtn, {}
					]
				}											
			]
		};
		return ui;
	}

	init() {
		UsersModel.getDataFromServer().then((dbData) => {
			let usersArr = dbData.json();
			usersArr = usersArr.map((el) => {
				el.full_name = el.user_name + ' ' + el.user_surname;
				const format = webix.Date.dateToStr("%Y-%m-%d");
				el.birth_date = format(new Date(el.birth_date));
				return el;
			});
			this.usersData = usersArr;
			this.$$('usersList').parse(usersArr);
		});
		

		const authorization = new Authorization();

		this.$$('logoutBtn').attachEvent('onItemClick', () => {
			const app = this.app;
			const format = webix.Date.dateToStr("%Y-%m-%d");
			const currentDate = format(new Date());
			
			authorization.logout({currentDate}).then((response) => {
				if(response) {
					app.show('/login');
				}
			});
		});

		this._userForm = this.ui(UserForm);
	}

	editUser(id) {
		const user = this.usersData.find(el => el.id == id);
		this._userForm.showWindow(user);
	}

	addUser() {
		this._userForm.showWindow();
	}
}