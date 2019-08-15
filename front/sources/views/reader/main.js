import { JetView } from 'webix-jet';
import ordersModel from '../../models/orders';

export default class MainView extends JetView{
	config() {
		const testResults = {
			view: 'datatable',
			localId: 'ordersList',
			select: true,
			columns: [	
				{
					id: 'id',
					hidden: true,
				},				
				{
					id: 'book_title',
					header: 'Book',
					fillspace: 1
				},
				{
					id: 'author_name',
					header: 'Author',
					fillspace: 1
				},
				{
					id: 'removeCol',
					header: 'Remove',
					css: 'center',
					width: 70,
					template: '<i class="fas fa-trash"></i>'
				}				
			],
			onClick: {
				'fa-trash': (e, id) => {
					this.removeBook(id);
				}
			}
		};

		const button = {
			view: 'button',
			id: 'addGroup',
			value: 'Add',
			type:'form',
			inputWidth: 100,
			click: () => {}
		};

		return { 
			rows: [testResults, button]
		};
	}

	init() {
		const userId = this.getParam("id", true);
		this.grid = this.$$('ordersList');

		ordersModel.getItems(userId).then((dbData) => {
			let ordersArr = dbData.json();
			this.$$('ordersList').parse(ordersArr);
		});
	}

	removeBook(id) {
		ordersModel.removeItem(id);
		return this.grid.remove(id);
	}

}