import { JetView } from 'webix-jet';
import usersModel from '../../models/users';

export default class UsersView extends JetView {
	config() {
		const dtable = {
			view: 'datatable',
			id: 'usersListLibrarian',
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
					id: 'edit',
					header: 'Edit',
					width: 50,
					template: '{common.editIcon()}'
				}
			],
			onClick: {
				'wxi-pencil': (e, id) => {
					// this.editUser(id);
				}
			}
		};

		const ui = {
			rows: [
				dtable
			]
		};
		return ui;
	}

	init() {
		usersModel.getReaders().then((dbData) => {
			let usersArr = dbData.json();
			usersArr = usersArr.map((el) => {
				el.full_name = el.user_name + ' ' + el.user_surname;				
				return el;
			});
			this.usersData = usersArr;
			$$('usersListLibrarian').parse(usersArr);
		});
		
	}
}