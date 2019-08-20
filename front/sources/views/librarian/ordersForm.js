import { JetView } from 'webix-jet';
import ordersModel from '../../models/orders';
import booksModel from '../../models/books';

export default class OrdersForm extends JetView {
	config() {
		return {
			view: 'window',
			localId: 'userOrdersWindow',
			width: 600,
			head: 'Ordered books',
			position: 'center',
			move: true,
			body: {
				view: 'form',	
				padding: 0,			
				elements: [
					{
						view: 'template',
						localId: 'userName',
						css: 'page_header center',
						height: 45,
						borderless: true
					},
					{
						view: 'multicombo',
						localId: 'ordersList',
						name: 'ordersList',
						suggest: []
					},
					{
						margin: 20,
						paddingY: 10,
						cols: [
							{},
							{
								view: 'button',
								type: 'form',
								label: 'Save',
								width: 80,
								click: () => {
									this.saveForm();
								}
							},
							{
								view: 'button',
								type: 'form',
								label: 'Cancel',
								width: 80,
								click: () => {
									this.$$('userOrdersWindow').hide();
								}
							},
							{}
						]
					}
				]	
			}
		};
	}

	showPopup(id, userName) {
		this.userId = id.row;
		this.popup = this.$$('userOrdersWindow');
		this.ordersList = this.$$('ordersList');
		this.$$('userName').setHTML(userName);

		webix.promise.all([
			ordersModel.getIdList(this.userId), 
			booksModel.getDataFromServer()
		]).then((results) => {
			const orders = results[0].json();
			
			let books = results[1].json();
			this.allBooks = books;
			books = books.map((el) => {
				el.value = `${el.author_name} - ${el.book_title}`;
				return el;
			});
			this.ordersList.define('suggest', books);
			this.ordersList.setValue(orders);
			this.ordersList.refresh();
		});
		this.getRoot().show();
	}

	saveForm() {
		const ordersListValue = this.ordersList.getValue();
		ordersModel.updateUserOrders(ordersListValue, this.userId);
		this.$$('userOrdersWindow').hide();
	}
}