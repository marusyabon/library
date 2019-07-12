import { JetView } from 'webix-jet';

export default class MainView extends JetView{
	config() {
		const testResults = {
			view: 'datatable',
			id: 'groupList',
			select: true,
			columns: [
							
				{
					header: 'Add',
					css: 'center',
					width: 50,
					template: '<i class="fas fa-plus"></i>'
				},
				{
					id: 'removeCol',
					header: 'Remove',
					css: 'center',
					width: 70,
					template: '{common.trashIcon()}'
				}				
			]
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
		// $$('groupList').parse(groups);
	}
}