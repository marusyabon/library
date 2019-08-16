import { JetView } from 'webix-jet';
import usersModel from '../../models/users';
import OrdersForm from './ordersForm';


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
					id: 'orders',
					header: 'Orders',
					width: 70,
					template: '<i class="fas fa-folder-open"></i>'
				}
			],
			onClick: {
				'fa-folder-open': (e, id) => {
					this.showUserOrders(id);
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

		this.editOrders = this.ui(OrdersForm);
	}

	showUserOrders(id) {
		this.editOrders.showWindow(id);
	}
}