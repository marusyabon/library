import './styles/app.css';
import {JetApp, EmptyRouter, HashRouter } from 'webix-jet';

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: '/login'
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => {
		const app = new MyApp();
		app.attachEvent('app:guard', (url, view, nav) => {
			if(url.indexOf('id') !== -1) {
				const urlParts = url.split('/');
				let targetPart;

				urlParts.forEach((el) => {
					if(el.indexOf('id') != -1) {
						targetPart = el;
			
					}
				});

				const i = targetPart.indexOf('id');
				const role = targetPart.split('.')[0];
				const id = targetPart.slice(i+3);

				webix.ajax().get('http://localhost:3000/check').then(
					(res) => {
						const response = res.json();

						if (!response || response.role != role || response.id != id) {
							app.show('/login');
						}
					},
					(error) => {
						if(error.status == 401) {
							app.show('/login');
						}						
					}
				);
			}
		});

		app.render();
	});
}