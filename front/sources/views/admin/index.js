import {JetView} from 'webix-jet';
import Authorization from '../../authorization';
import UsersModel from '../../models/users';

export default class TopView extends JetView{
	config(){

		const header = {
			type:'header', 
			template: 'You entered as *here will be name*'
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
					id: 'user_id',
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
					fillspace: 1.5
				},
				{
					id: 'phone_number',
					header: 'Phone number',
					width: 190
				},
				{
					id: 'email',
					header: 'Email',
					width: 180
				}			
			]
		};

		const ui = {
			rows:[
				{ 
					cols: [header, logout] 
				},
				dtable							
			]
		};
		return ui;
	}

	init() {
		UsersModel.getDataFromServer().then((dbData) => {
			let usersArr = dbData.json().data;
			usersArr = usersArr.map((el) => {
				el.full_name = el.user_name + ' ' + el.user_surname;
				const format = webix.Date.dateToStr("%Y-%m-%d");
				el.birth_date = format(new Date(el.birth_date));
				return el;
			});
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
	}
}