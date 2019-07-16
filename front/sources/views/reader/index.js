import {JetView} from 'webix-jet';
import Authorization from '../../authorization';

export default class TopView extends JetView{
	config(){

		const header = {
			type:'header', template:this.app.config.name, css:'webix_header app_header'
		};

		const menu = {
			view:'menu', 
			css:'app_menu',
			width:180, layout:'y', select:true,
			template:'<span class="webix_icon #icon#"></span> #value# ',
			value: 'main',
			data:[
				{ value:'My books', id:'main', icon:'fas fa-bookmark' },
				{ value:'Library', id:'library',  icon:'fas fa-book-reader' },
				{ value:'Settings', id:'settings',  icon:'fas fa-cog' },
			],
			on:{
				onMenuItemClick: (id) => {
					this.app.show('reader.index/reader.'+id);
				}
			}
		};

		const logout = {
			view:'button', 
			localId:'logoutBtn', 
			value:'Logout', 
			type:'form'
		};

		const ui = {
			type:'clean', paddingX:5, css:'app_layout', 
			cols:[
				{ paddingX:5, paddingY:10, rows: [ {css:'webix_shadow_medium', rows:[header, menu, logout]} ]},
				{ view: 'resizer', width: 5 },
				{
					type: 'wide', paddingY: 10, paddingX: 5, rows: [
						{ $subview: true }
					]
				}				
			]
		};

		return ui;
	}

	init() {
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