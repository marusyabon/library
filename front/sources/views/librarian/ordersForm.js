import { JetView } from 'webix-jet';
import ordersModel from '../../models/orders';

export default class OrdersForm extends JetView {
	config() {
		return {
			view: 'window',
			localId: 'userOrdersWindow',
			width: 600,
			position: 'center',
			body: {
				rows: [
					{
						view: 'form',
						localId: 'userOrdersForm',
						elements: [
							
						]					
					}
				]
			}
		};
	}

	init() {
	}

	showWindow(id) {
		this.getRoot().show();
	}
}